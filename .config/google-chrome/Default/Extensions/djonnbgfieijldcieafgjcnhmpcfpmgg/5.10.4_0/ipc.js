/* Inter-process communication for PPE.
   Created by Daniel Vershinin
   2015-2016 (c) Polarr, Inc */

var workerSource = function () {
  /* POMessage constants */

  var MESSAGE_KEY_PARTIAL = "_i_partial";

  /* Base-64 */

  var Base64 = {};

  (function(){
    "use strict";

    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    // Use a lookup table to find the index.
    var lookup = new Uint8Array(256);
    for (var i = 0; i < chars.length; i++) {
      lookup[chars.charCodeAt(i)] = i;
    }

    Base64.encode = function(arraybuffer) {
      var bytes = new Uint8Array(arraybuffer),
        i, len = bytes.length, base64 = "";

      for (i = 0; i < len; i+=3) {
        base64 += chars[bytes[i] >> 2];
        base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
        base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
        base64 += chars[bytes[i + 2] & 63];
      }

      if ((len % 3) === 2) {
        base64 = base64.substring(0, base64.length - 1) + "=";
      } else if (len % 3 === 1) {
        base64 = base64.substring(0, base64.length - 2) + "==";
      }

      return base64;
    };

    Base64.decode =  function(base64) {
      var bufferLength = base64.length * 0.75,
        len = base64.length, i, p = 0,
        encoded1, encoded2, encoded3, encoded4;

      if (base64[base64.length - 1] === "=") {
        bufferLength--;
        if (base64[base64.length - 2] === "=") {
          bufferLength--;
        }
      }

      var arraybuffer = new ArrayBuffer(bufferLength),
        bytes = new Uint8Array(arraybuffer);

      for (i = 0; i < len; i+=4) {
        encoded1 = lookup[base64.charCodeAt(i)];
        encoded2 = lookup[base64.charCodeAt(i+1)];
        encoded3 = lookup[base64.charCodeAt(i+2)];
        encoded4 = lookup[base64.charCodeAt(i+3)];

        bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
        bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
        bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
      }

      return arraybuffer;
    };
  })();

  /*function base64ArrayBuffer(arrayBuffer)
  {
    var base64    = ''
    var encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

    var bytes         = new Uint8Array(arrayBuffer)
    var byteLength    = bytes.byteLength
    var byteRemainder = byteLength % 3
    var mainLength    = byteLength - byteRemainder

    var a, b, c, d
    var chunk

    // Main loop deals with bytes in chunks of 3
    for (var i = 0; i < mainLength; i = i + 3) {
      // Combine the three bytes into a single integer
      chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2]

      // Use bitmasks to extract 6-bit segments from the triplet
      a = (chunk & 16515072) >> 18 // 16515072 = (2^6 - 1) << 18
      b = (chunk & 258048)   >> 12 // 258048   = (2^6 - 1) << 12
      c = (chunk & 4032)     >>  6 // 4032     = (2^6 - 1) << 6
      d = chunk & 63               // 63       = 2^6 - 1

      // Convert the raw binary segments to the appropriate ASCII encoding
      base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d]
    }

    // Deal with the remaining bytes and padding
    if (byteRemainder == 1) {
      chunk = bytes[mainLength]

      a = (chunk & 252) >> 2 // 252 = (2^6 - 1) << 2

      // Set the 4 least significant bits to zero
      b = (chunk & 3)   << 4 // 3   = 2^2 - 1

      base64 += encodings[a] + encodings[b] + '=='
    } else if (byteRemainder == 2) {
      chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1]

      a = (chunk & 64512) >> 10 // 64512 = (2^6 - 1) << 10
      b = (chunk & 1008)  >>  4 // 1008  = (2^6 - 1) << 4

      // Set the 2 least significant bits to zero
      c = (chunk & 15)    <<  2 // 15    = 2^4 - 1

      base64 += encodings[a] + encodings[b] + encodings[c] + '='
    }

    return base64
  }*/

  /* Nested objects */

  var NestedObjects = {

    get : function(obj, path)
    {
      var parsed = NestedObjects.parse(path);
      return NestedObjects.getPathValue(parsed, obj);
    },

    set : function(obj, path, val)
    {
      var parsed = NestedObjects.parse(path);
      NestedObjects.setPathValue(parsed, val, obj);
    },

    parse : function(path)
    {
      var str = (path || '').replace(/\[/g, '.[');
      var parts = str.match(/(\\\.|[^.]+?)+/g);
      var re = /\[(\d+)\]$/;
      var ret = [];
      var mArr = null;

      for (var i = 0, len = parts.length; i < len; i++)
      {
        mArr = re.exec(parts[i]);
        ret.push(mArr ? { i: parseFloat(mArr[1]) } : { p: parts[i] });
      }

      return ret;
    },

    defined : function(val)
    {
      return !(!val && 'undefined' === typeof val);
    },

    getPathValue : function(parsed, obj)
    {
      var tmp = obj;
      var res;

      for (var i = 0, l = parsed.length; i < l; i++)
      {
        var part = parsed[i];
        if (tmp)
        {
          if (NestedObjects.defined(part.p)) tmp = tmp[part.p];
          else if (NestedObjects.defined(part.i)) tmp = tmp[part.i];
          if (i == (l - 1)) res = tmp;
        }
        else
        {
          res = undefined;
        }
      }

      return res;
    },

    setPathValue : function(parsed, val, obj)
    {
      var tmp = obj;
      var i = 0;
      var l = parsed.length;
      var part;

      for (; i < l; i++)
      {
        part = parsed[i];

        if (NestedObjects.defined(tmp) && i == (l - 1))
        {
          var x = NestedObjects.defined(part.p) ? part.p : part.i;
          tmp[x] = val;
        }
        else if (NestedObjects.defined(tmp))
        {
          if (NestedObjects.defined(part.p) && tmp[part.p])
          {
            tmp = tmp[part.p];
          }
          else if (NestedObjects.defined(part.i) && tmp[part.i])
          {
            tmp = tmp[part.i];
          }
          else
          {
            var next = parsed[i + 1];
            var x = NestedObjects.defined(part.p) ? part.p : part.i;
            var y = NestedObjects.defined(next.p) ? {} : [];
            tmp[x] = y;
            tmp = tmp[x];
          }
        }
        else
        {
          if (i == (l - 1)) tmp = val;
          else if (NestedObjects.defined(part.p)) tmp = {};
          else if (NestedObjects.defined(part.i)) tmp = [];
        }
      }
    }
  };

//Extracting partials
  encodePartials = function(message, path)
  {
    if (typeof path === "undefined" ) path = "";

    function encodePartialsData(data, path)
    {
      for (var key in data)
      {
        if (data[key] && data[key].buffer instanceof ArrayBuffer && data[key].byteLength !== undefined)
        {
          data[key] = { data : Base64.encode(data[key]) }
          data[key]["type"] = MESSAGE_KEY_PARTIAL;
          continue;
        }

        if (typeof data[key] === "object")
        {
          encodePartialsData(data[key], path.length != 0 ? path + "." + key : key);
        }
      }
    }

    encodePartialsData(message, path);
  }

  decodePartials = function(message, path)
  {
    if (typeof path === "undefined" ) path = "";

    function decodePartialsData(data, path)
    {
      for (var key in data)
      {
        if (data[key] != null && typeof data[key] === "object")
        {
          if (data[key]["type"] === MESSAGE_KEY_PARTIAL)
          {
            data[key] = Base64.decode(data[key]["data"]);
            continue;
          }
          else
          {
            decodePartialsData(data[key], path.length != 0 ? path + "." + key : key);
          }
        }
      }
    }

    decodePartialsData(message, path);
  }

  onmessage = function (e) {
  	var message = e.data.message

    switch (e.data.method) {
      case 'encodePartials':
        encodePartials(message, e.data.path)
        break;

      case 'decodePartials':
        decodePartials(message, e.data.path)
        break;
    }

    postMessage(message)
  }
}

// var workerBlob = new Blob(['(' + workerSource.toString() + '());'], { type: 'text/javascript' })
// var workerURL = URL.createObjectURL(workerBlob)
// var ipcWorker = new Worker(workerURL);
var ipcWorker = createWorker(workerSource)

var QUEUE = {}

ipcWorker.onmessage = function (e) {
	var message = e.data
	var id = message[POMessage.MESSAGE_KEY_ID]

	if (typeof QUEUE[id] === 'function') {
		QUEUE[id](message)
		delete QUEUE[id]
	}
}

function queueMessage (message, method, callback) {
  var id = message[POMessage.MESSAGE_KEY_ID]

  QUEUE[id] = callback

  ipcWorker.postMessage({
    method: method,
    message: message
  })
}

function encodePartials (message, callback) {
	queueMessage(message, 'encodePartials', callback)
}

function decodePartials (message, callback) {
  queueMessage(message, 'decodePartials', callback)
}

/* Message that contains identifier and automatically manages extraction of partials */

function POMessage(name, contents, identifier, replyIdentifier)
{
	this.name = name;
	this.contents = contents;
	this.keep = false;

	if (typeof replyIdentifier !== "undefined")
	{
		this.replyIdentifier = replyIdentifier;
	}
	else
	{
		this.replyIdentifier = -1;
	}

	this.partials = [];
	this.partialsLength = 0;

	if (typeof identifier === "undefined" || identifier == null)
	{
		this.identifier = POMessage.getNextMessageIdentifier();
	}
	else
	{
		this.identifier = identifier;
	}
}

/* POMessage instance methods */

//Getting message identifier
POMessage.prototype.getIdentifier = function()
{
	return this.identifier.toString();
}

//Serialising a message to be transmitted over some data pipe
POMessage.prototype.serialize = function(callback)
{
	var message = {};
	message[POMessage.MESSAGE_KEY_NAME] = this.name;
	message[POMessage.MESSAGE_KEY_DATA] = this.contents;
	message[POMessage.MESSAGE_KEY_ID] = this.identifier;
	message[POMessage.MESSAGE_KEY_KEEP] = this.keep;
	if (this.replyIdentifier !== -1) message[POMessage.MESSAGE_KEY_REPLY_ID] = this.replyIdentifier;

	//Encoding partials in the message

	// POMessage.encodePartials(message);
  //
	// callback(message);

  // use Worker
  encodePartials(message, callback)
}

/* POMessage static methods */

POMessage.getNextMessageIdentifier = function()
{
	return POMessage.MESSAGE_LAST_IDENTIFIER++;
}

//Extracting partials
POMessage.encodePartials = function(message, path)
{
	if (typeof path === "undefined" ) path = "";

	function encodePartialsData(data, path)
	{
		for (var key in data)
		{
			if (data[key] && data[key].buffer instanceof ArrayBuffer && data[key].byteLength !== undefined)
			{
				data[key] = { data : Base64.encode(data[key]) }
				data[key]["type"] = POMessage.MESSAGE_KEY_PARTIAL;
				continue;
			}

			if (typeof data[key] === "object")
			{
				encodePartialsData(data[key], path.length != 0 ? path + "." + key : key);
			}
		}
	}

	encodePartialsData(message, path);
}

POMessage.decodePartials = function(message, path)
{
	if (typeof path === "undefined" ) path = "";

	function decodePartialsData(data, path)
	{
		for (var key in data)
		{
			if (data[key] != null && typeof data[key] === "object")
			{
				if (data[key]["type"] === POMessage.MESSAGE_KEY_PARTIAL)
				{
					data[key] = Base64.decode(data[key]["data"]);
					continue;
				}
				else
				{
					decodePartialsData(data[key], path.length != 0 ? path + "." + key : key);
				}
			}
		}
	}

	decodePartialsData(message, path);
}

POMessage.deserialize = function(contents, callback)
{
	var message = new POMessage(contents[POMessage.MESSAGE_KEY_NAME], 
								contents[POMessage.MESSAGE_KEY_DATA], 
								contents[POMessage.MESSAGE_KEY_ID]);

	if (contents[POMessage.MESSAGE_KEY_REPLY_ID] != null)
	{
		message.replyIdentifier = contents[POMessage.MESSAGE_KEY_REPLY_ID];
	}

  // POMessage.decodePartials(message.contents);
  //
  // callback(message);

	// use Worker
  decodePartials(message, callback)
}

/* POMessage constants */

POMessage.MESSAGE_KEY_DATA = "_i_data";
POMessage.MESSAGE_KEY_ID = "_i_id";
POMessage.MESSAGE_KEY_REPLY_ID = "_i_reply_id"
POMessage.MESSAGE_KEY_NAME = "_i_name";
POMessage.MESSAGE_KEY_PARTIAL = "_i_partial";
POMessage.MESSAGE_KEY_KEEP = "_i_keep";
POMessage.MESSAGE_LAST_IDENTIFIER = 0;

/* Client */

/* Generic client responsible for sending messages to the server and receiving callbacks */
function POIPCClient(channel, debugChannel)
{
	//Server properties
	this.server = window.webkit.messageHandlers[channel];
	this.debugServer = window.webkit.messageHandlers[debugChannel];

	//Message handler
	this.messageHandler = null;
}

//Setting the messsages handler
POIPCClient.prototype.setMessagesHandler = function(handler)
{
	this.messageHandler = handler;
}

POIPCClient.prototype.sendMessage = function(message)
{
	//Notifying about the message been sent
	this.debugServer.postMessage(message.identifier);

	//Posting the main message
  message.serialize(function (message) {
		this.server.postMessage(message);
  }.bind(this))
}

/* Called by server */

POIPCClient.prototype.acceptMessage = function(contents)
{
	POMessage.deserialize(contents, function (message) {
		//Delivering instantly
		if (this.messageHandler != null)
		{
			this.messageHandler.call(this, message);
		}
  }.bind(this));
}

//Shared client instance
POIPCClient.sharedClient = new POIPCClient("ipc", "ipc-debug"); 

/* IPC manager */

function POIPCManager()
{
	var _this = this;

	//Event listeners
	this.eventListeners = {};

	//Messages with callbacks
	this.messagesWithCallbacks = {};

	//Action on incoming messages
	POIPCClient.sharedClient.setMessagesHandler(function(message)
	{
		if (message.replyIdentifier !== -1 && _this.messagesWithCallbacks[message.replyIdentifier] != null)
		{
			_this.messagesWithCallbacks[message.replyIdentifier].call(_this, message.contents);
			delete _this.messagesWithCallbacks[message.replyIdentifier];
			return;
		}

		if (_this.eventListeners[message.name] != null)
		{
			_this.eventListeners[message.name].call(_this, message.contents, function(result, keep) {

				//Keep is 'false' by default
				if (typeof keep === "undefined") keep = false;

				//Sending callback
				var replyMessage = new POMessage(message.name, result, null, message.identifier);
				replyMessage.keep = keep;
				
				POIPCClient.sharedClient.sendMessage(replyMessage);

			});
		}
	});
}

POIPCManager.prototype.waitForMessage = function(name, callback)
{
	if (callback != null)
	{
		this.eventListeners[name] = callback;
	}
}

POIPCManager.prototype.sendMessage = function(name, contents, callback)
{
	var message = new POMessage(name, contents);
	this.messagesWithCallbacks[message.identifier] = callback;
	POIPCClient.sharedClient.sendMessage(message);
}

POIPCManager.serviceImportURL = window.serviceImportURL;
POIPCManager.sharedManager = new POIPCManager();

/* Storage definition */

function POIPCStorage()
{
	this.manager = POIPCManager.sharedManager;
}

POIPCStorage.sharedStorage = new POIPCStorage();

POIPCStorage.prototype.getObject = function(key, callback)
{
	this.manager.sendMessage("POIPCKVS_GET", { "key" : key }, function(result)
	{
		if (callback != null) callback(result);
	});
}

POIPCStorage.prototype.setObject = function(key, value, callback)
{
	this.manager.sendMessage("POIPCKVS_SET", { "key" : key, "value" : value }, function(result)
	{
		if (callback != null)
		{
			callback(result);
		}
	});
}

/* Binary helpers */

function POIPCBinary(data)
{
	return data;
}


