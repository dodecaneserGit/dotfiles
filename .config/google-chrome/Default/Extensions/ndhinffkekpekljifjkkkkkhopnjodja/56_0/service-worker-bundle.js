/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 16171:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(34671),
    root = __webpack_require__(30714);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ 36766:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hashClear = __webpack_require__(62405),
    hashDelete = __webpack_require__(68341),
    hashGet = __webpack_require__(39644),
    hashHas = __webpack_require__(53784),
    hashSet = __webpack_require__(46264);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ 21022:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var listCacheClear = __webpack_require__(6821),
    listCacheDelete = __webpack_require__(7221),
    listCacheGet = __webpack_require__(21596),
    listCacheHas = __webpack_require__(69611),
    listCacheSet = __webpack_require__(10552);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ 75870:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(34671),
    root = __webpack_require__(30714);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ 68910:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var mapCacheClear = __webpack_require__(54069),
    mapCacheDelete = __webpack_require__(97477),
    mapCacheGet = __webpack_require__(50476),
    mapCacheHas = __webpack_require__(30984),
    mapCacheSet = __webpack_require__(4136);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ 84665:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(34671),
    root = __webpack_require__(30714);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ 39612:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(34671),
    root = __webpack_require__(30714);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ 32312:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(68910),
    setCacheAdd = __webpack_require__(61945),
    setCacheHas = __webpack_require__(34874);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ 47216:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(21022),
    stackClear = __webpack_require__(45331),
    stackDelete = __webpack_require__(57063),
    stackGet = __webpack_require__(90134),
    stackHas = __webpack_require__(9842),
    stackSet = __webpack_require__(39850);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ 59006:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(30714);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ 88851:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(30714);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ 98154:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(34671),
    root = __webpack_require__(30714);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ 48152:
/***/ ((module) => {

/**
 * A specialized version of `baseAggregator` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}

module.exports = arrayAggregator;


/***/ }),

/***/ 52995:
/***/ ((module) => {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ 50128:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIndexOf = __webpack_require__(58506);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),

/***/ 56184:
/***/ ((module) => {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),

/***/ 89754:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTimes = __webpack_require__(59605),
    isArguments = __webpack_require__(50079),
    isArray = __webpack_require__(25874),
    isBuffer = __webpack_require__(83601),
    isIndex = __webpack_require__(61908),
    isTypedArray = __webpack_require__(39046);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ 2275:
/***/ ((module) => {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ 82525:
/***/ ((module) => {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ 73525:
/***/ ((module) => {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ 12409:
/***/ ((module) => {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ }),

/***/ 9438:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(55097);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ 52110:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseEach = __webpack_require__(90830);

/**
 * Aggregates elements of `collection` on `accumulator` with keys transformed
 * by `iteratee` and values set by `setter`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function baseAggregator(collection, setter, iteratee, accumulator) {
  baseEach(collection, function(value, key, collection) {
    setter(accumulator, value, iteratee(value), collection);
  });
  return accumulator;
}

module.exports = baseAggregator;


/***/ }),

/***/ 90830:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseForOwn = __webpack_require__(57702),
    createBaseEach = __webpack_require__(78678);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ 70166:
/***/ ((module) => {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ 19128:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createBaseFor = __webpack_require__(23600);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ 57702:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFor = __webpack_require__(19128),
    keys = __webpack_require__(3511);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ 51855:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(20330),
    toKey = __webpack_require__(39628);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ 25920:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(82525),
    isArray = __webpack_require__(25874);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ 95271:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(59006),
    getRawTag = __webpack_require__(99650),
    objectToString = __webpack_require__(56881);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ 85088:
/***/ ((module) => {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ 58506:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFindIndex = __webpack_require__(70166),
    baseIsNaN = __webpack_require__(28306),
    strictIndexOf = __webpack_require__(60638);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ 80292:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseForOwn = __webpack_require__(57702);

/**
 * The base implementation of `_.invert` and `_.invertBy` which inverts
 * `object` with values transformed by `iteratee` and set by `setter`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform values.
 * @param {Object} accumulator The initial inverted object.
 * @returns {Function} Returns `accumulator`.
 */
function baseInverter(object, setter, iteratee, accumulator) {
  baseForOwn(object, function(value, key, object) {
    setter(accumulator, iteratee(value), key, object);
  });
  return accumulator;
}

module.exports = baseInverter;


/***/ }),

/***/ 94047:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(95271),
    isObjectLike = __webpack_require__(77583);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ 3899:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqualDeep = __webpack_require__(38309),
    isObjectLike = __webpack_require__(77583);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ 38309:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(47216),
    equalArrays = __webpack_require__(93522),
    equalByTag = __webpack_require__(49481),
    equalObjects = __webpack_require__(28370),
    getTag = __webpack_require__(29778),
    isArray = __webpack_require__(25874),
    isBuffer = __webpack_require__(83601),
    isTypedArray = __webpack_require__(39046);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ 14014:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(47216),
    baseIsEqual = __webpack_require__(3899);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ 28306:
/***/ ((module) => {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ 24228:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(27787),
    isMasked = __webpack_require__(97827),
    isObject = __webpack_require__(99400),
    toSource = __webpack_require__(40462);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ 40550:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(95271),
    isLength = __webpack_require__(44583),
    isObjectLike = __webpack_require__(77583);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ 4506:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseMatches = __webpack_require__(86330),
    baseMatchesProperty = __webpack_require__(52363),
    identity = __webpack_require__(9169),
    isArray = __webpack_require__(25874),
    property = __webpack_require__(86830);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ 35351:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPrototype = __webpack_require__(37894),
    nativeKeys = __webpack_require__(82325);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ 86330:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsMatch = __webpack_require__(14014),
    getMatchData = __webpack_require__(96539),
    matchesStrictComparable = __webpack_require__(37316);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ 52363:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqual = __webpack_require__(3899),
    get = __webpack_require__(75887),
    hasIn = __webpack_require__(74016),
    isKey = __webpack_require__(80759),
    isStrictComparable = __webpack_require__(7223),
    matchesStrictComparable = __webpack_require__(37316),
    toKey = __webpack_require__(39628);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ 88494:
/***/ ((module) => {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ 3644:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(51855);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ 97201:
/***/ ((module) => {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),

/***/ 59605:
/***/ ((module) => {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ 38071:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(59006),
    arrayMap = __webpack_require__(2275),
    isArray = __webpack_require__(25874),
    isSymbol = __webpack_require__(40975);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ 98232:
/***/ ((module) => {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ 93434:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(32312),
    arrayIncludes = __webpack_require__(50128),
    arrayIncludesWith = __webpack_require__(56184),
    cacheHas = __webpack_require__(65420),
    createSet = __webpack_require__(32196),
    setToArray = __webpack_require__(36968);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),

/***/ 65420:
/***/ ((module) => {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ 20330:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(25874),
    isKey = __webpack_require__(80759),
    stringToPath = __webpack_require__(69505),
    toString = __webpack_require__(60983);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ 26311:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSlice = __webpack_require__(97201);

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

module.exports = castSlice;


/***/ }),

/***/ 46450:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(30714);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ 72863:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayAggregator = __webpack_require__(48152),
    baseAggregator = __webpack_require__(52110),
    baseIteratee = __webpack_require__(4506),
    isArray = __webpack_require__(25874);

/**
 * Creates a function like `_.groupBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} [initializer] The accumulator object initializer.
 * @returns {Function} Returns the new aggregator function.
 */
function createAggregator(setter, initializer) {
  return function(collection, iteratee) {
    var func = isArray(collection) ? arrayAggregator : baseAggregator,
        accumulator = initializer ? initializer() : {};

    return func(collection, setter, baseIteratee(iteratee, 2), accumulator);
  };
}

module.exports = createAggregator;


/***/ }),

/***/ 78678:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(73069);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ 23600:
/***/ ((module) => {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ 4338:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castSlice = __webpack_require__(26311),
    hasUnicode = __webpack_require__(73493),
    stringToArray = __webpack_require__(98337),
    toString = __webpack_require__(60983);

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

module.exports = createCaseFirst;


/***/ }),

/***/ 75273:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseInverter = __webpack_require__(80292);

/**
 * Creates a function like `_.invertBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} toIteratee The function to resolve iteratees.
 * @returns {Function} Returns the new inverter function.
 */
function createInverter(setter, toIteratee) {
  return function(object, iteratee) {
    return baseInverter(object, setter, toIteratee(iteratee), {});
  };
}

module.exports = createInverter;


/***/ }),

/***/ 32196:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Set = __webpack_require__(39612),
    noop = __webpack_require__(93883),
    setToArray = __webpack_require__(36968);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),

/***/ 93522:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(32312),
    arraySome = __webpack_require__(73525),
    cacheHas = __webpack_require__(65420);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ 49481:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(59006),
    Uint8Array = __webpack_require__(88851),
    eq = __webpack_require__(55097),
    equalArrays = __webpack_require__(93522),
    mapToArray = __webpack_require__(38866),
    setToArray = __webpack_require__(36968);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ 28370:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getAllKeys = __webpack_require__(92573);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ 11603:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ 92573:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(25920),
    getSymbols = __webpack_require__(19183),
    keys = __webpack_require__(3511);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ 31200:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isKeyable = __webpack_require__(50095);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ 96539:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isStrictComparable = __webpack_require__(7223),
    keys = __webpack_require__(3511);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ 34671:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsNative = __webpack_require__(24228),
    getValue = __webpack_require__(97559);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ 99650:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(59006);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ 19183:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayFilter = __webpack_require__(52995),
    stubArray = __webpack_require__(92982);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ 29778:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DataView = __webpack_require__(16171),
    Map = __webpack_require__(75870),
    Promise = __webpack_require__(84665),
    Set = __webpack_require__(39612),
    WeakMap = __webpack_require__(98154),
    baseGetTag = __webpack_require__(95271),
    toSource = __webpack_require__(40462);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ 97559:
/***/ ((module) => {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ 99663:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(20330),
    isArguments = __webpack_require__(50079),
    isArray = __webpack_require__(25874),
    isIndex = __webpack_require__(61908),
    isLength = __webpack_require__(44583),
    toKey = __webpack_require__(39628);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ 73493:
/***/ ((module) => {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),

/***/ 62405:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(68637);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ 68341:
/***/ ((module) => {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ 39644:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(68637);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ 53784:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(68637);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ 46264:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(68637);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ 61908:
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ 80759:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(25874),
    isSymbol = __webpack_require__(40975);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ 50095:
/***/ ((module) => {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ 97827:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var coreJsData = __webpack_require__(46450);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ 37894:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ 7223:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(99400);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ 6821:
/***/ ((module) => {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ 7221:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(9438);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ 21596:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(9438);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ 69611:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(9438);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ 10552:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(9438);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ 54069:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Hash = __webpack_require__(36766),
    ListCache = __webpack_require__(21022),
    Map = __webpack_require__(75870);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ 97477:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(31200);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ 50476:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(31200);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ 30984:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(31200);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ 4136:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(31200);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ 38866:
/***/ ((module) => {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ 37316:
/***/ ((module) => {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ 82121:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var memoize = __webpack_require__(68487);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ 68637:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(34671);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ 82325:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(78546);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ 96574:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(11603);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;


/***/ }),

/***/ 56881:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ 78546:
/***/ ((module) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ 30714:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(11603);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ 61945:
/***/ ((module) => {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ 34874:
/***/ ((module) => {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ 36968:
/***/ ((module) => {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ 45331:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(21022);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ 57063:
/***/ ((module) => {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ 90134:
/***/ ((module) => {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ 9842:
/***/ ((module) => {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ 39850:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(21022),
    Map = __webpack_require__(75870),
    MapCache = __webpack_require__(68910);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ 60638:
/***/ ((module) => {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ 98337:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var asciiToArray = __webpack_require__(12409),
    hasUnicode = __webpack_require__(73493),
    unicodeToArray = __webpack_require__(74361);

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;


/***/ }),

/***/ 69505:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var memoizeCapped = __webpack_require__(82121);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ 39628:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isSymbol = __webpack_require__(40975);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ 40462:
/***/ ((module) => {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ 74361:
/***/ ((module) => {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;


/***/ }),

/***/ 89697:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toString = __webpack_require__(60983),
    upperFirst = __webpack_require__(4513);

/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * _.capitalize('FRED');
 * // => 'Fred'
 */
function capitalize(string) {
  return upperFirst(toString(string).toLowerCase());
}

module.exports = capitalize;


/***/ }),

/***/ 88295:
/***/ ((module) => {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ 55097:
/***/ ((module) => {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ 75887:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(51855);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ 74016:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseHasIn = __webpack_require__(85088),
    hasPath = __webpack_require__(99663);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ 9169:
/***/ ((module) => {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ 97703:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var constant = __webpack_require__(88295),
    createInverter = __webpack_require__(75273),
    identity = __webpack_require__(9169);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Creates an object composed of the inverted keys and values of `object`.
 * If `object` contains duplicate values, subsequent values overwrite
 * property assignments of previous values.
 *
 * @static
 * @memberOf _
 * @since 0.7.0
 * @category Object
 * @param {Object} object The object to invert.
 * @returns {Object} Returns the new inverted object.
 * @example
 *
 * var object = { 'a': 1, 'b': 2, 'c': 1 };
 *
 * _.invert(object);
 * // => { '1': 'c', '2': 'b' }
 */
var invert = createInverter(function(result, value, key) {
  if (value != null &&
      typeof value.toString != 'function') {
    value = nativeObjectToString.call(value);
  }

  result[value] = key;
}, constant(identity));

module.exports = invert;


/***/ }),

/***/ 50079:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsArguments = __webpack_require__(94047),
    isObjectLike = __webpack_require__(77583);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ 25874:
/***/ ((module) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ 73069:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(27787),
    isLength = __webpack_require__(44583);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ 83601:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(30714),
    stubFalse = __webpack_require__(36408);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;


/***/ }),

/***/ 41563:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqual = __webpack_require__(3899);

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ }),

/***/ 27787:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(95271),
    isObject = __webpack_require__(99400);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ 44583:
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ 99400:
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ 77583:
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ 40975:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(95271),
    isObjectLike = __webpack_require__(77583);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ 39046:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsTypedArray = __webpack_require__(40550),
    baseUnary = __webpack_require__(98232),
    nodeUtil = __webpack_require__(96574);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ 3511:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(89754),
    baseKeys = __webpack_require__(35351),
    isArrayLike = __webpack_require__(73069);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ 68487:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(68910);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ 93883:
/***/ ((module) => {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ 35645:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createAggregator = __webpack_require__(72863);

/**
 * Creates an array of elements split into two groups, the first of which
 * contains elements `predicate` returns truthy for, the second of which
 * contains elements `predicate` returns falsey for. The predicate is
 * invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the array of grouped elements.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': false },
 *   { 'user': 'fred',    'age': 40, 'active': true },
 *   { 'user': 'pebbles', 'age': 1,  'active': false }
 * ];
 *
 * _.partition(users, function(o) { return o.active; });
 * // => objects for [['fred'], ['barney', 'pebbles']]
 *
 * // The `_.matches` iteratee shorthand.
 * _.partition(users, { 'age': 1, 'active': false });
 * // => objects for [['pebbles'], ['barney', 'fred']]
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.partition(users, ['active', false]);
 * // => objects for [['barney', 'pebbles'], ['fred']]
 *
 * // The `_.property` iteratee shorthand.
 * _.partition(users, 'active');
 * // => objects for [['fred'], ['barney', 'pebbles']]
 */
var partition = createAggregator(function(result, value, key) {
  result[key ? 0 : 1].push(value);
}, function() { return [[], []]; });

module.exports = partition;


/***/ }),

/***/ 86830:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseProperty = __webpack_require__(88494),
    basePropertyDeep = __webpack_require__(3644),
    isKey = __webpack_require__(80759),
    toKey = __webpack_require__(39628);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ 92982:
/***/ ((module) => {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ 36408:
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ 60983:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseToString = __webpack_require__(38071);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ 93654:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseUniq = __webpack_require__(93434);

/**
 * This method is like `_.uniq` except that it accepts `comparator` which
 * is invoked to compare elements of `array`. The order of result values is
 * determined by the order they occur in the array.The comparator is invoked
 * with two arguments: (arrVal, othVal).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
 *
 * _.uniqWith(objects, _.isEqual);
 * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
 */
function uniqWith(array, comparator) {
  comparator = typeof comparator == 'function' ? comparator : undefined;
  return (array && array.length) ? baseUniq(array, undefined, comparator) : [];
}

module.exports = uniqWith;


/***/ }),

/***/ 4513:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createCaseFirst = __webpack_require__(4338);

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

module.exports = upperFirst;


/***/ }),

/***/ 17265:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(23034);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 5821:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(17265)();
}


/***/ }),

/***/ 23034:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 62921:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(22155),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}__webpack_unused_export__=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 66018:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return"function"===typeof a?a:null}
var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}E.prototype.isReactComponent={};
E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}var H=G.prototype=new F;
H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
function N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c)}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}
var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};function X(){throw Error("act(...) is not supported in production builds of React.");}
exports.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments)},e)},count:function(a){var b=0;S(a,function(){b++});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};exports.Component=E;exports.Fragment=p;exports.Profiler=r;exports.PureComponent=G;exports.StrictMode=q;exports.Suspense=w;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;exports.act=X;
exports.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};exports.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};
exports.forwardRef=function(a){return{$$typeof:v,render:a}};exports.isValidElement=O;exports.lazy=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};exports.memo=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}};exports.startTransition=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}};exports.unstable_act=X;exports.useCallback=function(a,b){return U.current.useCallback(a,b)};exports.useContext=function(a){return U.current.useContext(a)};
exports.useDebugValue=function(){};exports.useDeferredValue=function(a){return U.current.useDeferredValue(a)};exports.useEffect=function(a,b){return U.current.useEffect(a,b)};exports.useId=function(){return U.current.useId()};exports.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};exports.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};exports.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};
exports.useMemo=function(a,b){return U.current.useMemo(a,b)};exports.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};exports.useRef=function(a){return U.current.useRef(a)};exports.useState=function(a){return U.current.useState(a)};exports.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};exports.useTransition=function(){return U.current.useTransition()};exports.version="18.3.1";


/***/ }),

/***/ 22155:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(66018);
} else {}


/***/ }),

/***/ 65723:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(62921);
} else {}


/***/ }),

/***/ 30395:
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ./src/content/app/lib/apiUtils.js
function setBackend(backend) {
  let authBackend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  globalThis.BACKEND = backend;
  globalThis.AUTH_BACKEND = authBackend !== null && authBackend !== void 0 ? authBackend : backend;
}
;// CONCATENATED MODULE: ../../libs/utils/src/jsUtils.js
/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 */
function jsUtils_isNullish(value) {
  return value === null || value === undefined;
}
function noop() {}
;// CONCATENATED MODULE: ./src/content/app/lib/cryptoUtils.js
/**
 * Character set to generate code verifier defined in rfc7636.
 */
const PKCE_CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';

/**
 * Generates random state
 */
function generateRandomState(lengthOfState) {
  const output = new Uint32Array(lengthOfState);
  crypto.getRandomValues(output);
  return Array.from(output).map(num => PKCE_CHARSET[num % PKCE_CHARSET.length]).join('');
}
;// CONCATENATED MODULE: ../../libs/utils/src/storageUtils.js
// eslint-disable-next-line import/prefer-default-export
function createCookieStorage() {
  return {
    removeItem(name) {
      const date = new Date();
      date.setTime(date.getTime() + -1 * 24 * 60 * 60 * 1000);
      const expires = '; expires=' + date.toGMTString();
      document.cookie = name + '=' + expires + ';path=/';
    },
    setItem(name, value) {
      const date = new Date();
      date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
      const expires = '; expires=' + date.toGMTString();
      document.cookie = name + '=' + value + expires + ';path=/';
    },
    getItem(name) {
      const nameEq = name + '=';
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(nameEq)) {
          return cookie.substring(nameEq.length);
        }
      }
      return null;
    }
  };
}
;// CONCATENATED MODULE: ../../libs/utils/src/sessionUtils.js


// simple marker representing the last state of the account, only used for redirects
const authedMarkerKey = 'feedly.authed';
const sessionKey = 'feedly.session';
const serverSessionKey = 'feedly.session.server';
const cookieStorage = createCookieStorage();
const storage = isLocalStorageSupported() ? window.localStorage : null;
function isLocalStorageSupported() {
  try {
    const testKey = 'test';
    const testValue = '1';
    window.localStorage.setItem(testKey, testValue);
    const readValue = window.localStorage.getItem(testKey);
    window.localStorage.removeItem(testKey);
    return readValue === testValue;
  } catch (error) {
    return false;
  }
}
function isSessionValid(session) {
  return (session === null || session === void 0 ? void 0 : session.plan) && (session === null || session === void 0 ? void 0 : session.feedlyToken) && (session === null || session === void 0 ? void 0 : session.feedlyExpirationTime) > new Date().getTime();
}
class SessionUtilsWeb {
  constructor() {
    this.cached = null;
    this.cookieStorageSynced = false;
  }
  load() {
    try {
      // Migrate from old cookie storage to new local storage
      if (storage) {
        const cookieData = cookieStorage.getItem(sessionKey);
        if (cookieData != null && cookieData !== '') {
          cookieStorage.removeItem(sessionKey);
          this.save(JSON.parse(cookieData));
        }
      }

      // Migrate server session to client session
      let serverData = cookieStorage.getItem(serverSessionKey);
      if (serverData != null && serverData !== '') {
        // server session is base64-encoded
        serverData = window.atob(serverData);
        cookieStorage.removeItem(serverSessionKey);
        this.save(JSON.parse(serverData));
      }

      // load session data from either local storage if it is supported
      // or cookie storage (fallback)
      const data = storage ? storage.getItem(sessionKey) : cookieStorage.getItem(sessionKey);
      if (data != null && data !== '') {
        this.cached = JSON.parse(data);
      } else {
        this.cached = null;
      }

      // rename the feedlyPlan property returned by the server to plan
      if (this.cached && !this.cached.plan && this.cached.feedlyPlan) {
        this.cached.plan = this.cached.feedlyPlan;
        delete this.cached.feedlyPlan;
        this.save(this.cached);
      }

      // Load is called a lot in the app and writing the session to cookie
      // is expensive, so we only want to do it once.
      if (this._needsCookieSync() && !this.cookieStorageSynced) {
        this._saveToCookieStorage(this.cached);
        this.cookieStorageSynced = true;
      }
      return Object.freeze(this.cached);
    } catch (error) {
      console.error('failed to load session', error);
      return null;
    }
  }
  save(session) {
    if (!session) {
      this.clear();
      return;
    }
    this.cached = session;
    if (storage) {
      storage.setItem(sessionKey, JSON.stringify(session));
    }
    this.updateAuthedMarker();
    if (!storage || this._needsCookieSync()) {
      this.cookieStorageSynced = true;
      this._saveToCookieStorage(session);
    }
  }
  clear() {
    this.cached = null;
    this.updateAuthedMarker();
    cookieStorage.removeItem(serverSessionKey);
    cookieStorage.removeItem(sessionKey);
    if (storage) {
      storage.removeItem(sessionKey);
    }
  }

  // When Feedly mini is installed, we want to copy the session into
  // a cookie so that it can be accessed by the extension.
  _saveToCookieStorage(session) {
    if (!session) {
      cookieStorage.removeItem(sessionKey);
    } else {
      cookieStorage.setItem(sessionKey, JSON.stringify(session));
    }
  }
  updateAuthedMarker() {
    if (this.cached) {
      cookieStorage.setItem(authedMarkerKey, '1');
    } else {
      cookieStorage.removeItem(authedMarkerKey);
    }
  }

  // Determine if the Feedly Mini extension is installed.
  _needsCookieSync() {
    try {
      return document.body.getAttribute('data-enricher') === 'yes';
    } catch (error) {
      return false;
    }
  }
}
;// CONCATENATED MODULE: ../../libs/utils/src/durationUtils.js
const durationUtils_MINUTE = 60 * 1000;
function durationUtils_DAYS(days) {
  return days * 24 * 60 * durationUtils_MINUTE;
}
;// CONCATENATED MODULE: ./src/content/app/lib/durationUtils.js

function MINUTES(m) {
  return m * durationUtils_MINUTE;
}
function HOURS(h) {
  return h * 60 * MINUTE;
}

// "wave": "2013.7"
function isRecentWave(wave) {
  if (wave == null) {
    return true;
  }
  const parts = wave.split('.');
  if (parts.length != 2) {
    return true;
  }
  const yyyy = parseInt(parts[0]);
  const ww = parseInt(parts[1]);
  const cy = new Date().getFullYear();
  const wy = getCurrentWeekNumber();
  const delta = (cy - yyyy) * 52 + (wy - ww);
  return delta < 4;
}
function getCurrentWeekNumber() {
  const d = new Date();
  d.setHours(0, 0, 0);
  d.setDate(d.getDate() + 4 - (d.getDay() || 7));
  return Math.ceil(((d - new Date(d.getFullYear(), 0, 1)) / 8.64e7 + 1) / 7);
}

/**
 * @param {Number} time - UTC time in ms
 * @returns {Number} the number of days the passed time is from now
 */
function getDaysUntil(time) {
  if (!time) {
    return null;
  }
  return Math.floor((time - Date.now()) / DAYS(1));
}
function isInNextMonth(time) {
  return willOccurWithin(time, 30);
}
function isInNextWeek(time) {
  return willOccurWithin(time, 7);
}

/**
 * @param {Number} time - UTC time in ms
 * @param {Number} numDays
 * @returns {Boolean}
 */
function willOccurWithin(time, numDays) {
  if (!time || !numDays) {
    return false;
  }
  const delta = time - Date.now();
  return delta >= 0 && delta < DAYS(numDays);
}
;// CONCATENATED MODULE: ./src/content/app/lib/httpError.js
class HttpError extends Error {
  constructor(_ref) {
    let {
      errorMessage,
      errorCode,
      errorId,
      declineCode
    } = _ref;
    super(errorMessage || 'network error');
    this.name = 'HttpError';
    this.errorMessage = errorMessage;
    this.errorCode = errorCode;
    this.errorId = errorId;
    this.declineCode = declineCode;
    this.debugMessage = "".concat(errorCode, " / ").concat(errorMessage, " / ").concat(errorId);
  }
}
;// CONCATENATED MODULE: ./src/content/app/lib/mobileConstants.js
const DisplayOrientations = Object.freeze({
  landscape: 'landscape',
  portrait: 'portrait'
});
const OrientationWidths = Object.freeze({
  landscape: 884,
  portrait: 656
});
const mobileConstants_mobileSessionKey = 'feedly_local_session.cloud';
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@capacitor+core@6.1.1/node_modules/@capacitor/core/dist/index.js
/*! Capacitor: https://capacitorjs.com/ - MIT License */
const createCapacitorPlatforms = (win) => {
    const defaultPlatformMap = new Map();
    defaultPlatformMap.set('web', { name: 'web' });
    const capPlatforms = win.CapacitorPlatforms || {
        currentPlatform: { name: 'web' },
        platforms: defaultPlatformMap,
    };
    const addPlatform = (name, platform) => {
        capPlatforms.platforms.set(name, platform);
    };
    const setPlatform = (name) => {
        if (capPlatforms.platforms.has(name)) {
            capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
        }
    };
    capPlatforms.addPlatform = addPlatform;
    capPlatforms.setPlatform = setPlatform;
    return capPlatforms;
};
const initPlatforms = (win) => (win.CapacitorPlatforms = createCapacitorPlatforms(win));
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const CapacitorPlatforms = /*#__PURE__*/ initPlatforms((typeof globalThis !== 'undefined'
    ? globalThis
    : typeof self !== 'undefined'
        ? self
        : typeof window !== 'undefined'
            ? window
            : typeof __webpack_require__.g !== 'undefined'
                ? __webpack_require__.g
                : {}));
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const addPlatform = CapacitorPlatforms.addPlatform;
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const setPlatform = CapacitorPlatforms.setPlatform;

const legacyRegisterWebPlugin = (cap, webPlugin) => {
    var _a;
    const config = webPlugin.config;
    const Plugins = cap.Plugins;
    if (!(config === null || config === void 0 ? void 0 : config.name)) {
        // TODO: add link to upgrade guide
        throw new Error(`Capacitor WebPlugin is using the deprecated "registerWebPlugin()" function, but without the config. Please use "registerPlugin()" instead to register this web plugin."`);
    }
    // TODO: add link to upgrade guide
    console.warn(`Capacitor plugin "${config.name}" is using the deprecated "registerWebPlugin()" function`);
    if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {
        // Add the web plugin into the plugins registry if there already isn't
        // an existing one. If it doesn't already exist, that means
        // there's no existing native implementation for it.
        // - OR -
        // If we already have a plugin registered (meaning it was defined in the native layer),
        // then we should only overwrite it if the corresponding web plugin activates on
        // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
        Plugins[config.name] = webPlugin;
    }
};

var ExceptionCode;
(function (ExceptionCode) {
    /**
     * API is not implemented.
     *
     * This usually means the API can't be used because it is not implemented for
     * the current platform.
     */
    ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
    /**
     * API is not available.
     *
     * This means the API can't be used right now because:
     *   - it is currently missing a prerequisite, such as network connectivity
     *   - it requires a particular platform or browser version
     */
    ExceptionCode["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));
class CapacitorException extends Error {
    constructor(message, code, data) {
        super(message);
        this.message = message;
        this.code = code;
        this.data = data;
    }
}
const getPlatformId = (win) => {
    var _a, _b;
    if (win === null || win === void 0 ? void 0 : win.androidBridge) {
        return 'android';
    }
    else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
        return 'ios';
    }
    else {
        return 'web';
    }
};

const createCapacitor = (win) => {
    var _a, _b, _c, _d, _e;
    const capCustomPlatform = win.CapacitorCustomPlatform || null;
    const cap = win.Capacitor || {};
    const Plugins = (cap.Plugins = cap.Plugins || {});
    /**
     * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
     */
    const capPlatforms = win.CapacitorPlatforms;
    const defaultGetPlatform = () => {
        return capCustomPlatform !== null
            ? capCustomPlatform.name
            : getPlatformId(win);
    };
    const getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;
    const defaultIsNativePlatform = () => getPlatform() !== 'web';
    const isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;
    const defaultIsPluginAvailable = (pluginName) => {
        const plugin = registeredPlugins.get(pluginName);
        if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
            // JS implementation available for the current platform.
            return true;
        }
        if (getPluginHeader(pluginName)) {
            // Native implementation available.
            return true;
        }
        return false;
    };
    const isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) ||
        defaultIsPluginAvailable;
    const defaultGetPluginHeader = (pluginName) => { var _a; return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(h => h.name === pluginName); };
    const getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;
    const handleError = (err) => win.console.error(err);
    const pluginMethodNoop = (_target, prop, pluginName) => {
        return Promise.reject(`${pluginName} does not have an implementation of "${prop}".`);
    };
    const registeredPlugins = new Map();
    const defaultRegisterPlugin = (pluginName, jsImplementations = {}) => {
        const registeredPlugin = registeredPlugins.get(pluginName);
        if (registeredPlugin) {
            console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
            return registeredPlugin.proxy;
        }
        const platform = getPlatform();
        const pluginHeader = getPluginHeader(pluginName);
        let jsImplementation;
        const loadPluginImplementation = async () => {
            if (!jsImplementation && platform in jsImplementations) {
                jsImplementation =
                    typeof jsImplementations[platform] === 'function'
                        ? (jsImplementation = await jsImplementations[platform]())
                        : (jsImplementation = jsImplementations[platform]);
            }
            else if (capCustomPlatform !== null &&
                !jsImplementation &&
                'web' in jsImplementations) {
                jsImplementation =
                    typeof jsImplementations['web'] === 'function'
                        ? (jsImplementation = await jsImplementations['web']())
                        : (jsImplementation = jsImplementations['web']);
            }
            return jsImplementation;
        };
        const createPluginMethod = (impl, prop) => {
            var _a, _b;
            if (pluginHeader) {
                const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(m => prop === m.name);
                if (methodHeader) {
                    if (methodHeader.rtype === 'promise') {
                        return (options) => cap.nativePromise(pluginName, prop.toString(), options);
                    }
                    else {
                        return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
                    }
                }
                else if (impl) {
                    return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
                }
            }
            else if (impl) {
                return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
            }
            else {
                throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
            }
        };
        const createPluginMethodWrapper = (prop) => {
            let remove;
            const wrapper = (...args) => {
                const p = loadPluginImplementation().then(impl => {
                    const fn = createPluginMethod(impl, prop);
                    if (fn) {
                        const p = fn(...args);
                        remove = p === null || p === void 0 ? void 0 : p.remove;
                        return p;
                    }
                    else {
                        throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
                    }
                });
                if (prop === 'addListener') {
                    p.remove = async () => remove();
                }
                return p;
            };
            // Some flair ✨
            wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;
            Object.defineProperty(wrapper, 'name', {
                value: prop,
                writable: false,
                configurable: false,
            });
            return wrapper;
        };
        const addListener = createPluginMethodWrapper('addListener');
        const removeListener = createPluginMethodWrapper('removeListener');
        const addListenerNative = (eventName, callback) => {
            const call = addListener({ eventName }, callback);
            const remove = async () => {
                const callbackId = await call;
                removeListener({
                    eventName,
                    callbackId,
                }, callback);
            };
            const p = new Promise(resolve => call.then(() => resolve({ remove })));
            p.remove = async () => {
                console.warn(`Using addListener() without 'await' is deprecated.`);
                await remove();
            };
            return p;
        };
        const proxy = new Proxy({}, {
            get(_, prop) {
                switch (prop) {
                    // https://github.com/facebook/react/issues/20030
                    case '$$typeof':
                        return undefined;
                    case 'toJSON':
                        return () => ({});
                    case 'addListener':
                        return pluginHeader ? addListenerNative : addListener;
                    case 'removeListener':
                        return removeListener;
                    default:
                        return createPluginMethodWrapper(prop);
                }
            },
        });
        Plugins[pluginName] = proxy;
        registeredPlugins.set(pluginName, {
            name: pluginName,
            proxy,
            platforms: new Set([
                ...Object.keys(jsImplementations),
                ...(pluginHeader ? [platform] : []),
            ]),
        });
        return proxy;
    };
    const registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin;
    // Add in convertFileSrc for web, it will already be available in native context
    if (!cap.convertFileSrc) {
        cap.convertFileSrc = filePath => filePath;
    }
    cap.getPlatform = getPlatform;
    cap.handleError = handleError;
    cap.isNativePlatform = isNativePlatform;
    cap.isPluginAvailable = isPluginAvailable;
    cap.pluginMethodNoop = pluginMethodNoop;
    cap.registerPlugin = registerPlugin;
    cap.Exception = CapacitorException;
    cap.DEBUG = !!cap.DEBUG;
    cap.isLoggingEnabled = !!cap.isLoggingEnabled;
    // Deprecated props
    cap.platform = cap.getPlatform();
    cap.isNative = cap.isNativePlatform();
    return cap;
};
const initCapacitorGlobal = (win) => (win.Capacitor = createCapacitor(win));

const Capacitor = /*#__PURE__*/ initCapacitorGlobal(typeof globalThis !== 'undefined'
    ? globalThis
    : typeof self !== 'undefined'
        ? self
        : typeof window !== 'undefined'
            ? window
            : typeof __webpack_require__.g !== 'undefined'
                ? __webpack_require__.g
                : {});
const registerPlugin = Capacitor.registerPlugin;
/**
 * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
 * Capacitor v3 plugins should import the plugin directly. This "Plugins"
 * export is deprecated in v3, and will be removed in v4.
 */
const Plugins = Capacitor.Plugins;
/**
 * Provided for backwards compatibility. Use the registerPlugin() API
 * instead, and provide the web plugin as the "web" implmenetation.
 * For example
 *
 * export const Example = registerPlugin('Example', {
 *   web: () => import('./web').then(m => new m.Example())
 * })
 *
 * @deprecated Deprecated in v3, will be removed from v4.
 */
const registerWebPlugin = (plugin) => legacyRegisterWebPlugin(Capacitor, plugin);

/**
 * Base class web plugins should extend.
 */
class WebPlugin {
    constructor(config) {
        this.listeners = {};
        this.retainedEventArguments = {};
        this.windowListeners = {};
        if (config) {
            // TODO: add link to upgrade guide
            console.warn(`Capacitor WebPlugin "${config.name}" config object was deprecated in v3 and will be removed in v4.`);
            this.config = config;
        }
    }
    addListener(eventName, listenerFunc) {
        let firstListener = false;
        const listeners = this.listeners[eventName];
        if (!listeners) {
            this.listeners[eventName] = [];
            firstListener = true;
        }
        this.listeners[eventName].push(listenerFunc);
        // If we haven't added a window listener for this event and it requires one,
        // go ahead and add it
        const windowListener = this.windowListeners[eventName];
        if (windowListener && !windowListener.registered) {
            this.addWindowListener(windowListener);
        }
        if (firstListener) {
            this.sendRetainedArgumentsForEvent(eventName);
        }
        const remove = async () => this.removeListener(eventName, listenerFunc);
        const p = Promise.resolve({ remove });
        return p;
    }
    async removeAllListeners() {
        this.listeners = {};
        for (const listener in this.windowListeners) {
            this.removeWindowListener(this.windowListeners[listener]);
        }
        this.windowListeners = {};
    }
    notifyListeners(eventName, data, retainUntilConsumed) {
        const listeners = this.listeners[eventName];
        if (!listeners) {
            if (retainUntilConsumed) {
                let args = this.retainedEventArguments[eventName];
                if (!args) {
                    args = [];
                }
                args.push(data);
                this.retainedEventArguments[eventName] = args;
            }
            return;
        }
        listeners.forEach(listener => listener(data));
    }
    hasListeners(eventName) {
        return !!this.listeners[eventName].length;
    }
    registerWindowListener(windowEventName, pluginEventName) {
        this.windowListeners[pluginEventName] = {
            registered: false,
            windowEventName,
            pluginEventName,
            handler: event => {
                this.notifyListeners(pluginEventName, event);
            },
        };
    }
    unimplemented(msg = 'not implemented') {
        return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
    }
    unavailable(msg = 'not available') {
        return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
    }
    async removeListener(eventName, listenerFunc) {
        const listeners = this.listeners[eventName];
        if (!listeners) {
            return;
        }
        const index = listeners.indexOf(listenerFunc);
        this.listeners[eventName].splice(index, 1);
        // If there are no more listeners for this type of event,
        // remove the window listener
        if (!this.listeners[eventName].length) {
            this.removeWindowListener(this.windowListeners[eventName]);
        }
    }
    addWindowListener(handle) {
        window.addEventListener(handle.windowEventName, handle.handler);
        handle.registered = true;
    }
    removeWindowListener(handle) {
        if (!handle) {
            return;
        }
        window.removeEventListener(handle.windowEventName, handle.handler);
        handle.registered = false;
    }
    sendRetainedArgumentsForEvent(eventName) {
        const args = this.retainedEventArguments[eventName];
        if (!args) {
            return;
        }
        delete this.retainedEventArguments[eventName];
        args.forEach(arg => {
            this.notifyListeners(eventName, arg);
        });
    }
}

const WebView = /*#__PURE__*/ (/* unused pure expression or super */ null && (registerPlugin('WebView')));
/******** END WEB VIEW PLUGIN ********/
/******** COOKIES PLUGIN ********/
/**
 * Safely web encode a string value (inspired by js-cookie)
 * @param str The string value to encode
 */
const encode = (str) => encodeURIComponent(str)
    .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
    .replace(/[()]/g, escape);
/**
 * Safely web decode a string value (inspired by js-cookie)
 * @param str The string value to decode
 */
const decode = (str) => str.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
class CapacitorCookiesPluginWeb extends WebPlugin {
    async getCookies() {
        const cookies = document.cookie;
        const cookieMap = {};
        cookies.split(';').forEach(cookie => {
            if (cookie.length <= 0)
                return;
            // Replace first "=" with CAP_COOKIE to prevent splitting on additional "="
            let [key, value] = cookie.replace(/=/, 'CAP_COOKIE').split('CAP_COOKIE');
            key = decode(key).trim();
            value = decode(value).trim();
            cookieMap[key] = value;
        });
        return cookieMap;
    }
    async setCookie(options) {
        try {
            // Safely Encoded Key/Value
            const encodedKey = encode(options.key);
            const encodedValue = encode(options.value);
            // Clean & sanitize options
            const expires = `; expires=${(options.expires || '').replace('expires=', '')}`; // Default is "; expires="
            const path = (options.path || '/').replace('path=', ''); // Default is "path=/"
            const domain = options.url != null && options.url.length > 0
                ? `domain=${options.url}`
                : '';
            document.cookie = `${encodedKey}=${encodedValue || ''}${expires}; path=${path}; ${domain};`;
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async deleteCookie(options) {
        try {
            document.cookie = `${options.key}=; Max-Age=0`;
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async clearCookies() {
        try {
            const cookies = document.cookie.split(';') || [];
            for (const cookie of cookies) {
                document.cookie = cookie
                    .replace(/^ +/, '')
                    .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
            }
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async clearAllCookies() {
        try {
            await this.clearCookies();
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
}
const CapacitorCookies = registerPlugin('CapacitorCookies', {
    web: () => new CapacitorCookiesPluginWeb(),
});
// UTILITY FUNCTIONS
/**
 * Read in a Blob value and return it as a base64 string
 * @param blob The blob value to convert to a base64 string
 */
const readBlobAsBase64 = async (blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
        const base64String = reader.result;
        // remove prefix "data:application/pdf;base64,"
        resolve(base64String.indexOf(',') >= 0
            ? base64String.split(',')[1]
            : base64String);
    };
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(blob);
});
/**
 * Normalize an HttpHeaders map by lowercasing all of the values
 * @param headers The HttpHeaders object to normalize
 */
const normalizeHttpHeaders = (headers = {}) => {
    const originalKeys = Object.keys(headers);
    const loweredKeys = Object.keys(headers).map(k => k.toLocaleLowerCase());
    const normalized = loweredKeys.reduce((acc, key, index) => {
        acc[key] = headers[originalKeys[index]];
        return acc;
    }, {});
    return normalized;
};
/**
 * Builds a string of url parameters that
 * @param params A map of url parameters
 * @param shouldEncode true if you should encodeURIComponent() the values (true by default)
 */
const buildUrlParams = (params, shouldEncode = true) => {
    if (!params)
        return null;
    const output = Object.entries(params).reduce((accumulator, entry) => {
        const [key, value] = entry;
        let encodedValue;
        let item;
        if (Array.isArray(value)) {
            item = '';
            value.forEach(str => {
                encodedValue = shouldEncode ? encodeURIComponent(str) : str;
                item += `${key}=${encodedValue}&`;
            });
            // last character will always be "&" so slice it off
            item.slice(0, -1);
        }
        else {
            encodedValue = shouldEncode ? encodeURIComponent(value) : value;
            item = `${key}=${encodedValue}`;
        }
        return `${accumulator}&${item}`;
    }, '');
    // Remove initial "&" from the reduce
    return output.substr(1);
};
/**
 * Build the RequestInit object based on the options passed into the initial request
 * @param options The Http plugin options
 * @param extra Any extra RequestInit values
 */
const buildRequestInit = (options, extra = {}) => {
    const output = Object.assign({ method: options.method || 'GET', headers: options.headers }, extra);
    // Get the content-type
    const headers = normalizeHttpHeaders(options.headers);
    const type = headers['content-type'] || '';
    // If body is already a string, then pass it through as-is.
    if (typeof options.data === 'string') {
        output.body = options.data;
    }
    // Build request initializers based off of content-type
    else if (type.includes('application/x-www-form-urlencoded')) {
        const params = new URLSearchParams();
        for (const [key, value] of Object.entries(options.data || {})) {
            params.set(key, value);
        }
        output.body = params.toString();
    }
    else if (type.includes('multipart/form-data') ||
        options.data instanceof FormData) {
        const form = new FormData();
        if (options.data instanceof FormData) {
            options.data.forEach((value, key) => {
                form.append(key, value);
            });
        }
        else {
            for (const key of Object.keys(options.data)) {
                form.append(key, options.data[key]);
            }
        }
        output.body = form;
        const headers = new Headers(output.headers);
        headers.delete('content-type'); // content-type will be set by `window.fetch` to includy boundary
        output.headers = headers;
    }
    else if (type.includes('application/json') ||
        typeof options.data === 'object') {
        output.body = JSON.stringify(options.data);
    }
    return output;
};
// WEB IMPLEMENTATION
class CapacitorHttpPluginWeb extends WebPlugin {
    /**
     * Perform an Http request given a set of options
     * @param options Options to build the HTTP request
     */
    async request(options) {
        const requestInit = buildRequestInit(options, options.webFetchExtra);
        const urlParams = buildUrlParams(options.params, options.shouldEncodeUrlParams);
        const url = urlParams ? `${options.url}?${urlParams}` : options.url;
        const response = await fetch(url, requestInit);
        const contentType = response.headers.get('content-type') || '';
        // Default to 'text' responseType so no parsing happens
        let { responseType = 'text' } = response.ok ? options : {};
        // If the response content-type is json, force the response to be json
        if (contentType.includes('application/json')) {
            responseType = 'json';
        }
        let data;
        let blob;
        switch (responseType) {
            case 'arraybuffer':
            case 'blob':
                blob = await response.blob();
                data = await readBlobAsBase64(blob);
                break;
            case 'json':
                data = await response.json();
                break;
            case 'document':
            case 'text':
            default:
                data = await response.text();
        }
        // Convert fetch headers to Capacitor HttpHeaders
        const headers = {};
        response.headers.forEach((value, key) => {
            headers[key] = value;
        });
        return {
            data,
            headers,
            status: response.status,
            url: response.url,
        };
    }
    /**
     * Perform an Http GET request given a set of options
     * @param options Options to build the HTTP request
     */
    async get(options) {
        return this.request(Object.assign(Object.assign({}, options), { method: 'GET' }));
    }
    /**
     * Perform an Http POST request given a set of options
     * @param options Options to build the HTTP request
     */
    async post(options) {
        return this.request(Object.assign(Object.assign({}, options), { method: 'POST' }));
    }
    /**
     * Perform an Http PUT request given a set of options
     * @param options Options to build the HTTP request
     */
    async put(options) {
        return this.request(Object.assign(Object.assign({}, options), { method: 'PUT' }));
    }
    /**
     * Perform an Http PATCH request given a set of options
     * @param options Options to build the HTTP request
     */
    async patch(options) {
        return this.request(Object.assign(Object.assign({}, options), { method: 'PATCH' }));
    }
    /**
     * Perform an Http DELETE request given a set of options
     * @param options Options to build the HTTP request
     */
    async delete(options) {
        return this.request(Object.assign(Object.assign({}, options), { method: 'DELETE' }));
    }
}
const CapacitorHttp = registerPlugin('CapacitorHttp', {
    web: () => new CapacitorHttpPluginWeb(),
});
/******** END HTTP PLUGIN ********/


//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./src/content/app/lib/integrationConstants.js
const IntegrationLabels = Object.freeze({
  buffer: 'Buffer',
  dropbox: 'Dropbox',
  embase: 'Embase',
  evernote: 'Evernote',
  instapaper: 'Instapaper',
  pocket: 'Pocket',
  reddit: 'Reddit',
  slack: 'Slack',
  twitter: 'Twitter',
  oneNote: 'OneNote'
});
const integrationConstants_IntegrationTypes = Object.freeze({
  buffer: 'buffer',
  dropbox: 'dropbox',
  embase: 'embase',
  evernote: 'evernote',
  instapaper: 'instapaper',
  oneNote: 'oneNote',
  pocket: 'pocket',
  reddit: 'reddit',
  slack: 'slack',
  twitter: 'twitter'
});
const BusinessIntegrationsList = [integrationConstants_IntegrationTypes.buffer, integrationConstants_IntegrationTypes.embase, integrationConstants_IntegrationTypes.reddit, integrationConstants_IntegrationTypes.slack, integrationConstants_IntegrationTypes.twitter];
;// CONCATENATED MODULE: ./src/content/app/lib/planConstants.js
// There is a FeedlyEnterprise product for teams on the enterprise plan.
// This product can only be set by the sales team.
const BusinessProducts = Object.freeze({
  annual: 'FeedlyBusiness',
  monthly: 'FeedlyBusinessMonthly'
});

// Keep in client codebase. Not supported by profile field entitlements.
const LimitedCollectionLimit = 3;
const PaymentProviders = Object.freeze({
  android: 'Android',
  apple: 'Apple',
  paypal: 'Paypal',
  paddle: 'Paddle',
  stripe: 'Stripe',
  stripeBilling: 'StripeBilling' // New stripe signups whose subscriptions are managed by us
});

// Used to rank plans based on features (highest being the one with the most features)
const PlanRankings = Object.freeze({
  standard: 0,
  proStandard: 1,
  pro: 1,
  proPlus: 2,
  business: 3,
  enterprise: 4,
  marketIntel: 5,
  threatIntel: 5
});
const PlanLabels = Object.freeze({
  standard: 'Standard',
  proStandard: 'Pro',
  pro: 'Pro',
  proPlus: 'Pro+',
  business: 'Business',
  enterprise: 'Enterprise'
});
const PlanTypes = Object.freeze({
  standard: 'standard',
  proStandard: 'proStandard',
  pro: 'pro',
  proPlus: 'proPlus',
  business: 'business',
  enterprise: 'enterprise'
});
const PaymentPlans = Object.freeze({
  monthly: 'Monthly',
  yearly: 'Yearly'
});
const Prices = Object.freeze({
  Business: 18 // per user per month
});
const PlanCurrencies = Object.freeze({
  EUR: 'EUR',
  GBP: 'GBP',
  JPY: 'JPY',
  USD: 'USD'
});
const ProProductData = Object.freeze({
  Monthly: {
    id: 'FeedlyProMonthly',
    isMonthly: true
  },
  Monthly7: {
    id: 'FeedlyProMonthly7',
    isMonthly: true
  },
  Monthly8: {
    // Apple mobile subscription
    id: 'FeedlyProMonthly8',
    isMonthly: true
  },
  Yearly: {
    id: 'FeedlyProYearly'
  },
  Yearly65: {
    id: 'FeedlyProYearly65'
  },
  Yearly72: {
    // Android mobile subscription
    id: 'FeedlyProYearly72'
  },
  StandardMonthly: {
    id: 'FeedlyProStandardMonthly8',
    isMonthly: true
  },
  StandardYearly: {
    id: 'FeedlyProStandardYearly72'
  },
  PlusMonthly: {
    id: 'FeedlyProPlusMonthly16',
    isProPlus: true,
    isMonthly: true
  },
  PlusYearly: {
    id: 'FeedlyProPlusYearly144',
    isProPlus: true
  },
  Yearly72AppStore: {
    // Legacy mobile sub
    id: 'FeedlyProYearly72AppStore'
  },
  Monthly8AppStore: {
    // Legacy mobile sub
    id: 'FeedlyProMonthly8AppStore',
    isMonthly: true
  },
  StandardMonthly8AppStore: {
    id: 'FeedlyProStandardMonthly8AppStore',
    isMonthly: true
  },
  PlusMonthly16AppStore: {
    id: 'FeedlyProPlusMonthly16AppStore',
    isProPlus: true,
    isMonthly: true
  },
  Lifetime: {
    id: 'FeedlyProLifetime',
    isLifetime: true
  },
  StandardLifetime: {
    id: 'FeedlyProStandardLifetime',
    isLifetime: true
  },
  Kickstarter: {
    id: 'FeedlyProKickstarterEdition',
    isLifetime: true
  },
  PlusKickstarter: {
    id: 'FeedlyProPlusKickstarter',
    isLifetime: true,
    isProPlus: true
  },
  PlusLifetime: {
    id: 'FeedlyProPlusLifetime',
    isLifetime: true,
    isProPlus: true
  },
  Yearly65BlackFridayCoupon: {
    id: 'FeedlyProYearly65BlackFridayCoupon'
  },
  StandardYearlyBlackFriday: {
    id: 'FeedlyProStandardYearly72BlackFriday'
  },
  PlusLaunch: {
    id: 'FeedlyProPlusYearly144Launch',
    isProPlus: true
  }
});

/* Transformation of Feedly backend product name to Android product name */
const AndroidProProductNames = Object.freeze({
  FeedlyProYearly72AppStore: 'feedlypro72',
  FeedlyProMonthly8AppStore: 'feedlypromonthly8',
  FeedlyProStandardMonthly8AppStore: 'feedlyprostandardmonthly8',
  FeedlyProPlusMonthly16AppStore: 'feedlyproplusmonthly16'
});

/* Map of product id to product name */
const ProProductIdToName = Object.keys(ProProductData).reduce((acc, product) => {
  acc[ProProductData[product].id] = product;
  return acc;
}, {});

/* Map of product name to product id */
const ProProducts = Object.keys(ProProductData).reduce((acc, product) => {
  acc[product] = ProProductData[product].id;
  return acc;
}, {});
const SubscriptionStatuses = Object.freeze({
  active: 'Active',
  canceled: 'Canceled',
  canceledTrial: 'CanceledTrial',
  demo: 'Demo',
  nonProfit: 'NonProfit',
  pastDue: 'PastDue',
  preTrial: 'PreTrial',
  test: 'Test',
  trial: 'Trial',
  unpaid: 'Unpaid' // expired accounts have this status
});
const ProPageFeatureTypes = Object.freeze({
  business: 'business',
  enterprise: 'enterprise',
  pro: 'pro',
  proLegacy: 'proLegacy',
  proPlus: 'proPlus',
  proPlusLifetime: 'proPlusLifetime',
  standard: 'standard'
});
const PlanOfferStatuses = Object.freeze({
  active: 'active',
  available: 'available',
  unavailable: 'unavailable'
});
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/invert.js
var invert = __webpack_require__(97703);
var invert_default = /*#__PURE__*/__webpack_require__.n(invert);
// EXTERNAL MODULE: ../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js
var prop_types = __webpack_require__(5821);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./src/content/app/lib/layoutConstants.js

const EntryLayouts = Object.freeze({
  cards: 'cards',
  featuredLarge: 'featuredLarge',
  fullArticle: 'fullArticle',
  largeCards: 'largeCards',
  magazine: 'magazine',
  miniMagazine: 'miniMagazine',
  titleOnly: 'titleOnly'
});
const EntryListLayouts = Object.freeze({
  cards: EntryLayouts.cards,
  fullArticle: EntryLayouts.fullArticle,
  magazine: EntryLayouts.magazine,
  titleOnly: EntryLayouts.titleOnly,
  trending: 'trending'
});
const EntryLayoutPropType = prop_types_default().oneOf(Object.values(EntryLayouts));
const PageWidths = Object.freeze({
  stretched: 'stretched',
  fullWidth: 'full-width'
});
;// CONCATENATED MODULE: ./src/content/app/lib/prefConstants.js



// Share / Web Preferences
const autoSelectOnScroll = 'autoSelectOnScroll';
const clusteringPref = 'enableClustering';
const defaultStartPageURIPref = 'defaultStartPageURI';
const layoutPref = 'entryOverviewSize.desktop';
const enableAnnotationsPref = 'enableAnnotations';
const enableLeoPromptsPref = 'enableCommonTopics';
const enableDeduplicationPref = 'enableDeduplication';
const enableLeoFeedbackPref = 'enableLeoFeedback';
const enableLeoHighlightsPref = 'leoHighlightsPref';
const enableLeoSummaryPref = 'leoSummaryPref';
const enableLeoSuggestionsPref = 'enableLeoSuggestionsPref';
const enableProductFeedbackPref = 'enableProductFeedback';
const enableInlineEntitiesPref = 'enableInlineEntities';
const enableKeyboardShortcuts = 'enableKeyboardShortcuts';
const entryNavigation = 'entryNavigation';
const entrySortPref = 'entrySort';
const giantMarkAsReadPref = 'giantMarkAsRead';
const newAccountSetupCompleted = 'newAccountSetupCompleted';
const languagePref = 'language';
const markAllAsReadMenu = 'markAllAsReadMenu';
const markAsReadOnSelectPref = 'npAutoMarkAsRead';
const navigationMarkRead = 'navigationMarkRead';
const teamVsPersonal = 'teamVsPersonal';
const ttpDashboardCollapsedPref = 'ttpDashboardCollapsed';
const vulnDashboardCollapsedPref = 'vulnDashboardCollapsed';
const unreadyOnlyPref = 'hideReadArticlesFilter';
const recentSearchPref = 'recentDiscoverSearches';
const mastodonSharingPref = 'mastodonSharing';
const mobileArticleAnimationPref = 'articleAnimation.mobile';
const mobileScrollPref = 'scroll.mobile';
const mobileAutoSelectOnScroll = 'autoSelectOnScroll.mobile';
const mobileIsSwipeGestureDiscovered = 'isSwipeGestureDiscovered.mobile';
const fontPref = 'entryFontFamily';
const exploreStreamPref = 'exploreStream';
const showEmptyPrioritiesPref = 'showEmptyPrioritiesPref';
const showPrioritiesInNavigationPref = 'showPrioritiesInNavigationPref';
const emptyCollectionPref = 'emptyCategories';
const lessLikeThisPref = 'userDefinedLessLikeThis';
const webThemePref = 'theme.web';
const emptyBoardPlaceholderPref = 'emptyBoardPlaceholderPref';
const leoPrioritiesCollapsedPref = 'leoPrioritiesCollapsedPref';
const nonSecureImageFallbacksPref = 'nonSecureImageFallbacks';
const personalBoardsCollapsedPref = 'personalBoardsCollapsedPref';
const personalCollectionsCollapsedPref = 'personalCollectionsCollapsedPref';
const teamBoardsCollapsedPref = 'teamBoardsCollapsedPref';
const teamCollectionsCollapsedPref = 'teamCollectionsCollapsedPref';
const firstAlertIdPref = 'firstAlertId';
const lastAlertPopupDatePref = 'lastAlertPopupDate';
const alertPopupCountPref = 'alertPopupCount';
const newFeaturesLastClickTimePref = 'newFeaturesLastClickTime';
const dashboardsCollapsedPref = 'dashboardsCollapsedPref';
const showAiActionsPref = 'showAiActions';
const hideNewsletterEmptyStreamModalPref = 'hideNewsletterEmptyStreamModal';
const showTwitterLimitCalloutPref = 'twitterLimitCallout';
const openedAliasSuggestionsPref = 'openedAliasSuggestionsPref';
const vulnDashboardTableColumnPref = 'vulnDashboardTableColumnPref';
const showAiActionsPanelIntroPref = 'showAiActionsPanelIntroPref';
const topicModelerEntryLayoutPref = 'topicModelerEntryLayoutPref';
const cvssVersionPref = 'cvssVersionPref';

// Customization keys
const customizationKeyPref = 'customizationKey';
const fontFixCustomizationKey = 'FONT_FIX';
const prioritiesCustomizationKey = 'LEO_PRIORITIES';
const testStarFeatureCustomizationKey = 'TEST_STAR_FEATURE';
const newslettersV2CustomizationKey = 'CUSTOM_NEWSLETTERS';
const topicModelerCustomizationKey = 'TOPIC_MODELER';
const increasedArticleSelectionCustomizationKey = 'INCREASED_SELECTION';
const ragCustomizationKey = 'RAG';
const showCybersecurityCoverPref = 'showCybersecurityCoverPref';
const showThreatIntelCallout = 'showThreatIntelCallout';
const forceRefineFeedTutorialTriggerIdPref = 'forceRefineFeedTutorialTriggerId';

// CVE events timeline preferences
const highlightEventsPref = 'highlightEventsPref';

// MI preferences
const trendInsightsIndustryPref = 'trendInsightsIndustryPref';
const hideDemoDashboardsPref = 'hideDemoDashboardsPref';
const trendDashboardsCollapsedPref = 'trendDashboardsCollapsed';
const streamArticleCountIntervalPref = 'streamArticleCountIntervalPref';
const streamResourceCountIntervalPref = 'streamResourceCountIntervalPref';

// TI insight card preferences
const malwareInsightsDateRangePref = 'malwareInsightsDateRangePref';
const threatActorInsightsDateRangePref = 'threatActorInsightsDateRangePref';

// Customizable newsletter preferences
const openedStatCardSelectPref = 'openedStatCardSelectPref';
const clickedStatCardSelectPref = 'clickedStatCardSelectPref';
const performanceChartOpenSelectPref = 'performanceChartOpenSelectPref';
const performanceChartClickSelectPref = 'performanceChartClickSelectPref';
const mostClickedArticlesSelectPref = 'mostClickedArticlesSelectPref';
const mostEngagedRecipientsSelectPref = 'mostEngagedRecipientsSelectPref';
const showNewsletterCoverPref = 'showNewsletterCoverPref';
const hideNewsletterPlaceholderModalPref = 'hideNewsletterPlaceholderModalPref';
const hideNewsletterIssueDeleteArticleModalPref = 'hideNewsletterIssueDeleteArticleModalPref';
const leftNavPinnedPref = 'leftNavPinnedPref';
const leftNavWidthPref = 'leftNavWidthPref';
const sidePeekWidthPref = 'sliderWidthPref';

// Introduce AI Feeds preferences
const showAiFeedsLeftnavPopoverPref = 'showAiFeedsLeftnavPopover';
const showAiFeedsIntroModalPref = 'showAiFeedsIntroModal';
const generatedFeedBannersDismissedPref = 'autoGeneratedFeedBannersDismissed';

// Mobile TI Trial insight card
const firstInsightCardPref = 'firstInsightCard';

// Mobile specific preferences
const mobileLayoutPref = 'entryOverviewSize.mobile';
const mobileDensityPref = 'density.mobile';
const mobileThemePref = 'theme.mobile';
const prefConstants_mobileBrowserPref = 'browser.mobile';
const mobileOpenWebsiteDirectlyPref = 'feedly_openWebsiteDirectly';
const mobileTextSizePref = 'feedly_text_size';
const ThreatLandscapeDashboardStreamId = 'dashboard/threatLandscape';
const DisplayDensity = Object.freeze({
  compact: 'compact',
  cozy: 'cozy',
  comfortable: 'comfortable'
});
const WebThemes = Object.freeze({
  light: 'theme.light',
  dark: 'theme.dark',
  system: 'theme.system'
});
const EntrySort = Object.freeze({
  latest: 'latest',
  oldest: 'oldest',
  popular: 'most popular',
  popularLatest: 'popular + latest'
});
const FeedAndCollectionEntrySort = [{
  value: 'most popular',
  label: 'Most Popular'
}, {
  value: 'popular + latest',
  label: 'Popular + Latest'
}, {
  value: 'latest',
  label: 'Latest'
}, {
  value: 'oldest',
  label: 'Oldest'
}];
const TagEntrySort = [{
  value: 'latest',
  label: 'Latest'
}, {
  value: 'oldest',
  label: 'Oldest'
}];
const Density = Object.freeze({
  compact: 'compact',
  comfortable: 'comfortable'
});

// An array of layout strings for easy use in `propTypes` declarations
const Densities = Object.freeze(Object.values(Density));
const EmptyPreferences = Object.freeze({
  hide: 'hide',
  show: 'show'
});
const ToLayoutPref = Object.freeze({
  [EntryListLayouts.cards]: '5',
  [EntryListLayouts.fullArticle]: '100',
  [EntryListLayouts.magazine]: '4',
  [EntryListLayouts.titleOnly]: '0'
});
const FromLayoutPref = Object.freeze(invert_default()(ToLayoutPref));
const WebThemeClassName = Object.freeze({
  'theme.light': 'theme--light',
  'theme.dark': 'theme--dark'
});
const MobileThemes = Object.freeze({
  day: 'white',
  night: 'black',
  auto: 'auto'
});
const MobileAnimation = Object.freeze({
  slide: 'slide',
  expand: 'expand',
  fade: 'fade'
});
const MobileScroll = Object.freeze({
  smooth: 'smooth',
  paged: 'paged'
});
const DefaultStartPageURI = Object.freeze({
  Today: 'my',
  FirstPersonalFeed: 'label/global.must',
  All: 'latest',
  ThreatLandscape: ThreatLandscapeDashboardStreamId
});
const ShowPrioritiesInNavigation = Object.freeze({
  all: 'all',
  globalOnly: 'globalOnly',
  createdByUserOnly: 'createdByUserOnly',
  none: 'none'
});
const TeamOrPersonalFirst = Object.freeze({
  team: 'team-first',
  personal: 'personal-first'
});
const Toggle = Object.freeze({
  off: 'no',
  on: 'yes'
});
const SortOrder = Object.freeze({
  favorites: 'favoritesOrderingId',
  priorities: 'prioritiesOrderingId',
  teamCollections: 'teamCategoriesOrderingId',
  teamTags: 'teamTagsOrderingId',
  personalCollections: 'categoriesOrderingId',
  personalTags: 'personalTagsOrderingId',
  trends: 'trendDashboardsOrderingId',
  ttp: 'ttpSavedSearchesOrderingId',
  vulnerability: 'vulnSavedDashboardsOrderingId'
});
const prefConstants_MobileBrowser = Object.freeze({
  inApp: 'in-app',
  system: 'system'
});
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(22155);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__(30395);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ../../libs/icons/dist/src/icon.module.scss.js
var styles = {
  "icon": "icon__B4xp9",
  "color--primary": "color--primary__9-kOM",
  "color--primary--hover": "color--primary--hover__LEBSy",
  "color--primary--disabled": "color--primary--disabled__5Vaul",
  "color--secondary": "color--secondary__WX5GF",
  "color--secondary--hover": "color--secondary--hover__8WaMu",
  "color--secondary--disabled": "color--secondary--disabled__QqmGK",
  "color--tertiary": "color--tertiary__JGhS2",
  "color--tertiary--hover": "color--tertiary--hover__CA43-",
  "color--tertiary--disabled": "color--tertiary--disabled__hgGu-",
  "color--accent": "color--accent__SjAY9",
  "color--accent--hover": "color--accent--hover__Zy1YX",
  "color--accent--disabled": "color--accent--disabled__5M9zx",
  "color--danger": "color--danger__TLOJ9",
  "color--danger--hover": "color--danger--hover__l6vHI",
  "color--danger--disabled": "color--danger--disabled__hnK-N",
  "color--notification": "color--notification__-f4ta",
  "color--notification--hover": "color--notification--hover__ZiZR7",
  "color--notification--disabled": "color--notification--disabled__VIXqh",
  "color--warning": "color--warning__A0Alg",
  "color--warning--hover": "color--warning--hover__OpeMH",
  "color--warning--disabled": "color--warning--disabled__-fNqz",
  "color--white": "color--white__aJfzI",
  "color--white--hover": "color--white--hover__vM9YL",
  "color--white--disabled": "color--white--disabled__NWp5-",
  "color--lightest": "color--lightest__58Z5h",
  "color--lightest--hover": "color--lightest--hover__u-17-",
  "color--lightest--disabled": "color--lightest--disabled__-M6kE",
  "color--reddit": "color--reddit__dxusV",
  "color--reddit--disabled": "color--reddit--disabled__l-pRp",
  "color--twitter": "color--twitter__3cO5m",
  "color--twitter--disabled": "color--twitter--disabled__YUVxs",
  "icon-clickable": "icon-clickable__Lyw27"
};

;// CONCATENATED MODULE: ../../libs/icons/dist/src/index.js



function transformProps(_ref) {
  let {
    className,
    color = 'primary',
    disabled = false,
    hover = false,
    fromUI = false,
    tiny = false,
    ...rest
  } = _ref;
  let colorModifier;
  if (disabled) {
    colorModifier = '--disabled';
  } else if (hover) {
    colorModifier = '--hover';
  } else {
    colorModifier = '';
  }
  const iconClasses = {
    icon: !fromUI,
    [styles["color--".concat(color).concat(colorModifier)]]: color !== 'svgColor',
    [className]: className
  };
  const props = {
    className: classnames_default()(styles.icon, iconClasses),
    ...rest
  };
  if (tiny) {
    props.height = 16;
    props.width = 16;
  }
  return props;
}
const IconPropTypes = {
  className: (prop_types_default()).string,
  // When provided, makes the icon full opacity of the given color
  color: prop_types_default().oneOf(['primary', 'secondary', 'tertiary', 'lightest',
  // Required for primary accent Buttons instead of 'white'
  'accent', 'danger', 'warning', 'notification', 'white', 'reddit', 'twitter', 'svgColor' // Use the color(s) embedded in the SVG
  ]),
  /**
  Whether this should use the 'disabled' version of the `color`. If both
  `hover` and `disabled` are `true`, the disabled color will be shown,
  because disabled items shouldn't show a hover state.
  */
  disabled: (prop_types_default()).bool,
  /**
  Whether this should use the 'hover' version of the `color`. Ignored if
  `disabled` is `true`, because disabled items shouldn't show a hover state.
  */
  hover: (prop_types_default()).bool,
  // Don't add `icon` global CSS class
  fromUI: (prop_types_default()).bool,
  // Resizes the icon to 16x16
  tiny: (prop_types_default()).bool
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(65723);
;// CONCATENATED MODULE: ../../libs/icons/dist/build/ShieldLightningMd.js



const SvgShieldLightningMd = /*#__PURE__*/react.forwardRef((iconProps, ref) => {
  const props = transformProps({
    ...iconProps,
    ref
  });
  react.useEffect(() => {
    if (iconProps.importance) {
      console.error('Importance is not supported on Icons');
    }
  }, [iconProps.importance]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M5.256 3.502a.285.285 0 0 0-.256.28v4.903c0 4.892 2.686 9.391 7 11.748 4.314-2.357 7-6.856 7-11.748V3.783a.285.285 0 0 0-.256-.281c-2.962.516-5.217.78-6.744.78s-3.782-.264-6.744-.78M4 3.782C4 3.07 4.581 2.5 5.29 2.5a1 1 0 0 1 .086.007c2.976.521 5.178.776 6.624.776s3.648-.255 6.624-.776a1 1 0 0 1 .087-.007c.708 0 1.289.57 1.289 1.283v4.902c0 5.355-2.993 10.266-7.769 12.758a.5.5 0 0 1-.462 0C6.992 18.952 3.999 14.04 4 8.685z",
      clipRule: "evenodd"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M12.224 6.553a.5.5 0 0 1 .223.67L10.81 10.5H14a.5.5 0 0 1 .447.724l-2 4a.5.5 0 1 1-.894-.447L13.19 11.5H10a.5.5 0 0 1-.447-.723l2-4a.5.5 0 0 1 .67-.224",
      clipRule: "evenodd"
    })]
  });
});
SvgShieldLightningMd.propTypes = IconPropTypes;
var SvgShieldLightningMd$1 = SvgShieldLightningMd;

;// CONCATENATED MODULE: ../../libs/icons/dist/build/ChartLineMd.js



const SvgChartLineMd = /*#__PURE__*/react.forwardRef((iconProps, ref) => {
  const props = transformProps({
    ...iconProps,
    ref
  });
  react.useEffect(() => {
    if (iconProps.importance) {
      console.error('Importance is not supported on Icons');
    }
  }, [iconProps.importance]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 25,
    height: 24,
    fill: "none",
    viewBox: "0 0 25 24",
    ...props,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M3.333 2.5a.5.5 0 0 1 .5.5v16a1.5 1.5 0 0 0 1.5 1.5h16a.5.5 0 0 1 0 1h-16a2.5 2.5 0 0 1-2.5-2.5V3a.5.5 0 0 1 .5-.5m18.354 6.146a.5.5 0 0 1 0 .708l-5 5a.5.5 0 0 1-.707 0l-3.647-3.647-4.646 4.647a.5.5 0 0 1-.707-.708l5-5a.5.5 0 0 1 .707 0l3.646 3.647 4.647-4.647a.5.5 0 0 1 .707 0",
      clipRule: "evenodd"
    })
  });
});
SvgChartLineMd.propTypes = IconPropTypes;
var SvgChartLineMd$1 = SvgChartLineMd;

;// CONCATENATED MODULE: ./src/content/app/lib/streamUtils.js

const streamUtils_changelogStreamId = 'feed/https://feedly.com/changelog/feed.xml';
const changelogUri = "subscription/".concat(streamUtils_changelogStreamId);
const BSATimeout = Object.freeze({
  default: 250,
  cards: 2000
});
function isStreamDead(stream) {
  return stream && stream.info && stream.info.state === 'dead' && (!stream.entries || !stream.entries.length);
}
function showFavoritesToggle(streamId, isSubscribed) {
  if (!streamId) {
    return false;
  }
  const {
    isReadLater,
    isEnterprise,
    isGlobal
  } = extractType(streamId);
  if (isReadLater) {
    return true;
  }
  if (!isGlobal && (!isEnterprise || isEnterprise && isSubscribed)) {
    return true;
  }
  return false;
}
;// CONCATENATED MODULE: ./src/content/app/lib/idUtils.js



/** Category labels */
const Category = Object.freeze({
  all: 'global.all',
  favorites: 'global.must',
  uncategorized: 'global.uncategorized'
});
const PageType = Object.freeze({
  board: 'board',
  collection: 'collection',
  dashboard: 'dashboard',
  priority: 'priority',
  subscription: 'subscription',
  readLater: 'saved'
});

/** Tag labels */
const Tag = Object.freeze({
  all: 'global.all',
  read: 'global.read',
  starred: 'starred',
  savedFeedly: 'feedly.saved',
  saved: 'global.saved',
  feedback: 'global.feedback',
  annotated: 'global.annotated',
  unsaved: 'global.unsaved'
});

/** Feed types */
const Type = Object.freeze({
  category: 'category',
  feed: 'feed',
  filter: 'filter',
  tag: 'tag'
});
const InsightCardPageTypes = new Set(['cve', 'companies', 'malwares', 'threatActors', 'trends']);
function idUtils_extractLabel(id) {
  if (!id) {
    return null;
  }
  if (id.indexOf('/') === -1) {
    return id;
  }

  // Remove the first three elements from the array and join the rest.
  // Note that we can't just assume that the last element is the label,
  // because some legacy category ids contain slashes.
  // eslint-disable-next-line no-unused-vars
  const [userOrTeam, userOrTeamId, type, ...rest] = id.split('/');
  return rest.join('/');
}
function extractIdFromUri(uri) {
  if (!uri) {
    return null;
  }
  const [pageType, ...afterPageType] = uri.split('/');

  // Subscription pages don't have tabs, so we don't need to remove that
  if (pageType === PageType.subscription) {
    return decodeURIComponent(afterPageType.join('/'));
  } else if (pageType === PageType.collection || pageType === PageType.board || pageType === PageType.priority) {
    // eslint-disable-next-line no-unused-vars
    const [activeTab, userOrTeam, userOrTeamId, type, ...rest] = afterPageType;
    return "".concat(userOrTeam, "/").concat(userOrTeamId, "/").concat(type, "/").concat(decodeURIComponent(rest.join('/')));
  } else if (pageType === PageType.dashboard || pageType === PageType.readLater) {
    return uri;
  } else if (InsightCardPageTypes.has(pageType)) {
    return decodeURIComponent(afterPageType);
  }
  return null;
}

/**
 * @param {String} type Usually one of 'category' or 'tag'.
 * @param {String} label
 */
function formatAuthedId(type, label) {
  return formatId(type, label, streets.getUserId());
}

/** @return {String} The 'global.uncategorized' category id. */
function getCategoryUncategorizedId() {
  return streets.getUserId() ? formatAuthedId(Type.category, Category.uncategorized) : null;
}

/** @return {String} The 'global.all' category id. */
function idUtils_getCategoryAllId() {
  return streets.getUserId() ? formatAuthedId(Type.category, Category.all) : null;
}

/** @return {String} The 'global.must' category id. */
function getCategoryFavoritesId() {
  return streets.getUserId() ? formatAuthedId(Type.category, Category.favorites) : null;
}

/** @return {String} Id for stream of all team feeds followed by user */
function getEnterpriseCategoriesSubscribedId() {
  const userId = streets.getUserId();
  return userId ? "user/".concat(userId, "/").concat(Type.category, "/global.enterprise") : null;
}

/** @return {?String} The 'global.all' category id for enterprise users. */
function idUtils_getEnterpriseCategoryAllId() {
  const enterpriseId = streets.getEnterpriseId();
  return enterpriseId ? "enterprise/".concat(enterpriseId, "/").concat(Type.category, "/").concat(Category.all) : null;
}
function getEnterpriseTagAllId() {
  const enterpriseId = streets.getEnterpriseId();
  return enterpriseId ? "enterprise/".concat(enterpriseId, "/").concat(Type.tag, "/").concat(Tag.all) : null;
}
function idUtils_getEnterpriseTagAnnotatedId() {
  const enterpriseId = streets.getEnterpriseId();
  return enterpriseId && streets.hasBusinessAccess() ? "enterprise/".concat(enterpriseId, "/").concat(Type.tag, "/").concat(Tag.annotated) : null;
}
function idUtils_getPersonalTagAnnotatedId() {
  const userId = streets.getUserId();
  return userId ? "user/".concat(userId, "/").concat(Type.tag, "/").concat(Tag.annotated) : null;
}

/** @return {String} Id for stream of all team boards followed by user */
function getEnterpriseTagsSubscribedId() {
  const userId = streets.getUserId();
  return userId ? "user/".concat(userId, "/").concat(Type.tag, "/global.enterprise") : null;
}
function getEnterprisePriorityAllId() {
  const enterpriseId = streets.getEnterpriseId();
  return enterpriseId ? "enterprise/".concat(enterpriseId, "/important/global.all") : null;
}

/**
@return {?String} The 'global.all' category id for an enterprise user's
  personal and team categories.
*/
function getGlobalCategoryAllId() {
  return streets.hasBusinessAccess() ? "".concat(idUtils_getCategoryAllId(), ",").concat(idUtils_getEnterpriseCategoryAllId()) : null;
}

/**
@return {?String} The 'global.all' category id for an enterprise user's
  personal and team categories.
*/
function getGlobalTagAllId() {
  return streets.hasBusinessAccess() ? "".concat(getTagAllId(), ",").concat(getEnterpriseTagAllId()) : null;
}
function getPriorityAllId() {
  const userId = streets.getUserId();
  return userId ? "user/".concat(userId, "/important/global.all") : null;
}

/** @return {String} The 'global.all' tag id. */
function getTagAllId() {
  return streets.getUserId() ? formatAuthedId(Type.tag, Tag.all) : null;
}

/** @return {String} The 'global.saved' tag id. */
function getTagGlobalSavedId() {
  return streets.getUserId() ? formatAuthedId(Type.tag, Tag.saved) : null;
}
function getTagRecentlyReadId() {
  return streets.getUserId() ? formatAuthedId(Type.tag, Tag.read) : null;
}
function isStreamFavorites(streamId) {
  const {
    isFavorites
  } = extractType(streamId);
  return isFavorites;
}
function isChangelog(streamId) {
  return streamId === changelogStreamId;
}
function isFeedlyBlog(streamId) {
  return streamId && (streamId.includes('https://feedly.com/ahead') || streamId.includes(ResourceLinks.tiEssentials) || streamId.includes(ResourceLinks.caseStudies) || streamId.includes(ResourceLinks.newFeatures));
}
;// CONCATENATED MODULE: ./src/content/app/lib/velocityUtils.js


const ALL_TIER = '__all__';
const TIERS = ['tier0', 'tier1', 'tier2', 'tier3', 'tier4', ALL_TIER];
const lowVelocityThreshold = 2;
const highVelocityThreshold = 500;
const maxVelocity = 1000;
const DefaultTierLevel = 'tier1';
const velocityUtils_pausedTierLevel = 'tier0';

// Prefer velocities 2 or more and less than 500
// Otherwise select the first tier with content or the last tier
function computeBestTierLevel(bundleVelocities, bundle) {
  const velocities = bundleVelocities[bundle.id];
  const bestTier = TIERS.find(tier => velocities[tier] >= lowVelocityThreshold && velocities[tier] <= highVelocityThreshold);
  return bestTier || TIERS.find(tier => velocities[tier] > 0) || 'tier3';
}
function getVelocityRange(selectedTier, velocities) {
  var _tierNames$findIndex;
  const tierNames = [];
  const rangeValues = [];
  for (const tier of TIERS) {
    if (tier === velocityUtils_pausedTierLevel) {
      tierNames.push(tier);
      rangeValues.push(-1);
    } else if (velocities && tier in velocities) {
      tierNames.push(tier);
      rangeValues.push(velocities[tier]);
    } else if (!velocities) {
      tierNames.push(tier);
      rangeValues.push(-1);
    }
  }
  return {
    rangeValue: (_tierNames$findIndex = tierNames.findIndex(tier => tier === selectedTier)) !== null && _tierNames$findIndex !== void 0 ? _tierNames$findIndex : 1,
    // if not found, fallback to tier 1
    rangeValues,
    tierNames
  };
}
function hasOnlyLowVelocityBundles(bundles, bundleVelocities) {
  return bundles.every(bundle => {
    if (bundle.type === BundleTypes.publicationBucket) {
      var _bundleVelocities$bun;
      return ((_bundleVelocities$bun = bundleVelocities[bundle.id]) === null || _bundleVelocities$bun === void 0 ? void 0 : _bundleVelocities$bun[DefaultTierLevel]) < lowVelocityThreshold;
    }
    return bundleVelocities[bundle.id] < lowVelocityThreshold;
  });
}
function hasTiersBelowMinimum(bundles, bundleVelocities) {
  return bundles.some(bundle => bundle.tier === DefaultTierLevel && bundleVelocities[bundle.id] && bundleVelocities[bundle.id][bundle.tier] < lowVelocityThreshold);
}
function isEveryVelocityTierZero(rangeValues) {
  // if a "special tier" is available, we want to show the bars so that they can be manually selected
  if (!rangeValues || !isNullish(rangeValues[4]) || !isNullish(rangeValues[5])) {
    return false;
  }

  // Start from position 1 as position 0 is tier0
  return rangeValues.slice(1).every(value => value === 0);
}
function isLocalStreamBundle(bundle) {
  if (bundle.type !== BundleTypes.stream) {
    return false;
  }
  const {
    isAll
  } = extractType(bundle.id);
  return !isAll;
}
;// CONCATENATED MODULE: ./src/content/app/components/WebAlerts/constants.js




const WebAlertGuideOptionPropType = prop_types_default().arrayOf(prop_types_default().shape({
  description: (prop_types_default()).string,
  icon: (prop_types_default()).elementType,
  label: (prop_types_default()).string
}));
const WebAlertRefineModes = Object.freeze({
  allFeedlyMode: 'allFeedlyMode',
  customMode: 'customMode'
});
const WebAlertRefineModeOptions = [{
  id: 'customMode',
  label: 'Custom Mode'
}, {
  id: 'allFeedlyMode',
  label: 'All Feedly'
}];
const WebAlertRefineModeSwitchState = Object.freeze({
  auto: 'auto',
  autoSetToAllFeedlyMode: 'autoSetToAllFeedlyMode',
  autoSetToCustomMode: 'autoSetToCustomMode',
  manual: 'manual'
});
const AllFeedlyBundle = Object.freeze({
  id: 'discovery:all-topics',
  label: 'All Feedly Sources',
  tier: DefaultTierLevel,
  type: 'publicationBucket',
  description: 'Millions of news sites, blogs, trade magazines, subreddits, newsletters, and more'
});
const AllFeedlyBundleTier3 = Object.freeze({
  ...AllFeedlyBundle,
  tier: 'tier3'
});
const CybersecurityBundle = Object.freeze({
  id: 'byf:cybersecurity-bundle',
  label: 'Cybersecurity Bundle',
  tier: DefaultTierLevel,
  type: 'publicationBucket',
  description: 'Security news, threat research, CISO, vendor advisories, vulnerability, etc.'
});
const IndustryBundle = Object.freeze({
  id: 'byf:industry-bundle',
  label: 'Market Intel Bundle',
  tier: DefaultTierLevel,
  type: 'publicationBucket',
  description: 'Trade publications, Business magazines, Strategy magazines, Tech blogs, etc.'
});
const ResearchJournalsBundle = Object.freeze({
  id: 'byf:research',
  label: 'Research Journals Bundle',
  tier: DefaultTierLevel,
  type: 'publicationBucket'
});
const PressReleaseBundle = Object.freeze({
  id: 'byf:press-releases',
  label: 'Press Releases Bundle',
  tier: DefaultTierLevel,
  type: 'publicationBucket'
});
const NewsBundle = Object.freeze({
  id: 'discovery:news',
  label: 'News Bundle',
  tier: DefaultTierLevel,
  type: 'publicationBucket'
});
const getAllTeamFeedsBundle = () => Object.freeze({
  id: getEnterpriseCategoryAllId(),
  label: 'All Team Feeds',
  type: 'stream'
});
const getAllPersonalFeedsBundle = () => Object.freeze({
  id: getCategoryAllId(),
  label: 'All Personal Feeds',
  type: 'stream'
});
const WebAlertBuilderModes = Object.freeze({
  cybersecurity: 'cybersecurity',
  industryIntelligence: 'industryIntelligence'
});
const WebAlertCustomModePreferences = Object.freeze({
  ...WebAlertBuilderModes,
  auto: 'auto'
});
const constants_BundleTypes = Object.freeze({
  publicationBucket: 'publicationBucket',
  stream: 'stream'
});
const webAlertTabs = Object.freeze({
  CybersecurityTab: {
    iconComponent: SvgShieldLightningMd$1,
    id: WebAlertBuilderModes.cybersecurity,
    label: 'Threat Intel'
  },
  MarketIntelTab: {
    iconComponent: SvgChartLineMd$1,
    id: WebAlertBuilderModes.industryIntelligence,
    label: 'Market Intel'
  }
});
const addCategoryAllBundle = bundles => {
  if (streets.hasBusinessAccess()) {
    return [getAllTeamFeedsBundle(), ...bundles];
  } else if (streets.hasProPlusAccess()) {
    return [getAllPersonalFeedsBundle(), ...bundles];
  }
  return bundles;
};
;// CONCATENATED MODULE: ./src/content/app/lib/priorityConstants.js


// will clean this up in a subsequent PR by referencing these directly in the files that use these constants

const PriorityUpdateStatus = Object.freeze({
  created: 'created',
  updated: 'updated',
  duplicate: 'duplicate',
  deleted: 'deleted'
});
const PriorityLayerAddText = Object.freeze({
  likeBoard: 'Board',
  matches: 'Topic',
  security: 'Severity'
});
const priorityConstants_PriorityLayerPartNames = Object.freeze({
  likeBoard: 'boards',
  matches: 'parts',
  security: 'severities'
});
const PriorityOptionNames = Object.freeze({
  biopharmaCompanies: 'biopharmaCompanies',
  businessEvent: 'businessEvent',
  consumerBehaviorStats: 'consumerBehaviorStats',
  contentType: 'contentType',
  cxoMentions: 'cxoMentions',
  cyberEvent: 'cyberEvent',
  dataMention: 'dataMention',
  detectionRule: 'detectionRule',
  disease: 'disease',
  domain: 'domain',
  emergingTrend: 'emergingTrend',
  gene: 'gene',
  indicatorOfCompromise: 'indicatorOfCompromise',
  industryTopic: 'industryTopic',
  innovation: 'innovation',
  likeBoard: 'likeBoard',
  malwareFamily: 'malwareFamily',
  matches: 'matches',
  mitreAttack: 'mitreAttack',
  org: 'org',
  person: 'person',
  publisher: 'publisher',
  proofOfExploit: 'proofOfExploit',
  regulatoryChange: 'regulatoryChange',
  security: 'security',
  sustainability: 'sustainability',
  technology: 'technology',
  threatActor: 'threatActor',
  threatIntelReport: 'threatIntelReport',
  topic: 'topic',
  topStories: 'topStories',
  various: 'various',
  vulnerability: 'vulnerability',
  ttpMalwareFamily: 'ttpMalwareFamily',
  ttpMitreAttack: 'ttpMitreAttack',
  ttpThreatActor: 'ttpThreatActor'
});
const PriorityTrainingErrors = Object.freeze({
  boardNotFoundError: 'BoardNotFoundError',
  categoryNotFoundError: 'CategoryNotFoundError',
  languageNotAvailableError: 'LanguageNotAvailableError',
  languageMismatchError: 'LanguageMismatchError',
  notEnoughEntriesInBoardError: 'NotEnoughEntriesInBoardError',
  notEnoughEntriesInCategoryError: 'NotEnoughEntriesInCategoryError',
  unexpectedTrainingError: 'UnexpectedTrainingError'
});
const PriorityTrainingStatus = Object.freeze({
  error: 'error',
  success: 'success',
  updating: 'updating'
});
const BusinessEventTypes = Object.freeze({
  ProductLaunch: 'Product Launch',
  FundingEvent: 'Funding Event',
  Partnership: 'Partnership',
  LeadershipChange: 'Leadership Change'
});
const MatchesLayerType = Object.freeze({
  layers: 'layers',
  notLayers: 'notLayers'
});
;// CONCATENATED MODULE: ../../libs/utils/src/dateUtils.js




const dateUtils_TimePeriods = Object.freeze({
  today: 'Last24Hours',
  week: 'Last7Days',
  month: 'Last30Days',
  quarterYear: 'Last3Months',
  halfYear: 'Last6Months',
  year: 'LastYear',
  forever: 'Forever',
  custom: 'Custom'
});
const Milliseconds = Object.freeze({
  minute: 1000 * 60,
  hour: 1000 * 60 * 60,
  day: 1000 * 60 * 60 * 24,
  week: 1000 * 60 * 60 * 24 * 7,
  month: 1000 * 60 * 60 * 24 * 30
});
const FrequencyValues = Object.freeze({
  biWeekly: 'biWeekly',
  monthly: 'monthly',
  weekly: 'weekly'
});
function createDate(time) {
  let convertedTime = time;
  if (typeof time === 'string') {
    convertedTime = parseInt(time);
  }
  const date = new Date();
  date.setTime(convertedTime);
  return date;
}
function getCustomDateOption(start, end) {
  return {
    end,
    start,
    type: dateUtils_TimePeriods.custom,
    toTimeRange() {
      return [start, end];
    }
  };
}
function isSameDay(date1, date2) {
  if (!date1 || !date2) {
    return false;
  }
  return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
}

/**
 * this is about 4.5 times faster the date-fns
 * @param aDate
 * @returns {boolean}
 */
function isDateToday(aDate) {
  return isSameDay(aDate, new Date());
}

/**
 * this is about 4.5 times faster the date-fns
 * @param aDate
 * @returns {boolean}
 */
function isDateYesterday(aDate) {
  const yesterday = new Date(Date.now() - 86400000);
  return isSameDay(aDate, yesterday);
}
function isDateThisYear(aDate) {
  const now = new Date();
  return aDate.getFullYear() === now.getFullYear();
}
function isDateWithin30Days(aDate) {
  return convertSecondsToDays(getTimeDeltaSeconds(aDate)) <= 30;
}
function isDateWithin7Days(aDate) {
  return convertSecondsToDays(getTimeDeltaSeconds(aDate)) <= 7;
}
function getTimeDeltaSeconds(date) {
  return (Date.now() - date.getTime()) / 1000;
}
function convertSecondsToDays(nSeconds) {
  return Math.floor(nSeconds / (24 * 3600));
}

/**
 * Return the distance between the given date and now in words.
 * @param date {Date}
 * @param longFormat {Boolean}
 * @param includeAgo {Boolean}
 * @returns {String}
 */
function timeAgo(date) {
  let longFormat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  let includeAgo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // If we don't have enough data, render nothing
  if (!date || date.toString() === 'Invalid Date') {
    return null;
  }
  const labels = longFormat === true ? {
    minutes: ' minutes',
    hour: ' hour',
    hours: ' hours',
    day: ' day',
    days: ' days',
    month: ' month',
    months: ' months'
  } : {
    minutes: 'min',
    hour: 'h',
    hours: 'h',
    day: 'd',
    days: 'd',
    month: 'mo',
    months: 'mo'
  };

  // Calculate number of hours, days, and months since the article was crawled
  const delta = getTimeDeltaSeconds(date);
  const days = convertSecondsToDays(delta);
  const months = Math.floor(days / 30);
  const hours = Math.floor((delta - days * 24 * 3600) / 3600);
  const mins = Math.floor(delta / 60);
  let text;
  const post = includeAgo === true ? ' ago' : '';

  // Format the date into a number of minutes, hours, days, or months since it
  // was last crawled, whichever is most relevant.
  if (mins < 2) {
    text = 'now';
  } else if (mins < 60) {
    text = mins + labels.minutes + post;
  } else if (days === 0) {
    text = hours + (hours === 1 ? labels.hour : labels.hours) + post;
  } else if (months < 2) {
    text = days + (days === 1 ? labels.day : labels.days) + post;
  } else {
    text = months + (months === 1 ? labels.month : labels.months) + post;
  }
  return text;
}

// returns the date in the local timezone
function fromISODate(date) {
  return parseISO(date);
}

// Thursday, Jan 12 2023 15:37:57 GMT-8
function toLocalDateTimeAndTimezone(date) {
  return format(date, 'EEE, dd MMM yyyy kk:mm:ss O');
}

// Jan 12, 2023 at 3PM
function toLocalDateAndTime(date) {
  return format(date, "MMM d, yyyy 'at' h:mm a");
}

/* Use `toLocalDate()` in most purposes */
// Jan 12, 2023
function toLocalDate(date) {
  return format(date, 'MMM d, yyyy');
}

// Jan 12
function toMonthDay(date) {
  return format(date, 'MMM d');
}

// January 2023
function toMonthYear(date) {
  return format(date, 'MMMM yyyy');
}

// Jan
function toAbbreviatedMonth(date) {
  return format(date, 'MMM');
}

// Jan 2023
function toAbbreviatedMonthYear(date) {
  return format(date, 'MMM yyyy');
}

// 2023
function toYear(date) {
  return format(date, 'yyyy');
}

// 2023-01-12
function toISODate(date) {
  return format(date, 'yyyy-MM-dd');
}

// 2 years 9 months 1 week 7 days 5 hours 9 minutes 30 seconds
function formatDuration(durationMs) {
  return baseFormatDuration(intervalToDuration({
    start: 0,
    end: durationMs
  }));
}

// 5:30 pm
function toLocalTime(date) {
  return format(date, 'h:mm a');
}

// Tuesday
function toDay(date) {
  return format(date, 'EEEE');
}
;// CONCATENATED MODULE: ../../libs/utils/src/propTypes.js

const IdLayerPart = prop_types_default().shape({
  id: (prop_types_default()).string.isRequired,
  label: (prop_types_default()).string
});
const TextLayerPart = prop_types_default().shape({
  text: (prop_types_default()).string.isRequired
});
const PriorityLayerPartPropType = prop_types_default().oneOfType([IdLayerPart, TextLayerPart, (prop_types_default()).string]);
const LayerPropTypes = prop_types_default().shape({
  negate: (prop_types_default()).bool,
  parts: prop_types_default().arrayOf(PriorityLayerPartPropType),
  salience: (prop_types_default()).string,
  type: (prop_types_default()).string
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/toDate.mjs
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_toDate = ((/* unused pure expression or super */ null && (toDate)));

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/constructFrom.mjs
/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from 'date-fns'
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use contrustor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   )
 * }
 */
function constructFrom(date, value) {
  if (date instanceof Date) {
    return new date.constructor(value);
  } else {
    return new Date(value);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_constructFrom = ((/* unused pure expression or super */ null && (constructFrom)));

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addDays.mjs



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added.
 *
 * @returns The new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(date, amount) {
  const _date = toDate(date);
  if (isNaN(amount)) return constructFrom(date, NaN);
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return _date;
  }
  _date.setDate(_date.getDate() + amount);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_addDays = ((/* unused pure expression or super */ null && (addDays)));

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/subDays.mjs


/**
 * @name subDays
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be subtracted.
 *
 * @returns The new date with the days subtracted
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * const result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */
function subDays(date, amount) {
  return addDays(date, -amount);
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_subDays = (subDays);

;// CONCATENATED MODULE: ./src/content/app/lib/searchConstants.js




const AutocorrectTypes = {
  language: 'language',
  webAlert: 'webAlert',
  website: 'website'
};
const searchConstants_PowerSearchTypes = Object.freeze({
  beyond: 'beyond',
  in: 'in'
});
const searchConstants_Embedded = Object.freeze({
  any: 'any',
  audio: 'audio',
  doc: 'doc',
  video: 'video'
});
const searchConstants_RankBy = Object.freeze({
  newest: 'newest',
  engagement: 'engagement',
  topStories: 'topStories'
});
const searchConstants_DefaultOptions = Object.freeze({
  embedded: searchConstants_Embedded.any,
  ranked: searchConstants_RankBy.newest,
  time: dateUtils_TimePeriods.month
});
const EmbeddedOptions = [{
  id: searchConstants_Embedded.any,
  label: 'Any Content'
}, {
  id: searchConstants_Embedded.video,
  label: 'Video'
}, {
  id: searchConstants_Embedded.audio,
  label: 'Audio'
}, {
  id: searchConstants_Embedded.doc,
  label: 'Documents'
}];
const RankedOptions = [{
  id: searchConstants_RankBy.newest,
  label: 'Newest'
}, {
  id: searchConstants_RankBy.engagement,
  label: 'Popularity'
}];
const searchConstants_TimeOptions = [{
  type: dateUtils_TimePeriods.today,
  label: 'Today',
  toTimeRange() {
    const now = new Date();
    return [date_fns_subDays(now, 1), now];
  }
}, {
  type: dateUtils_TimePeriods.week,
  label: 'Last 7 Days',
  toTimeRange() {
    const now = new Date();
    return [date_fns_subDays(now, 7), now];
  }
}, {
  type: dateUtils_TimePeriods.month,
  label: 'Last 30 Days',
  toTimeRange() {
    const now = new Date();
    return [date_fns_subDays(now, 30), now];
  }
}, {
  type: dateUtils_TimePeriods.forever,
  label: 'Forever',
  toTimeRange() {
    return [];
  }
}];
const Operators = Object.freeze({
  AND: 'AND',
  NOT: 'NOT',
  OR: 'OR'
});
const SalienceSwitchState = Object.freeze({
  auto: 'auto',
  autoSetToMention: 'autoSetToMention',
  manual: 'manual'
});
const BundlePropType = prop_types_default().shape({
  id: (prop_types_default()).string.isRequired,
  type: prop_types_default().oneOf(Object.values(constants_BundleTypes))
});
const SourcePropType = prop_types_default().shape({
  items: prop_types_default().arrayOf(BundlePropType)
});
const BeyondSearchOptionsPropTypes = prop_types_default().shape({
  layers: prop_types_default().arrayOf(LayerPropTypes),
  source: SourcePropType
});
const BeyondUriSearchOptionsPropTypes = prop_types_default().shape({
  bundles: prop_types_default().arrayOf(BundlePropType),
  layers: prop_types_default().arrayOf(LayerPropTypes)
});
const SupportVideoPropTypes = prop_types_default().shape({
  id: (prop_types_default()).string,
  link: (prop_types_default()).string,
  thumbnail: (prop_types_default()).string,
  title: (prop_types_default()).string,
  vimeoId: (prop_types_default()).string
});
;// CONCATENATED MODULE: ./src/content/app/components/TopicModeler/TopicDatasetsConstants.js


const betaScoreCopy = 'Overall Score';
const encodedURITrigger = 'feed%2';
const TopicDatasetsConstants_topicDataset = 'topicDataset';
const DatasetTypes = Object.freeze({
  entity: 'entity',
  topic: 'topic'
});
const curationStates = Object.freeze({
  POSITIVE: 'POSITIVE',
  NEGATIVE: 'NEGATIVE',
  TO_REVIEW: 'REVIEW'
});
const CURATION_LABELS = Object.freeze({
  positive: 'POSITIVE',
  negative: 'NEGATIVE',
  review: 'TO_REVIEW',
  unlabeled: 'UNLABELED'
});
const metricTooltipCopy = Object.freeze({
  precision: 'The ability of the model to cut out the noise',
  recall: 'The ability of the model to find the signal',
  betaScore: 'How accurate is the model overall? (average of precision and recall)'
});
const MetricTypes = Object.freeze({
  precision: 'precision',
  recall: 'recall',
  betaScore: 'betaScore'
});
function toEntryMap(entries) {
  return entries.reduce((agg, item) => ({
    ...agg,
    [item.id]: item
  }), {});
}
const TopicDatasetPages = Object.freeze({
  build: 'build',
  define: 'define',
  metrics: 'metrics',
  review: 'review'
});
const TopicDatasetsConstants_BuildTabOptions = Object.freeze({
  activeLearning: 'activeLearning',
  communityFeedback: 'communityFeedback',
  customList: 'customList',
  evaluation: 'evaluation',
  livePredictions: 'livePredictions',
  noise: 'noise',
  search: 'search',
  stream: 'stream'
});
const ReviewTabOptions = Object.freeze({
  reviewAll: 'reviewAll',
  reviewNegative: 'reviewNegative',
  reviewPositive: 'reviewPositive',
  reviewToReview: 'reviewToReview',
  search: 'search'
});
const TopicDatasetsConstants_ReviewTabLabels = Object.freeze({
  reviewNegative: 'NEGATIVE',
  reviewPositive: 'POSITIVE',
  reviewToReview: 'TO_REVIEW'
});
const AnalyticsTabOptions = Object.freeze({
  underTheHood: 'underTheHood',
  communityFeedback: 'communityFeedback'
});
const victoryLabel = {
  'theme.light': '#333',
  'theme.dark': '#fff'
};
const axisColor = '#9e9e9e75';
const progressColor = '#2bb24c';
const barColor = '#8c8c8c';
const BuildProgressPropTypes = prop_types_default().shape({
  id: (prop_types_default()).string,
  indicativeTarget: (prop_types_default()).number,
  numAnnotations: (prop_types_default()).number
});
const LayoutOptions = Object.freeze({
  [EntryListLayouts.magazine]: {
    label: 'Magazine',
    value: EntryListLayouts.magazine
  },
  [EntryListLayouts.titleOnly]: {
    label: 'Title-Only',
    value: EntryListLayouts.titleOnly
  }
});
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/partition.js
var partition = __webpack_require__(35645);
;// CONCATENATED MODULE: ./src/content/app/lib/feedUtils.js




/**
 * @typedef FeedState
 * @property {string} ALIVE 'alive'
 * @property {string} DORMANT 'dormant'
 * @property {string} DEAD 'dead'
 * @property {string} DEAD_FLOODED: 'dead.flooded'
 * @property {string} DEAD_DROPPED: 'dead.dropped' - no longer polled due to
 *     some problem with the feed. should not be automatically retried
 * @property {string} DEAD_NOT_ACCESSED: 'dead.notaccessed' - no longer polled
 *     due to no user accessing the feed
 * @property {string} DEAD_NOT_PRO: 'dead.notpro' - no longer polled due to no
 *     pro user accessing the feed, also for some reddit feeds even if pro
 * @property {string} DEAD_STALE: 'dead.stale' - no longer polled due to
 *     repeated failures
 */
const FeedState = {
  ALIVE: 'alive',
  DORMANT: 'dormant',
  DEAD: 'dead',
  DEAD_FLOODED: 'dead.flooded',
  DEAD_DROPPED: 'dead.dropped',
  DEAD_NOT_ACCESSED: 'dead.notaccessed',
  DEAD_NOT_PRO: 'dead.notpro',
  DEAD_STALE: 'dead.stale',
  INVALID_PAID_PLAN: 'invalidPaidPlan'
};
function belongsToCategory(feed, catLabel) {
  if (!feed || !feed.categories) {
    return false;
  }
  return feed.categories.some(_ref => {
    let {
      id
    } = _ref;
    return extractLabel(id) === catLabel;
  });
}
function belongsToCategoryId(feed, catId) {
  if (!feed || !feed.categories) {
    return false;
  }
  for (let j = 0; j < feed.categories.length; j++) {
    if (feed.categories[j].id === catId) {
      return true;
    }
  }
  return false;
}
function isAlive(feed) {
  return feed.state === FeedState.ALIVE;
}
function isDormant(feed) {
  // NOT_ACCESSED and NOT_PRO are not currently polled but may still be active
  return feed.state === FeedState.DORMANT || feed.state === FeedState.DEAD_NOT_ACCESSED || feed.state === FeedState.DEAD_NOT_PRO;
}
function isDead(feed) {
  var _feed$state;
  return !isDormant(feed) && ((_feed$state = feed.state) === null || _feed$state === void 0 ? void 0 : _feed$state.startsWith(FeedState.DEAD));
}
function isInactive(feed) {
  return isDormant(feed) || isDead(feed);
}
function isPublicBoard(feed) {
  return feed && feed.isFeedlyFeed && feed.feedlyFeedType === 'PublicBoard';
}
function feedUtils_isWebAlert(feed) {
  return feed && feed.isFeedlyFeed && feed.feedlyFeedType === 'WebAlert';
}
function isNewsletterFeed(feedInfo) {
  return !!(feedInfo !== null && feedInfo !== void 0 && feedInfo.isEmailFeed);
}
function isRSS() {
  let feedInfo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const {
    feedId,
    isEmailFeed,
    isFeedlyFeed
  } = feedInfo;
  return feedId && !isFeedlyFeed && !isEmailFeed && !isTwitterFeed(feedId) && !isRedditFeed(feedId);
}
function isWebsiteFeed() {
  let feedInfo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const {
    feedId
  } = feedInfo;
  return feedId && feedId.startsWith(WebsiteFeedPrefix);
}
const FeedlyRSSFeedIds = (/* unused pure expression or super */ null && (['feed/https://feedly.com/new-features/feed.xml', 'feed/https://ahead.feedly.com/feed.xml', 'feed/https://feedly.com/changelog/feed.xml', 'feed/https://feedly.com/customers/feed.xml', 'feed/https://www.youtube.com/feeds/videos.xml?channel_id=UCs-3RoE0W9M5ooEwI4eOFZw' // Feedly's YouTube channel
]));
function isFeedlyRSSFeed() {
  let feedInfo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const {
    feedId
  } = feedInfo;
  return FeedlyRSSFeedIds.includes(feedId);
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/uniqWith.js
var uniqWith = __webpack_require__(93654);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(41563);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/capitalize.js
var capitalize = __webpack_require__(89697);
;// CONCATENATED MODULE: ./src/content/app/lib/feedbackConstants.js
const FeedbackType = Object.freeze({
  board: 'badLikeBoard',
  businessEvent: 'badEvent',
  custom: 'user',
  duplicate: 'duplicate',
  entity: 'badEntity',
  other: 'user',
  severity: 'badSeverity',
  source: 'badSource',
  topic: 'badTopic',
  vulnerability: 'badVulnerability',
  trendingMalware: 'badTrendingMalware',
  trendingMitreAttack: 'badTrendingMitreAttack',
  trendingThreat: 'badTrendingThreat',
  trendingThreatActor: 'badTrendingThreatActor',
  trendingVulnerability: 'badTrendingVulnerability'
});
const CybersecurityFeedbackOptions = Object.freeze({
  notAThreat: 'Not a threat',
  notCriticalEnough: 'Not critical enough',
  duplicate: 'Duplicate',
  tooOld: 'Too old',
  other: 'Something Else'
});
;// CONCATENATED MODULE: ./src/content/app/lib/cybersecurityConstants.js

const ThreatsTopic = 'nlp/f/topic/4050';
const threatActorsAnyTopicId = 'nlp/f/entity/gz:ta-any';
const threatActorsNewTopicId = 'nlp/f/entity/gz:new-threat-actor';
const mitreAttackTechniqueEntityIdPrefix = 'nlp/f/entity/gz:mi:attack-pattern';
const mitreAttackTacticEntityIdPrefx = 'nlp/f/entity/gz:mi:x-mitre-tactic';
const ThreatActorCountries = Object.freeze({
  AE: 'United Arab Emirates',
  BR: 'Brazil',
  BY: 'Belarus',
  CN: 'China',
  ES: 'Spain',
  FR: 'France',
  IL: 'Israel',
  IN: 'India',
  IR: 'Iran',
  KP: 'North Korea',
  KR: 'South Korea',
  LB: 'Lebanon',
  LY: 'Libya',
  NG: 'Nigeria',
  PK: 'Pakistan',
  RO: 'Romania',
  RU: 'Russian Federation',
  SY: 'Syrian Arab Republic',
  TN: 'Tunisia',
  TR: 'Turkey',
  UA: 'Ukraine',
  US: 'USA',
  VN: 'Viet Nam'
});
const ThreatActorCountryFlags = Object.freeze({
  AE: '🇦🇪',
  BR: '🇧🇷',
  BY: '🇧🇾',
  CN: '🇨🇳',
  ES: '🇪🇸',
  FR: '🇫🇷',
  IL: '🇮🇱',
  IN: '🇮🇳',
  IR: '🇮🇷',
  KP: '🇰🇵',
  KR: '🇰🇷',
  LB: '🇱🇧',
  LY: '🇱🇾',
  NG: '🇳🇬',
  PK: '🇵🇰',
  RO: '🇷🇴',
  RU: '🇷🇺',
  SY: '🇸🇾',
  TN: '🇹🇳',
  TR: '🇹🇷',
  UA: '🇺🇦',
  US: '🇺🇸',
  VN: '🇻🇳'
});
const cybersecurityConstants_ThreatEntityTypes = Object.freeze({
  malwareFamily: 'malwareFamily',
  mitreAttack: 'mitreAttack',
  threatActor: 'threatActor'
});
const ThreatEntityTypeLabels = Object.freeze({
  [cybersecurityConstants_ThreatEntityTypes.malwareFamily]: 'Malware Family',
  [cybersecurityConstants_ThreatEntityTypes.mitreAttack]: 'MITRE Attack',
  [cybersecurityConstants_ThreatEntityTypes.threatActor]: 'Threat Actor'
});
const CybersecurityTrends = Object.freeze([{
  id: 'malwares',
  field: 'new-malware',
  header: 'New Malware'
}, {
  id: 'threatActors',
  field: 'actor',
  header: 'Attackers'
}, {
  id: 'mitreAttacks',
  field: 'attack',
  header: 'Tactics & Techniques'
}]);
const CybersecurityTrendsFeedback = Object.freeze({
  malwares: {
    type: FeedbackType.trendingMalware,
    value: 'Not a malware'
  },
  mitreAttacks: {
    type: FeedbackType.trendingMitreAttack,
    value: 'Not a tactic or a technique'
  },
  threatActors: {
    type: FeedbackType.trendingThreatActor,
    value: 'Not a threat actor'
  },
  vulnerability: {
    type: FeedbackType.trendingVulnerability,
    value: 'Not a vulnerability'
  }
});
;// CONCATENATED MODULE: ./src/content/app/lib/leoTopicConstants.js
const businessEventType = 'businessEvent';
const mitreAttackType = 'mitreAttack';
const leoTopicConstants_indicatorOfCompromiseId = 'nlp/f/topic/1832';
const MarketDataId = 'nlp/f/topic/6013';
const TechInnovationId = 'nlp/f/topic/6000';
const VulnerabilityTooltipInfo = Object.freeze({
  HIGH: {
    leoBehaviorExplanation: 'Feedly AI understands how to recognize articles about critical vulnerabilities. It will look for vulnerabilities with a CVSS above 8 or a CVSS score above 5 that includes a known exploit.',
    url: 'https://feedly.com/ai/models/high-vulnerabilities'
  },
  MEDIUM: {
    leoBehaviorExplanation: 'Feedly AI understands how to recognize articles about medium vulnerabilities. It will look for vulnerabilities with a CVSS between 5 and 8.',
    url: 'https://feedly.com/ai/models/medium-vulnerabilities'
  },
  LOW: {
    leoBehaviorExplanation: 'Feedly AI understands how to recognize articles about low vulnerabilities. It will look for vulnerabilities with a CVSS below 5.'
  }
});
const StrategicMovesIds = {
  funding: 'nlp/f/businessEvent/funding',
  partnership: 'nlp/f/businessEvent/partnership',
  mergersAcquisitions: 'nlp/f/businessEvent/mergers-acquisitions',
  productLaunch: 'nlp/f/businessEvent/productLaunch',
  ipo: 'nlp/f/businessEvent/ipo',
  layoffs: 'nlp/f/businessEvent/layoffs',
  leadershipChange: 'nlp/f/businessEvent/leadershipChange',
  locationExpansions: 'nlp/f/businessEvent/location-expansions'
};
const TopicPartIdPrefixes = Object.freeze({
  businessEvent: 'nlp/f/businessEvent/',
  entity: 'nlp/f/entity/',
  entityList: 'nlp/f/entity/cl:',
  topic: 'nlp/f/topic/'
});
const LeoTopicDescriptions = Object.freeze({
  consumerGood: 'consumer good',
  customKeyword: 'basic keyword match',
  cyberEvent: 'cyber event',
  disease: 'disease',
  entity: 'entity',
  event: 'event',
  industryTopic: 'industry',
  gene: 'gene',
  location: 'location',
  org: 'organization',
  other: 'other',
  person: 'person',
  publisher: 'publisher',
  threatActor: 'threat actor',
  topic: 'topic',
  smartTopic: 'smart topic',
  workOfArt: 'work of art'
});
const KeywordHints = Object.freeze({
  default: 'AND, OR, and NOT operators are not supported in AI Models.',
  multiple: 'Combinations of AND, OR, NOT are not supported.',
  priorities: 'AND, OR, and NOT operators are not supported in AI Models. Click the plus to model operators by adding parts and layers.',
  AND: 'The AND operator is not supported in Mute Filters.',
  NOT: 'Create a Priority instead of using the NOT operator.',
  OR: 'Create separate Mute Filters instead of using the OR operator.'
});
const IndustryModels = {
  advertising: {
    id: 'nlp/f/topic/4029',
    label: 'Advertising'
  },
  aerospace: {
    id: 'nlp/f/topic/4042',
    label: 'Aerospace'
  },
  agriculture: {
    id: 'nlp/f/topic/4035',
    label: 'Agriculture'
  },
  airline: {
    id: 'nlp/f/topic/3092',
    label: 'Airline'
  },
  automotive: {
    id: 'nlp/f/topic/4011',
    label: 'Automotive'
  },
  beauty: {
    id: 'nlp/f/topic/4012',
    label: 'Beauty'
  },
  beverage: {
    id: 'nlp/f/topic/4013',
    label: 'Beverage'
  },
  biopharma: {
    id: 'nlp/f/topic/4014',
    label: 'Biopharma'
  },
  chemical: {
    id: 'nlp/f/topic/4039',
    label: 'Chemical'
  },
  defense: {
    id: 'nlp/f/topic/4015',
    label: 'Defense'
  },
  education: {
    id: 'nlp/f/topic/4046',
    label: 'Education'
  },
  electronics: {
    id: 'nlp/f/topic/4047',
    label: 'Electronics'
  },
  energy: {
    id: 'nlp/f/topic/4016',
    label: 'Energy'
  },
  fashion: {
    id: 'nlp/f/topic/4031',
    label: 'Fashion'
  },
  finance: {
    id: 'nlp/f/topic/4017',
    label: 'Finance'
  },
  food: {
    id: 'nlp/f/topic/4018',
    label: 'Food'
  },
  gaming: {
    id: 'nlp/f/topic/4019',
    label: 'Gaming'
  },
  government: {
    id: 'nlp/f/topic/4044',
    label: 'Government'
  },
  grocery: {
    id: 'nlp/f/topic/4033',
    label: 'Grocery Retail'
  },
  healthcare: {
    id: 'nlp/f/topic/4077',
    label: 'Healthcare'
  },
  insurance: {
    id: 'nlp/f/topic/4020',
    label: 'Insurance'
  },
  legal: {
    id: 'nlp/f/topic/4021',
    label: 'Legal'
  },
  logistics: {
    id: 'nlp/f/topic/4048',
    label: 'Logistics'
  },
  luxury: {
    id: 'nlp/f/topic/4030',
    label: 'Luxury'
  },
  manufacturing: {
    id: 'nlp/f/topic/1404',
    label: 'Manufacturing'
  },
  media: {
    id: 'nlp/f/topic/4022',
    label: 'Media & Entertainment'
  },
  medicalDevices: {
    id: 'nlp/f/topic/4023',
    label: 'Medical Devices'
  },
  mining: {
    id: 'nlp/f/topic/4036',
    label: 'Mining'
  },
  oil: {
    id: 'nlp/f/topic/4040',
    label: 'Oil and Gas'
  },
  railway: {
    id: 'nlp/f/topic/4037',
    label: 'Railway'
  },
  realEstate: {
    id: 'nlp/f/topic/4024',
    label: 'Real Estate'
  },
  retail: {
    id: 'nlp/f/topic/4025',
    label: 'Retail'
  },
  supplyChain: {
    id: 'nlp/f/topic/4026',
    label: 'Supply Chain'
  },
  tech: {
    id: 'nlp/f/topic/2256',
    label: 'Tech'
  },
  telecom: {
    id: 'nlp/f/topic/4027',
    label: 'Telecom'
  },
  travel: {
    id: 'nlp/f/topic/4028',
    label: 'Travel & Hospitality'
  },
  water: {
    id: 'nlp/f/topic/4032',
    label: 'Water'
  }
};
;// CONCATENATED MODULE: ./src/content/app/lib/webAlertUtils.js









const WebAlertFeedPrefix = 'feed/https://feedly.com/f/alert/';

/**
 * @param {Object | String} part representing a topic or custom keyword object
 * @return {String} id
 */
function getPartId(part) {
  return part.id || part.text;
}

/**
 * Returns a human-readable string of an alert's parts and logic operators
 * eg. "(Tesla OR BMW) AND (Partnerships)"
 */
function webAlertUtils_getPartSummary() {
  let layers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let notLayers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  let {
    showTextPrefix = false
  } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (!layers.length) {
    return null;
  }
  const formattedLayers = formatLayers(layers, {
    showTextPrefix
  });
  const formattedNotLayers = formatLayers(notLayers, {
    showTextPrefix
  });
  return "".concat(formattedLayers).concat(formattedNotLayers ? " NOT ".concat(formattedNotLayers) : '');
}
function formatLayers(layers) {
  let {
    showTextPrefix = false
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const layerPartLabels = getLayerPartLabels(layers, {
    showTextPrefix
  });
  const formattedLayerParts = layerPartLabels.map(labels => "(".concat(labels.join(' OR '), ")"));
  return formattedLayerParts.join(' AND ');
}
function getSecurityPartLabel(label) {
  return "".concat(_capitalize(label), " Vulnerability");
}
function getLayerPartLabels(layers) {
  let {
    showTextPrefix = false
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return layers.map(layer => {
    var _ref;
    if (layer.type === PriorityLayerType.topStories) {
      return ['Top Stories'];
    }
    return (_ref = layer.parts || layer.severities) === null || _ref === void 0 ? void 0 : _ref.map(part => {
      let label = getPartLabel(part, {
        showTextPrefix
      });
      if (layer.type === PriorityLayerType.security) {
        label = getSecurityPartLabel(label);
      }
      return label;
    });
  }).filter(labels => !!(labels !== null && labels !== void 0 && labels.length));
}
function extractWebAlertId(streamId) {
  if (streamId.startsWith(WebAlertFeedPrefix)) {
    return streamId.split(WebAlertFeedPrefix)[1];
  }
  return null;
}

/**
  Converts flagged entity parts to keyword parts
*/
function webAlertUtils_getFormattedLayers(_ref2) {
  let {
    layers = [],
    notLayers = []
  } = _ref2;
  // Removes empty layers as the API doesn't support empty layers
  // & remove duplicate "Top Stories" layers
  let savedFirstTopStoriesLayer = false;
  const nonEmptyLayers = [...layers, ...notLayers].reduce((accumulator, currentLayer) => {
    const {
      parts,
      type
    } = currentLayer;
    if (type === PriorityLayerType.topStories && !savedFirstTopStoriesLayer) {
      accumulator.push(currentLayer);
      savedFirstTopStoriesLayer = true;
    } else if (parts.length) {
      accumulator.push(currentLayer);
    }
    return accumulator;
  }, []);

  // Convert flagged entity parts to keyword parts.
  return nonEmptyLayers.map(layer => {
    if (layer.type === PriorityLayerType.topStories) {
      return layer;
    }
    return {
      ...layer,
      parts: _uniqWith(layer.parts, _isEqual).map(part => {
        const {
          aliases,
          id,
          label,
          text,
          type
        } = part;
        if (!id || text) {
          // Covers case of severities or keywords
          return part;
        }
        return {
          aliases,
          id,
          label,
          type
        };
      })
    };
  });
}
function getGuidedIntelligenceOptions() {
  return streets.isThreatIntelAccount() ? GuidedIntelligenceOptions.cybersecurity : GuidedIntelligenceOptions.marketIntel;
}
function isMonoPartAlert() {
  var _layers$0$parts;
  let layers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return layers.length === 1 && ((_layers$0$parts = layers[0].parts) === null || _layers$0$parts === void 0 ? void 0 : _layers$0$parts.length) === 1;
}
function convertPriorityToWebAlert(priority) {
  const {
    layers,
    streamIds,
    streamLabel
  } = priority;
  return {
    layers: layers.map(layer => ({
      ...layer,
      parts: layer[PriorityLayerPartNames[layer.type]]
    })),
    bundles: [{
      id: streamIds[0],
      label: streamLabel,
      type: BundleTypes.stream
    }]
  };
}
function shouldShowMigrateOption(isEnterprisePriority) {
  // Enterprise/Business admins can migrate any priorities to web alerts
  // Pro+ users can migrate their personal priorities to web alerts
  return streets.hasAdminEnterpriseAccess() || streets.hasAdminBusinessAccess() || streets.hasProPlusAccess() && !isEnterprisePriority;
}
function condenseWebAlert() {
  let {
    layers = [],
    bundles = []
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // TODO make sure this is the most condensed version possible, and that it matches the API format
  const condensedLayers = layers.map(layer => {
    if (layer.type === PriorityLayerType.matches) {
      const condensedParts = layer.parts.map(part => {
        const {
          id,
          text
        } = part;
        return id ? {
          id
        } : {
          text
        };
      });
      return {
        ...layer,
        parts: condensedParts
      };
    }
    return layer;
  });
  return {
    layers: condensedLayers,
    bundles: bundles.map(_ref3 => {
      let {
        type,
        id,
        tier
      } = _ref3;
      return {
        type,
        id,
        tier
      };
    })
  };
}
function webAlertUtils_encodeWebAlert(alert) {
  return base64urlEncode(JSON.stringify(condenseWebAlert(alert)));
}
function webAlertUtils_decodeWebAlert(webAlertString) {
  if (!webAlertString) {
    return {};
  }
  try {
    const options = base64urlDecode(webAlertString);
    const {
      bundles,
      layers
    } = JSON.parse(options);
    return {
      bundles,
      layers
    };
  } catch (error) {
    console.warn(error);
    return {};
  }
}

/**
  Filter out parts that should not appear in
  EntryMetadataMatchingParts
*/
function filterForMatchingPartMetadata(parts) {
  return parts.filter(part => {
    var _part$id;
    return !isPublicationPart(part) && part.id !== indicatorOfCompromiseId && !SeverityOptionsList.includes(part.text) && part.type !== ThreatEntityTypes.mitreAttack && part.type !== ThreatEntityTypes.threatActor && !((_part$id = part.id) !== null && _part$id !== void 0 && _part$id.startsWith(vulnerabilityTopicIdPrefix));
  });
}
;// CONCATENATED MODULE: ./src/content/app/lib/analyticsUtils.js





const AnalyticsExcludedTeams = new Set(['feedly', 'christeam', 'acme', 'akko', 'feedly50cr']);
const StreamPageAnalyticsTabNames = Object.freeze({
  analytics: 'Analytics',
  content: 'All Articles',
  topStories: 'Top Stories'
});
function analyticsUtils_logHubspotPageView() {
  var _window$_hsq;
  (_window$_hsq = window._hsq) === null || _window$_hsq === void 0 || _window$_hsq.push(['trackPageView']);
}
function logHubspotPath(uri) {
  var _window$_hsq2;
  (_window$_hsq2 = window._hsq) === null || _window$_hsq2 === void 0 || _window$_hsq2.push(['setPath', uri]);
}
function logMixpanelEvent(name, properties) {
  if ( true && skipAnalytics()) {
    return;
  }
  utilsLogMixpanelEvent(name, properties);
}
function timeMixpanelEvent(name) {
  if (skipAnalytics()) {
    return;
  }
  utilsTimeMixpanelEvent(name);
}
function logPageTabClicked(_ref) {
  let {
    streamInfo,
    tab
  } = _ref;
  const {
    isCategory,
    isTag
  } = extractType(streamInfo.id);
  let context;
  if (isCategory) {
    context = 'Folder';
  } else if (isTag) {
    context = 'Board';
  } else if (isWebAlert(streamInfo)) {
    context = 'AI Feed';
  }
  if (context) {
    logMixpanelEvent('Page Tab Clicked', {
      Context: context,
      Tab: StreamPageAnalyticsTabNames[tab]
    });
  }
}
function logAIFeedPageViewed(_ref2) {
  let {
    aiFeed,
    folder,
    name
  } = _ref2;
  const [notLayers, layers] = _partition(aiFeed.layers, ['negate', true]);
  logMixpanelEvent('AI Feed Page Viewed', {
    Name: name,
    ID: aiFeed.id,
    'Parent Folder': folder,
    'Parts Summary': getPartSummary(layers, notLayers, {
      showTextPrefix: true
    })
  });
}
function logAIFeedBuilderAndItemSelected(_ref3) {
  let {
    category,
    value
  } = _ref3;
  logMixpanelEvent('AI Feed Builder AND Item Selected', {
    Category: category,
    Value: value
  });
}
function logAIFeedBuilderViewedEvent(location) {
  logMixpanelEvent('AI Feed Builder Viewed', {
    Location: location
  });
}
function logAIFeedDiscarded(_ref4) {
  let {
    bundles,
    layers,
    location,
    notLayers,
    refineMode,
    velocity
  } = _ref4;
  logMixpanelEvent('AI Feed Discarded', {
    Bundles: bundles ? bundles[refineMode].map(_ref5 => {
      let {
        label
      } = _ref5;
      return label;
    }) : undefined,
    Definition: [...layers, ...notLayers],
    Location: location,
    'Parts Summary': getPartSummary(layers, notLayers, {
      showTextPrefix: true
    }),
    Velocity: velocity
  });
}
function logAIFeedGuidedLayerEvent(_ref6) {
  let {
    depth,
    type,
    value
  } = _ref6;
  logMixpanelEvent('AI Feed Builder Guided Layer Added', {
    Depth: depth,
    Type: type,
    Value: value
  });
}
function logInsightExpandedEvent(_ref7) {
  let {
    cardType,
    cardId,
    insightType
  } = _ref7;
  logMixpanelEvent('Card AI Insight Expanded', {
    'Card Type': cardType,
    'Card ID': cardId,
    'Insight Type': insightType
  });
}
function logInsightExportedEvent(_ref8) {
  let {
    cardType,
    cardId,
    exportFormat,
    insightType
  } = _ref8;
  logMixpanelEvent('Card AI Insight Data Exported', {
    'Card Type': cardType,
    'Card ID': cardId,
    'Export Format': exportFormat,
    'Insight Type': insightType
  });
}
function logDashboardSearchDiscardedEvent(_ref9) {
  let {
    dashboardType,
    entities
  } = _ref9;
  logMixpanelEvent('Dashboard Search Discarded', {
    Entities: entities,
    Type: dashboardType
  });
}
function logDashboardSectionOpenedEvent(_ref10) {
  let {
    dashboardType,
    searchId,
    sectionType
  } = _ref10;
  logMixpanelEvent('Dashboard Section Opened', {
    Type: dashboardType,
    ID: searchId,
    'Section Type': sectionType
  });
}
function logDashboardSearchSavedEvent(_ref11) {
  let {
    entities,
    name,
    type
  } = _ref11;
  logMixpanelEvent('Dashboard Search Saved', {
    Entities: entities,
    Name: name,
    Type: type
  });
}
function logPageExportEvent(_ref12) {
  let {
    exportFormat,
    pageName,
    pageType,
    sectionType
  } = _ref12;
  logMixpanelEvent('Page Data Exported', {
    'Page Type': pageType,
    'Page Name': pageName,
    'Export Format': exportFormat,
    'Section Type': sectionType
  });
}
const insightCardViewedEventName = 'Insight Card Viewed';
function timeInsightCardViewedEvent() {
  timeMixpanelEvent(insightCardViewedEventName);
}
function logInsightCardViewedEvent(_ref13) {
  let {
    entryPoint,
    cardType,
    id,
    name
  } = _ref13;
  logMixpanelEvent(insightCardViewedEventName, {
    'Card Type': cardType,
    'Card Name': name,
    'Card ID': id,
    'Entry Point': entryPoint
  });
}
function logInsightCardFavorited(_ref14) {
  let {
    cardType,
    cardName
  } = _ref14;
  logMixpanelEvent('Insight Card Favorited', {
    'Card Type': cardType,
    'Card Name': cardName
  });
}
function logInsightCardFilterSelected(_ref15) {
  let {
    cardType,
    cardName,
    filterName,
    sectionName
  } = _ref15;
  logMixpanelEvent('Insight Card Filter Selected', {
    'Card Type': cardType,
    'Card Name': cardName,
    'Section Name': sectionName,
    'Filter Name': filterName
  });
}
function logInsightCardSectionOpened(_ref16) {
  let {
    cardType,
    cardName,
    sectionType
  } = _ref16;
  logMixpanelEvent('Insight Card Section Opened', {
    'Card Type': cardType,
    'Card Name': cardName,
    'Section Type': sectionType
  });
}
function logIntegrationLinkClicked(integrationName, linkType) {
  logMixpanelEvent('Integration Details Page Link Clicked', {
    'Integration Name': integrationName,
    Link: linkType
  });
}
function logIntegrationConnected(service) {
  logMixpanelEvent('Integration Connected', {
    Service: service
  });
}
function logIntegrationDisconnected(service) {
  logMixpanelEvent('Integration Disconnected', {
    Service: service
  });
}
function logInsightArticleOpenedEvent(_ref17) {
  let {
    id,
    type
  } = _ref17;
  logMixpanelEvent('Card AI Insight Article Opened', {
    'Card ID': id,
    'Card Type': type
  });
}
function logInsightCardTimelineEventSelected(_ref18) {
  let {
    cardType,
    cardName,
    eventType
  } = _ref18;
  logMixpanelEvent('Insight Card Timeline Event Selected', {
    'Card Type': cardType,
    'Card Name': cardName,
    'Event Type': eventType
  });
}
function logArticleMetadataClicked(type, entryPoint) {
  logMixpanelEvent('Article Metadata Clicked', {
    'Metadata Type': type,
    'Entry Point': entryPoint
  });
}
function logArticleShare(_ref19) {
  let {
    service: Service,
    url: URL
  } = _ref19;
  logMixpanelEvent('Article Shared', {
    Service,
    URL
  });
}
function logTrialVideoStarted(name) {
  logMixpanelEvent('Enterprise Trial Video Started', {
    Video: name
  });
}
function logTrialVideoClosed(_ref20) {
  let {
    name,
    videoDuration,
    videoPosition
  } = _ref20;
  logMixpanelEvent('Enterprise Trial Video Closed', {
    Video: name,
    'Duration Watched': videoPosition,
    'Percentage Watched': "".concat(Math.round(videoPosition / videoDuration * 100), "%")
  });
}

// Disabling while awaiting decision on if this will be needed again
// eslint-disable-next-line no-unused-vars
function logHeaderActionClicked(_ref21) {
  let {
    item,
    pageUri
  } = _ref21;
} // let pageType;
// const {
//   isFeed,
//   isEnterprise,
//   isReadLater,
//   isAnnotated,
//   isRecentlyRead,
//   isTag,
//   isCategory,
//   isAiFeed,
// } = extractType(pageUri);
// if (pageUri === 'feed/https://feedly.com/changelog/feed.xml') {
//   pageType = 'Changelog';
// } else if (pageUri?.startsWith('my/')) {
//   pageType = 'Today';
// } else if (isReadLater) {
//   pageType = 'Read Later';
// } else if (isAnnotated) {
//   pageType = 'Annotated';
// } else if (isRecentlyRead) {
//   pageType = 'Recently Read';
// } else if (isTag) {
//   pageType = isEnterprise ? 'Team Board' : 'Personal Board';
// } else if (isCategory) {
//   pageType = isEnterprise ? 'Team Folder' : 'Personal Folder';
// } else if (isAiFeed) {
//   pageType = 'AI Feed';
// } else if (isFeed) {
//   pageType = 'RSS Feed';
// }
// logMixpanelEvent('Header Action Clicked', {
//   Item: item,
//   'Page Type': pageType,
//   'Page URI': pageUri,
// });
function skipAnalytics() {
  var _streets$getUserEmail;
  if ( false || typeof window === 'undefined' || AnalyticsExcludedTeams.has(streets.getEnterpriseId()) || (_streets$getUserEmail = streets.getUserEmail()) !== null && _streets$getUserEmail !== void 0 && _streets$getUserEmail.endsWith('@feedly.com')) {
    return true;
  }
  const session = SessionUtils.load();
  return session && session.sudoSession;
}
;// CONCATENATED MODULE: ./src/content/app/lib/pageInfoUtils.js


const pageInfoUtils_feedlyURLPrefix = 'https://feedly.com';
function getStreamPrefContext(streamId) {
  const {
    isCategory,
    isFeed,
    isPriority,
    isTag
  } = extractType(streamId);
  if (isCategory) {
    return pageInfoUtils_getCollectionPrefContext(streamId);
  }
  if (isTag) {
    return pageInfoUtils_getTagPrefContext(streamId);
  }
  if (isFeed) {
    return getFeedPrefContext(streamId);
  }
  if (isPriority) {
    return pageInfoUtils_getPriorityPrefContext(streamId);
  }
  return streamId;
}

/**
 * Note: in the preference context, we historically do not encode URI components
 * Keeping this the way it is to not mess around with the user preferences
 */
function pageInfoUtils_getCollectionPrefContext(streamId) {
  return "collection/content/".concat(streamId);
}
function pageInfoUtils_getPriorityPrefContext(streamId) {
  return "priority/content/".concat(streamId);
}
function pageInfoUtils_getTagPrefContext(streamId) {
  return "board/content/".concat(streamId);
}
function getFeedPrefContext(streamId) {
  return "subscription/".concat(streamId);
}
function setPageTitle(text) {
  document.title = text;
  logHubspotPageView();
}

/**
Converts a `streamId` into a local uri. For collections and boards, the last
part of the streamId is encoded, because it might be an older label type id
which can contain a percent sign (%), slash (/), etc.
@param {String} streamId In the form of:
  - ${userOrEnterprise}/${userOrTeamId}/tag/${labelOrId}
  - ${userOrEnterprise}/${userOrTeamId}/category/${labelOrId}
  - ${userOrEnterprise}/${userOrTeamId}/priority/${labelOrId}
  - feed/${feedUrl}
@param {Object} options
  @property [options.tab] The name of the tab to encode. Defaults to 'content'.
*/
function streamIdToUri(streamId) {
  let {
    tab = 'content'
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!streamId) {
    return null;
  }
  if (streamId.indexOf('/') === -1) {
    return streamId;
  }
  const {
    isCategory,
    isFeed,
    isPriority,
    isTag
  } = extractType(streamId);
  if (isFeed) {
    // We encode the entire streamId for feeds, becuase it's a feed url
    return "subscription/".concat(encodeURIComponent(streamId));
  } else if (isPriority) {
    // We don't encode priorities, because their ids are dash delimited and
    // don't need it
    return "priority/content/".concat(streamId);
  }

  // Remove the first three elements from the array and join the rest.
  // Note that we can't just assume that the last element is the label,
  // because some legacy category ids contain slashes.
  const labelParts = streamId.split('/').slice(3);
  const label = labelParts.join('/');
  const uriId = streamId.replace(label, encodeURIComponent(label));
  if (isCategory) {
    return "collection/".concat(tab, "/").concat(uriId);
  } else if (isTag) {
    return "board/".concat(tab, "/").concat(uriId);
  }
  console.error('[pageInfoUtils] Unknown streamId type in `streamIdToUri.`');
  return null;
}
;// CONCATENATED MODULE: ./src/content/app/lib/urlUtils.js







const DATA = 'data:';
const HTTP = 'http:';
const HTTPS = 'https:';
const PROTOCOLLESS = '//';
function addLinkProtocol(href) {
  if (!href) {
    return null;
  }
  if (!href.startsWith(HTTP) && !href.startsWith(HTTPS)) {
    return 'https://' + href;
  }
  return href;
}

/**
Converts a fully formed url, e.g. 'https://feedly.com/i/my' and strips off the
origin and channel, leaving only the uri, e.g. 'my'.
@param {String} url
*/
function convertFeedlyURLToURI(url) {
  let uri;
  if (url) {
    const {
      pathname
    } = parseURL(url);

    // Remove the empty string before the first slash and the channel
    const uriParts = pathname.split('/').slice(2);
    uri = uriParts.join('/');
  }
  return uri || '';
}

/**
 * Extract domain name (without protocol or 'www.')
 * Ex: 'http://www.reuters.com/article/us-australia-power-tesla' -> 'reuters.com'
 */
function extractDomain(url) {
  if (!url) {
    return null;
  }
  let domain;

  // Remove protocol
  if (url.indexOf('://') > -1) {
    domain = url.split('/')[2];
  } else {
    domain = url.split('/')[0];
  }

  // Remove url-encoded separators as well
  const separatorPos = domain.indexOf('%2');
  if (separatorPos > -1) {
    domain = domain.substring(0, separatorPos);
  }

  // Remove port number
  domain = domain.split(':')[0];

  // Remove 'www.'
  domain = domain.replace(/^www\./i, '');
  return domain;
}

/**
Whether the given `src` url should be considered secure or not.
@param {String} url
*/
function isSecureURL(url) {
  if (!url) {
    // Treat no url as a secure url, as nothing will be loaded
    return true;
  } else if (url.startsWith(PROTOCOLLESS)) {
    // Protocolless urls are secure if the page is
    return window.location.protocol === HTTPS;
  } else if (url.startsWith(DATA)) {
    // Treat data urls as secure, becuase the contents are embeded in the url
    return true;
  }
  return url.startsWith(HTTPS);
}
const VALID_PROTOCOLS = new Set(['ftp:', 'http:', 'https:']);

/**
 * Native URL Parser with the fallback to DOM
 */
function parseURL(url) {
  const result = new URL(url);
  if (!VALID_PROTOCOLS.has(result.protocol)) {
    throw new TypeError('Invalid URL');
  }
  return result;
}
function urlUtils_getCurrentOrigin() {
  const {
    origin,
    pathname
  } = window.location;

  // Account for alpha channel, feature branches, etc.
  const channel = pathname.split('/')[1] || 'i';
  return "".concat(origin, "/").concat(channel);
}
function isSandbox() {
  return window.BACKEND ? window.BACKEND.includes('sandbox7.feedly.com') : false;
}
function parseURLParameters(url) {
  return Object.fromEntries(new URL(url).searchParams.entries());
}
function parseHash(uri) {
  let opt = {
    p: 0,
    parameters: {},
    key: null,
    type: null,
    uri
  };
  if (!uri) {
    return opt;
  }
  const [path] = uri.split('?');
  const [type, ...rest] = path.split('/');
  opt.type = decodeURIComponent(type);
  opt.parameters = parseURLParameters(feedlyURLPrefix + '/' + uri); // hacky, but we only care about the query parameters

  if (opt.type === 'powerSearch') {
    const [powerSearchType] = rest;
    if (powerSearchType === PowerSearchTypes.in) {
      const searchParts = readPowerSearchFiltersQuery(opt.parameters);
      opt = {
        ...opt,
        key: searchParts.scope,
        embedded: searchParts.embedded,
        end: searchParts.end,
        ranked: searchParts.ranked,
        scope: searchParts.scope,
        start: searchParts.start,
        time: searchParts.time
      };
    }
    opt.prefContext = uri;
    opt = {
      ...opt,
      beyondSearchOptions: decodeWebAlert(opt.parameters.options)
    };
  } else {
    // uri s of format type/key?utm_parameters or type?utm_parameters
    opt.key = makeKey(rest);
    if (opt.type === 'collection' || opt.type === 'board' || opt.type === 'priority') {
      const {
        key
      } = opt;
      const streamId = key.split('/').slice(1).join('/');
      if (opt.type === 'collection') {
        // Ensure that legacy preferences, etc. for /latest still work
        if (streamId === getCategoryAllId()) {
          opt.prefContext = 'latest';
        } else {
          opt.prefContext = getCollectionPrefContext(streamId);
        }
      } else if (opt.type === 'priority') {
        opt.prefContext = getPriorityPrefContext(streamId);
      } else {
        opt.prefContext = getTagPrefContext(streamId);
      }
    } else {
      opt.prefContext = opt.type;
      if (opt.key) {
        opt.prefContext += '/' + opt.key;
      }
    }
  }
  if (opt.type === topicDataset) {
    const [topicDatasetId, activePage] = rest;
    opt.parameters = {
      ...opt.parameters,
      activePage,
      topicDatasetId
    };
    if (opt.parameters.tab === BuildTabOptions.search) {
      opt = {
        ...opt,
        beyondSearchOptions: decodeWebAlert(opt.parameters.options)
      };
    }
  }
  if (opt.type === 'aiFeeds') {
    opt = {
      ...opt,
      beyondSearchOptions: decodeWebAlert(opt.parameters.options)
    };
  }
  if (opt.type === 'newsletters') {
    if (!opt.key) {
      opt.type = 'newslettersList';
    } else if (rest[0] === 'unsubscribe') {
      opt.type = 'newslettersUnsubscribe';
      opt.key = makeKey(rest.splice(1));
    } else if (rest[0] === 'subscribe') {
      opt.type = 'newslettersSubscribe';
      opt.key = makeKey(rest.splice(1));
    } else if (rest[0] === 'confirm') {
      opt.type = 'newslettersConfirm';
      opt.key = makeKey(rest.splice(1));
    }
  }
  return opt;
}
function makeKey(pathParts) {
  if (pathParts && pathParts.length > 0) {
    return decodeURIComponent(pathParts.join('/'));
  }
  return undefined;
}
function encodeParameters(map, filter) {
  return Object.keys(map).reduce((accumulator, key) => {
    // if we pass a filter, we should only add the paramters which match
    // the filter. The filter is used to ask to only at utm_XXXX parameters
    // to URLs we send to Google Analitics for example.
    if (filter && key.indexOf(filter) !== 0) {
      return accumulator;
    }
    accumulator.push(key + '=' + encodeURIComponent(map[key]));
    return accumulator;
  }, []).join('&');
}
function urlUtils_encodeQueryParams(object) {
  return Object.entries(object).reduce((agg, _ref) => {
    let [key, value] = _ref;
    if (!jsUtils_isNullish(value)) {
      agg.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
    }
    return agg;
  }, []).join('&');
}
function extractAuthorizationCodeFromUrl(url) {
  const parsedUrl = new URL(url);
  const pathParams = parsedUrl.pathname.split('/');
  if (pathParams[2] === 'login' && pathParams.length >= 4 && pathParams[3]) {
    return pathParams[3];
  }
  return parsedUrl.searchParams.get('code');
}
function redirectToHomepage() {
  if (document.location.hostname === 'localhost' || document.location.hostname === 'sandbox7.feedly.com') {
    streets.service('router').loadPage('discover');
  } else {
    window.location.href = "https://feedly.com/homepage";
  }
}
;// CONCATENATED MODULE: ./src/content/app/lib/searchUtils.js








const SEARCH_KEYWORDS_LIMIT = 10;
const SEARCH_KEYWORDS_ERROR = 'Ten query terms is the maximum. Please modify your query.';
const SEPARATORS_REGEX = /AND|OR|site:|intitle:|[^\w]-/g;
const URL_ANYWHERE_REGEX = /(\s|^)((https?:\/\/)?([-a-zA-Z\d._~]{1,256}\.[-a-zA-Z]{1,63})(\/[-\w:@&?=+,.!/~*'%$_;()]*)?)(\s|$)/;

/**
 * If the keyword does not include quotes but includes or or and, we want to
 * capitalize them. Replace smart quotes with regular quotes.
 */
function autoCorrectKeyword(keyword) {
  if (keyword.indexOf('"') > -1) {
    return keyword.replace(/[“”]/g, '"');
  }
  return keyword.replace(/ and /gi, ' AND ').replace(/ or /gi, ' OR ').replace(/ site:[ ]*/gi, ' site:').replace(/intitle:[ ]*/gi, 'intitle:').replace(/[“”]/g, '"');
}
function createBundleFromStreamId(streamId) {
  const {
    isCategory,
    isFeed
  } = extractType(streamId);
  if (isCategory || isFeed) {
    // Stream label not required; it will be added later via askConvertSearchOptionsToState
    return [{
      id: streamId,
      type: BundleTypes.stream
    }];
  }
  return [];
}
function getActiveBundles(bundles) {
  return bundles.filter(bundle => bundle.tier !== pausedTierLevel);
}
function getBeyondSearchOptions(_ref) {
  let {
    bundles,
    layers,
    notLayers
  } = _ref;
  let {
    forVelocitiesPreview = false
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return {
    layers: getSearchOptionLayers(layers, notLayers),
    source: {
      items: forVelocitiesPreview ? bundles.map(_ref2 => {
        let {
          tier,
          ...bundle
        } = _ref2;
        return bundle;
      }) // tier is ignored for velocity preview
      : getActiveBundles(bundles)
    }
  };
}
function getInSearchOptions(_ref3) {
  let {
    layers,
    notLayers,
    scope
  } = _ref3;
  return {
    source: {
      items: scope.split(',').map(streamId => ({
        id: streamId,
        type: 'stream'
      }))
    },
    layers: getSearchOptionLayers(layers, notLayers)
  };
}

/**
 * The keywords limit is set to `SEARCH_KEYWORDS_LIMIT` (10).
 * If this limit is exceed, we return an error message
 */
function getKeywordsLengthError(keywords) {
  let queryTerms = keywords.split(SEPARATORS_REGEX);

  // Filter out empty query terms, which will happen when 'site:' or 'intitle:'
  // are the first part of the query.
  queryTerms = queryTerms.filter(keyword => !!keyword);
  return queryTerms.length > SEARCH_KEYWORDS_LIMIT ? SEARCH_KEYWORDS_ERROR : null;
}
function getSearchOptionLayers(layers, notLayers) {
  return getFormattedLayers({
    layers,
    notLayers
  }).map(_ref4 => {
    let {
      negate,
      parts,
      salience = PrioritySalience.mention,
      type
    } = _ref4;
    return {
      negate,
      [PriorityLayerPartNames[type]]: parts,
      type,
      ...(type === PriorityLayerType.matches ? {
        salience
      } : {})
    };
  });
}
function searchUtils_extractFirstUrl(text) {
  var _text$match;
  if (!text) {
    return undefined;
  }
  return (_text$match = text.match(URL_ANYWHERE_REGEX)) === null || _text$match === void 0 ? void 0 : _text$match[2];
}
function isKeywordURL(keyword) {
  // It is OK to use a URL in the Google Keyword Alert if prefixed by site:
  if (keyword.includes('site:')) {
    return false;
  }

  // If the keyword has a space, it is not a URL.
  if (keyword.includes(' ')) {
    return false;
  }
  if (keyword === 'www' || keyword === 'www.') {
    return true;
  }
  if (keyword.split('.').length > 2) {
    return true;
  }
  if (keyword.includes('.com')) {
    return true;
  }
  if (keyword.includes('.org')) {
    return true;
  }
  if (keyword.includes('.net')) {
    return true;
  }
  if (keyword.includes('http')) {
    return true;
  }
  if (keyword.split('/').length > 2) {
    return true;
  }
  return false;
}
function isInvalidWebAlertQuery(query) {
  return query.startsWith('site:') || query.split(/[\s()[\]]/).some(part => isKeywordURL(part) || isValidURL(part));
}
function isKeywordTopic(keyword) {
  return keyword && keyword.indexOf('#') === 0;
}
function isTermHighlightable(term) {
  const label = term.text || term.label;
  if (term.text || term.id && term.id.includes('entity')) {
    // Label must be at least 3 characters, or 2 characters with the first
    // being a number (eg "5G").
    return !!label && (label.length > 2 || label.length === 2 && !Number.isNaN(parseInt(label[0]))) && label !== 'title:' && label !== 'site:';
  }
  return false;
}
function searchUtils_getHighlightableKeywords(layers) {
  if (!layers) {
    return {};
  }
  return layers === null || layers === void 0 ? void 0 : layers.reduce((acc, layer) => {
    if (layer.type === PriorityLayerType.matches) {
      layer.parts.forEach(part => {
        if (isTermHighlightable(part)) {
          acc[part.label || part.text] = {
            highlight: true
          };
          if (part.aliases) {
            part.aliases.forEach(alias => {
              acc[alias] = {
                caseSensitive: true,
                highlight: true
              };
            });
          }
        }
      });
    }
    return acc;
  }, {});
}
function getInYourFeedlyFilterOptions(_ref5) {
  let {
    embedded,
    end,
    ranked,
    scope,
    start,
    time
  } = _ref5;
  const annotatedScopeId = streets.hasBusinessAccess() ? getEnterpriseTagAnnotatedId() : getPersonalTagAnnotatedId();
  if (scope === annotatedScopeId) {
    // Search only notes and highlights if this is the annotated id
    return {
      scope,
      time: TimePeriods.forever
    };
  }
  return {
    embedded: embedded === Embedded.any ? null : embedded,
    end,
    ranked,
    scope,
    start,
    time
  };
}
function getOptionalSearchQueryParameters(_ref6, continuation) {
  let {
    end,
    embedded,
    ranked,
    start,
    time
  } = _ref6;
  let queryParams = '';
  if (ranked != null) {
    queryParams += '&ranked=' + ranked;
  }
  if (embedded != null && embedded !== 'any') {
    queryParams += '&embedded=' + embedded;
  }
  if (time) {
    // Use saved start/end times for custom ranges, otherwise use dynamic values
    // from toTimeRange
    const [newerThan, olderThan] = time === TimePeriods.custom ? [start, end] : TimeOptions.find(_ref7 => {
      let {
        type
      } = _ref7;
      return type === time;
    }).toTimeRange();
    queryParams += "&".concat(encodeQueryParams({
      newerThan: newerThan ? new Date(newerThan).getTime() : undefined,
      olderThan: olderThan ? new Date(olderThan).getTime() : undefined
    }));
  }
  if (continuation != null) {
    queryParams += '&continuation=' + continuation;
  }
  return queryParams;
}

/**
@param {Object} options
  @property {String} [options.embedded]
  @property {String} [options.ranked]
  @property {String} [options.scope] Id of the stream to limit the search to.
  @property {String} [options.time]
  @property {String} [options.term]
@return {String}
*/
function getSearchUri() {
  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // Use regular search page for mobile searches
  let uri =  false ? 0 : 'powerSearch';

  // Add the search type to the uri
  if (options.term && !false) {
    const {
      term,
      ...otherOptions
    } = options;
    uri += "/in?options=".concat(encodeWebAlert({
      layers: [{
        parts: [{
          text: term,
          type: 'customKeyword'
        }],
        salience: 'about',
        type: 'matches'
      }]
    }), "&").concat(makePowerSearchFiltersQuery(otherOptions));
  } else {
    const queryParams = makePowerSearchFiltersQuery(options);
    uri += '/in';
    if (queryParams) {
      uri += '?' + queryParams;
    }
  }
  return uri;
}

/**
Whenever the scope is initially set or changed, we want to switch the time to
'forever' if the source is a board.
@param {String} scope
@param {String} currentTime - Current time value that should be used if the
  'time' shouldn't be modified.
*/
function getTimeForScope(scope) {
  let currentTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DefaultOptions.time;
  const {
    isTag
  } = extractType(scope);
  return isTag ? TimePeriods.forever : currentTime;
}
/** @return {?String} The given `value`, if it's valid, or `null` otherwise. */
function getUriPiece(value, validOptions, fallback) {
  return value === '-' || !validOptions[value] ? fallback : value;
}
function getConvertedTime(value) {
  var _TimePeriods$value;
  if (Object.values(TimePeriods).includes(value)) {
    return value;
  }

  // Convert old 'month', 'week' to TimePeriods format
  // or return default
  return (_TimePeriods$value = TimePeriods[value]) !== null && _TimePeriods$value !== void 0 ? _TimePeriods$value : DefaultOptions.time;
}
function getInclusiveEndDate(endDate) {
  const newEndDate = new Date(endDate);
  newEndDate.setDate(newEndDate.getDate() + 1);
  return newEndDate;
}
function makePowerSearchFiltersQuery(_ref8) {
  let {
    embedded,
    end,
    ranked,
    scope,
    start,
    term,
    time
  } = _ref8;
  return encodeQueryParams({
    embedded: Embedded[embedded],
    end: end ? new Date(end).getTime() : undefined,
    ranked: RankBy[ranked],
    scope,
    start: start ? new Date(start).getTime() : undefined,
    term,
    time
  });
}
function searchUtils_readPowerSearchFiltersQuery() {
  let {
    embedded,
    end,
    ranked,
    scope,
    start,
    term,
    time
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    embedded: getUriPiece(embedded, Embedded, DefaultOptions.embedded),
    end: end ? new Date(Number(end)) : undefined,
    ranked: getUriPiece(ranked, RankBy, DefaultOptions.ranked),
    scope: scope !== null && scope !== void 0 ? scope : null,
    start: start ? new Date(Number(start)) : undefined,
    term: term !== null && term !== void 0 ? term : null,
    time: getConvertedTime(time)
  };
}

/**
@param {String} uri Uri of a page. Examples:

  * /i/collection/priority/streamId
  * /i/board/content/streamId
  * /i/subscription/streamId

@return {Object} parts
  @property {String} parts.pageType
  @property {String} parts.scope
*/
function parseFeedUri() {
  let uri = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  const [ignoreFirstPart,
  // eslint-disable-line no-unused-vars
  ignoreSecondPart,
  // eslint-disable-line no-unused-vars
  pageType, ...restParts] = uri.split('/');
  return {
    pageType,
    scope: pageType === 'subscription' ? decodeURIComponent(restParts.join('/')) : restParts.slice(1).join('/')
  };
}
;// CONCATENATED MODULE: ./src/content/app/mobile/nativeUtils.js









const {
  App,
  AppLauncher,
  Browser,
  Clipboard,
  GoogleAuth,
  Haptics,
  Preferences,
  ScreenOrientation,
  Selection,
  Share,
  ShareTarget,
  SplashScreen,
  SignInWithApple,
  Theme
} = Capacitor.Plugins;
async function openUrlNative(url) {
  let browser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';
  let resolvedBrowser = browser;
  if (browser === 'auto') {
    resolvedBrowser = streets.service('preferences').getPreference(mobileBrowserPref);
  }
  if (resolvedBrowser === MobileBrowser.system) {
    return AppLauncher.openUrl({
      url
    });
  }
  return Browser.open({
    url
  });
}
async function shareNative(title, url) {
  try {
    await Share.share({
      title,
      url
    });
  } catch (error) {
    // Ignore canceled shares
    if (error.message !== 'Share canceled') {
      throw error;
    }
  }
}
async function writeTextToClipboardNative(text) {
  return Clipboard.write({
    string: text
  });
}
async function exitAppNative() {
  return App.exitApp();
}
function composeEmailNative(mailTo, subject, body) {
  window.open("mailto:".concat(encodeURIComponent(mailTo), "?subject=").concat(encodeURIComponent(subject), "&body=").concat(encodeURIComponent(body)));
}
function composeSupportEmailNative() {
  window.open(getSupportEmailHref());
}
function hapticFeedback() {
  if (false) {}
}
async function hideSplashScreenNative() {
  await SplashScreen.hide();
}
async function setThemeNative(themePref) {
  const {
    theme
  } = await Theme.setTheme({
    theme: themePref
  });
  return theme;
}
async function askPaymentNative(productId) {
  const {
    store
  } = window.CdvPurchase;
  const nativeProductId =  false ? 0 : productId;
  const product = store.get(nativeProductId);
  return product.getOffer().order();
}
async function startGoogleAuthNative() {
  try {
    // completely sign out the user, forcing them to select their account again
    await GoogleAuth.signOut();
  } catch (error) {
    console.warn(error);
  }
  try {
    var _await$GoogleAuth$sig;
    const {
      authentication: {
        idToken
      } = {},
      email,
      id
    } = (_await$GoogleAuth$sig = await GoogleAuth.signIn()) !== null && _await$GoogleAuth$sig !== void 0 ? _await$GoogleAuth$sig : {};
    await streets.service('auth').finishGoogleNativeAuth({
      auth: idToken,
      googleId: id,
      userEmail: email,
      tokenType: 'idToken'
    });
  } catch (error) {
    streets.service('auth').finishWithError(error);
  }
}
async function startAppleAuthNative() {
  try {
    var _await$SignInWithAppl;
    const {
      response: {
        identityToken,
        user
      } = {}
    } = (_await$SignInWithAppl = await SignInWithApple.authorize({
      clientId: 'com.devhd.feedly',
      scopes: 'email name'
    })) !== null && _await$SignInWithAppl !== void 0 ? _await$SignInWithAppl : {};
    await streets.service('auth').finishAppleNativeAuth({
      idToken: identityToken,
      user
    });
  } catch (error) {
    streets.service('auth').finishWithError(error);
  }
}
async function setupNativeEvents() {
  await Promise.all([App.removeAllListeners(), ScreenOrientation.removeAllListeners(), Selection.removeAllListeners(), ShareTarget === null || ShareTarget === void 0 ? void 0 : ShareTarget.removeAllListeners()]);
  await Promise.all([App.addListener('appStateChange', event => {
    const {
      isActive
    } = event;
    if (isActive) {
      streets.service('reader').askRefreshUnreadCountsIfOnline().then(console.warn);
    }
    streets.service('tabsManager').broadcastAppStateChange(isActive);
  }), App.addListener('appUrlOpen', async event => {
    const {
      url
    } = event;
    if (false) {}
    const integrationType = Object.values(IntegrationTypes).find(type => url.startsWith("feedly://oauth/".concat(type)));
    if (integrationType) {
      streets.service('integrations').markAsConnected(integrationType);
      return;
    }
    await streets.service('tabsManager').askOpenStartPage(url);
  }), App.addListener('backButton', () => {
    streets.service('tabsManager').askBack();
  }),
  // eslint-disable-next-line no-unused-vars
  ScreenOrientation.addListener('screenOrientationChange', orientation => {
    streets.service('resize').onResize();
  }), Selection.addListener('highlightSelection', () => {
    streets.service('sharedMenu').onHighlight();
  }), Selection.addListener('muteSelection', () => {
    streets.service('sharedMenu').onMute();
  }), // only available on android
  ShareTarget === null || ShareTarget === void 0 ? void 0 : ShareTarget.addListener('appContentShare', event => {
    const payload = event.extras['android.intent.extra.TEXT'];
    if (!streets.getUserId()) {
      streets.service('toast').showError('Please log in');
      return;
    }
    const url = extractFirstUrl(payload);
    streets.service('tabsManager').askOpenNewPage("saveEntry?".concat(encodeQueryParams({
      fromUrl: true,
      url
    })));
  })]);
}
async function getPreferenceNative(key) {
  let legacy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  const {
    value
  } = await Preferences.get({
    key,
    shared: !legacy
  });
  return value;
}
async function nativeUtils_setPreferenceNative(key, value) {
  return Preferences.set({
    key,
    value
  });
}
async function configureNativePlugins() {
  if (false) {}
  await GoogleAuth.initialize();
}
async function hydrateSettings() {
  let session = await getPreferenceNative(mobileSessionKey);
  if (false) {}
  await setUserSetting(mobileSessionKey, session, false);
}
;// CONCATENATED MODULE: ./src/content/app/lib/settingsUtils.js

const SETTINGS = {};
function settingsUtils_clearUserSetting(key) {
  return settingsUtils_setUserSetting(key, null);
}
function settingsUtils_getSetting(name) {
  var _SETTINGS$name;
  return (_SETTINGS$name = SETTINGS[name]) !== null && _SETTINGS$name !== void 0 ? _SETTINGS$name : null;
}
async function settingsUtils_setUserSetting(key, value) {
  let sync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  SETTINGS[key] = value;
  if (sync) {
    try {
      await setPreferenceNative(key, value);
    } catch (error) {
      console.log('[LWRITE] failed because ' + error.name + ' -- ' + error.message);
    }
  }
}
;// CONCATENATED MODULE: ./src/content/app/mobile/sessionUtils-mobile.js



class SessionUtilsMobile {
  constructor() {
    // EK. We need to use session caching because the update of
    // the session is asynchronous. This is a write through cache.
    _defineProperty(this, "isCached", false);
    _defineProperty(this, "cachedSession", null);
  }
  load() {
    if (!this.isCached) {
      const session = getSetting(mobileSessionKey);
      if (session != null) {
        try {
          this.cachedSession = JSON.parse(session);
        } catch (error) {
          console.error('[io][session] failed to parse session:' + session);
          this.cachedSession = null;
        }
      } else {
        this.cachedSession = null;
      }
      this.isCached = true;
    }
    if (this.cachedSession && !this.cachedSession.plan && this.cachedSession.feedlyPlan) {
      // In some old sessions, the plan was saved as feedlyPlan instead
      // of plan. Auto-correct that.
      this.cachedSession.plan = this.cachedSession.feedlyPlan;
      delete this.cachedSession.feedlyPlan;
      this.save(this.cachedSession);
    }
    return Object.freeze(this.cachedSession);
  }
  save(session) {
    try {
      if (!session) {
        this.clear();
      } else {
        // In some old sessions, the plan was saved as feedlyPlan instead
        // of plan
        if (!session.plan && session.feedlyPlan) {
          // eslint-disable-next-line no-param-reassign
          session.plan = session.feedlyPlan;
          // eslint-disable-next-line no-param-reassign
          delete session.feedlyPlan;
        }
        this.cachedSession = session;
        this.isCached = true;
        setUserSetting(mobileSessionKey, JSON.stringify(session));
      }
    } catch (ignore) {
      console.error('[warning] failed to persist session', ignore);
    }
  }
  clear() {
    this.cachedSession = null;
    this.isCached = false;
    clearUserSetting(mobileSessionKey);
  }
  updateAuthedMarker() {
    // no op
  }
}
;// CONCATENATED MODULE: ./src/content/app/lib/sessionUtils.js


const sessionUtils_SessionUtils =  false ? 0 : new SessionUtilsWeb();
;// CONCATENATED MODULE: ./src/content/app/lib/cloud.js







/**
 Refresh the existing session if it exists. If it does not exist, return null
 */
async function askSession() {
  let forceRenew = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  const session = sessionUtils_SessionUtils.load();
  // NO SESSION
  if (!session) {
    return null;
  }

  // GOOD SESSION
  if (!forceRenew && isSessionValid(session)) {
    // EXPIRING SOON?
    if (
    // Ask for a renewal but no need to wait for it
    session.feedlyExpirationTime - new Date().getTime() < MINUTES(30)) {
      askRenewSession(session, true);
    }
    return session;
  }
  return askRenewSession(session);
}
async function askRenewSession(session) {
  let silently = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!session || !session.feedlyRefreshToken) {
    sessionUtils_SessionUtils.clear();
    return null;
  }
  const request = {
    refresh_token: session.feedlyRefreshToken,
    client_id: 'feedly',
    grant_type: 'refresh_token'
  };
  try {
    const authInfo = await httpPost('!{cloud}/v3/auth/token', encodeParameters(request), {
      authenticated: false,
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    if (!authInfo.expires_in || authInfo.expires_in < 0) {
      authInfo.expires_in = 86400;
    }
    const newSession = {
      ...session,
      feedlyToken: authInfo.access_token,
      feedlyExpirationTime: new Date().getTime() + authInfo.expires_in * 1000 - 10000,
      plan: authInfo.plan || 'standard',
      lastUpdated: new Date().getTime()
    };

    // Update existing session with updated information
    sessionUtils_SessionUtils.save(newSession);
    return newSession;
  } catch (error) {
    if (silently) {
      return null;
    }
    if (error instanceof HttpError && [401, 403, 429].includes(error.errorCode)) {
      sessionUtils_SessionUtils.clear();
      return null;
    }
    console.error('failed to renew session', error);
    throw error;
  }
}
async function askContext() {
  let {
    renewSession = true
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let session = await askSession();
  if (!session) {
    throw new Error('no session');
  }
  const profile = await httpGet('!{cloud}/v3/profile');
  if (!profile) {
    throw new Error('no profile');
  }
  const [enterprise, preferences] = await Promise.all([profile.enterpriseStatus ? httpGet('!{cloud}/v3/enterprise') : Promise.resolve(null), httpGet('!{cloud}/v3/preferences')]);
  if (!preferences) {
    throw new Error('no preferences');
  }

  // Special case: The user session plan does not match the
  // Profile product information. In this case, we should pause
  // and force the renewal of the token
  const planMismatch = session.plan !== profile.plan;
  if (planMismatch) {
    console.warn("session should be updated (session=".concat(session.plan, " profile=").concat(profile.plan, ")"));
    if (renewSession) {
      session = await askRenewSession(session);
      if (!session) {
        throw new Error('no session');
      }
    }
  }
  return {
    enterprise,
    preferences,
    profile: enrichProfile(profile),
    userId: session.feedlyId,
    plan: session.plan
  };
}
function enrichProfile(profile) {
  return {
    ...profile,
    // Now that we are loading feedly over HTTPS, we need the profile pictures to be HTTPS
    picture: profile.picture ? secureURL(profile.picture) : undefined,
    userId: profile.userId || profile.id,
    name: profile.name || profile.fullName
  };
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.6/node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.6/node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.6/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.6/node_modules/@babel/runtime/helpers/esm/defineProperty.js

function defineProperty_defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}

;// CONCATENATED MODULE: ./src/content/app/lib/cpuPriority.js

class CpuPriorityImpl {
  constructor() {
    // ----------------------------------------------------
    // CPU Priority Management                           //
    // On android, we are trying to orchestrate tasks    //
    // like JSON processing, adding entries, to lists,   //
    // marking a lot of articles as read so that they do //
    // not interfere with the scrolling and animations    //
    // ----------------------------------------------------
    defineProperty_defineProperty(this, "_priorityTasks", []);
    defineProperty_defineProperty(this, "_callbacks", []);
    defineProperty_defineProperty(this, "_lastPriorityRequestTime", void 0);
    defineProperty_defineProperty(this, "_performanceDebugging", false);
  }
  debugPriorities() {
    console.log('[streets] UI priorities', this._priorityTasks, this._callbacks, this._lastPriorityRequestTime);
  }
  clearPriorities() {
    this._priorityTasks = [];
    this._lastPriorityRequestTime = undefined;
  }
  requestPriority(taskName) {
    this._priorityTasks.push(taskName);
    this._lastPriorityRequestTime = new Date().getTime();
  }
  extendPriority() {
    this._lastPriorityRequestTime = new Date().getTime();
  }
  releasePriority(taskName) {
    const index = this._priorityTasks.indexOf(taskName);
    if (index > -1) {
      this._priorityTasks.splice(index, 1);
    }
    this._processIdleCallbacks();
  }
  requestIdleCallback(callback, hint) {
    const time1 = performance.now();
    if (this._isUIBusy() || this._callbacks.length > 0) {
      // console.log('got executed right away!');
      this._callbacks.push(callback);
      const time3 = performance.now();
      if (time3 - time1 > 16 && this._performanceDebugging) {
        console.log('callback performed in (0):', time3 - time1, hint || callback);
      }
    } else {
      try {
        // In the mobile environment us requestion animation to
        // break bigger tasks into micro tasks that span across
        // multiple frames.
        if (false) {} else {
          callback();
        }
      } catch (error) {
        console.error('[streets] error during idle callback', error, callback);
      }
    }
  }
  _isUIBusy() {
    // we have seem some edge cases where the UI does not seem to release
    // priorities correctly...because touch event seem to miss or fail.
    // We want to make sure that the request idle callback does not get locked
    // more than a second.
    if (this._priorityTasks.length > 0 && this._lastPriorityRequestTime && new Date().getTime() - this._lastPriorityRequestTime > 5000) {
      // clear all the locks
      console.error('[streets] detected UI locking bug. Triggering automatic clean-up', this._priorityTasks, this._lastPriorityRequestTime, this._callbacks);
      this._priorityTasks = [];
    }
    return this._priorityTasks.length > 0;
  }
  _processIdleCallbacks() {
    if (this._isUIBusy() || this._callbacks.length === 0) {
      return;
    }
    window.requestAnimationFrame(() => {
      if (this._isUIBusy()) {
        return;
      }
      const callback = this._callbacks.shift();
      try {
        callback();
      } catch (error) {
        console.error('[streets] error during idle callback', error, callback);
      }
      this._processIdleCallbacks();
    });
  }
}
const cpuPriority_CpuPriority = new CpuPriorityImpl();
;// CONCATENATED MODULE: ./src/content/app/lib/observable.js

let anonymousId = 0;
class observable_Observable {
  constructor(id) {
    this.observers = [];
    this.id = id || 'pojo-' + anonymousId++;
  }
  registerObserver(obsObj) {
    if (this.observers == null) {
      this.observers = [];
      this.id = 'pojo-' + anonymousId++;
    }
    if (this.observers.indexOf(obsObj) >= 0) {
      return;
    }
    this.observers.push(obsObj);
  }
  unregisterObserver(obsObj) {
    if (this.observers == null) {
      this.observers = [];
      this.id = 'pojo-' + anonymousId++;
    }
    const idx = this.observers.indexOf(obsObj);
    if (idx < 0) {
      return;
    }
    this.observers.splice(idx, 1);
  }
  removeAllObservers() {
    this.observers = [];
  }
  fireWhenIdle(aspect, a1, a2, a3, a4, a5) {
    CpuPriority.requestIdleCallback(() => {
      this.fire(aspect, a1, a2, a3, a4, a5);
    }, aspect);
  }
  fire(aspect, a1, a2, a3, a4, a5) {
    // Are there any observers?
    if (this.observers == null || this.observers.length === 0) {
      return;
    }
    // copy list of observers, so we don't mutate while we loop
    const a = [];
    for (const oI in this.observers) {
      a.push(this.observers[oI]);
    }

    // The observer list may change as it fire notifications. Make sure that
    // we take this into account
    // Iterate through list of observers
    for (let i = 0; i < a.length; i++) {
      // Notify each observer
      const obs = a[i];
      try {
        if (this.observers.indexOf(obs) < 0) {
          // nothing
        } else if (obs[aspect]) {
          // Call this method; here we don't pass aspect
          obs[aspect].call(obs, a1, a2, a3, a4, a5);
        } else if (obs.onEvent != null) {
          // generic aspect: 'onChanged'
          obs.onEvent.call(obs, aspect, a1, a2, a3, a4, a5);
        } else if (typeof obs === 'function') {
          obs.call(obs, aspect, a1, a2, a3, a4, a5);
        }
      } catch (e) {
        console.error('failed to notify observer', obs, e);
      }
    }
    // done
  }
  destroy() {
    this.removeAllObservers();
  }
  debugObservers() {
    if (this.observers == null || this.observers.length == 0) {
      console.log('[observable:' + this.id + '] No observers');
      return;
    }
    this.observers.forEach(o => {
      console.log('[observable:' + this.id + '] observed by:' + o.id + ' -- ' + o.toString());
    });
  }
  toString() {
    return '[observable:' + this.id + '(' + this.observers.length + ' observers)]';
  }
}
;// CONCATENATED MODULE: ./src/content/app/services/mltopicdatasets.js





// --------------------------------------------------------------------------
// ML Topic Modeler service
//
// Encapsulates the /ml-topics-datasets endpoint of the ML Feedly backend.
//
// --------------------------------------------------------------------------

const PREFIX_URL = 'https://ml.feedly.com/ml-topics-datasets';
const BuildProgressOrigins = Object.freeze({
  activeLearning: 'activeLearning',
  evaluation: 'evaluation',
  livePredictions: 'livePredictions',
  noise: 'noise',
  search: 'search'
});
const DatasetEndpoints = Object.freeze({
  activeLearning: 'active-learning',
  communityFeedback: 'feedback',
  customList: 'custom-lists',
  evaluation: 'evaluation',
  livePredictions: 'live-predictions',
  noise: 'noise',
  reviewAll: 'examples',
  reviewPositive: 'examples',
  reviewNegative: 'examples',
  reviewToReview: 'examples',
  stream: 'stream'
});
class MLTopicDatasets extends (/* unused pure expression or super */ null && (Observable)) {
  // --------------------------------------------------------------------------
  // LIFECYLE MANAGEMENT
  // --------------------------------------------------------------------------
  load() {
    this.net = streets.service('net');
    this.reader = streets.service('reader');
    this.cache = {
      datasetInfos: {},
      datasetMetrics: {},
      lastDatasetId: undefined
    };
  }
  unload() {
    this.cache = {
      datasetInfos: {},
      datasetMetrics: {},
      lastDatasetId: undefined
    };
  }

  // --------------------------------------------------------------------------
  // CACHE MANAGEMENT
  // --------------------------------------------------------------------------
  async askRefresh() {
    this.cache = {
      datasetInfos: {},
      datasetMetrics: {},
      lastDatasetId: undefined
    };
  }

  // --------------------------------------------------------------------------
  // PUBLIC INTERFACE
  //
  // Pattern: Functions which return a Promise should start with 'ask'.
  //
  // --------------------------------------------------------------------------

  async askBuildProgress(_ref) {
    let {
      topicDatasetId
    } = _ref;
    return this.net.GET("".concat(PREFIX_URL, "/datasets/").concat(topicDatasetId, "/progress"), {
      authenticated: true
    }).then(JSON.parse);
  }

  /**
  Creates new topic dataset
  @param {Object} datasetInfo
    @param {Number} datasetInfo.name
    @param {Array.String} datasetInfo.resourceIds
  @return {Promise}
  */
  async askCreateTopicDataset(datasetInfo) {
    if (!datasetInfo) {
      throw new Error('The datasetInfo is required');
    }
    const topicDatasetInfo = await this.net.POST("".concat(PREFIX_URL, "/datasets"), datasetInfo, {
      authenticated: true
    });
    this.fire('onMLTopicDatasetsChanged');
    return JSON.parse(topicDatasetInfo);
  }

  /**
  Sets the curation state for a given entry for a given dataset
  */
  async askCurateEntry(options) {
    const {
      activeTab,
      curationLabel,
      entryId,
      topicDatasetId
    } = options;
    await this.net.POST("".concat(PREFIX_URL, "/datasets/").concat(topicDatasetId, "/examples"), [{
      entryId,
      label: curationLabel,
      origin: BuildProgressOrigins[activeTab]
    }], {
      authenticated: true
    });
    this.cache.lastDatasetId = topicDatasetId;
    this.fire('onMLTopicDatasetsChanged', topicDatasetId);
    this.fire('onEntryDatasetsChanged', options);
  }

  /**
  Fetches special entry lists for curation
  */
  async askCustomLists(_ref2) {
    let {
      topicDatasetId
    } = _ref2;
    const response = await this.net.GET("".concat(PREFIX_URL, "/datasets/").concat(topicDatasetId, "/custom-lists"), {
      authenticated: true
    });
    return JSON.parse(response);
  }
  async deleteCustomList(_ref3) {
    let {
      collectionName,
      topicDatasetId
    } = _ref3;
    await this.net.DEL("".concat(PREFIX_URL, "/datasets/").concat(topicDatasetId, "/custom-lists/").concat(collectionName), {
      authenticated: true
    });
  }

  /**
  Fetches dataset info for a particular topic dataset
  */
  async askDatasetInfo(_ref4) {
    let {
      topicDatasetId
    } = _ref4;
    let refresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (!refresh && this.cache.datasetInfos[topicDatasetId]) {
      return this.cache.datasetInfos[topicDatasetId];
    }
    const datasetInfo = await this.net.GET("".concat(PREFIX_URL, "/datasets/").concat(topicDatasetId), {
      authenticated: true
    });
    this.cache.datasetInfos[topicDatasetId] = JSON.parse(datasetInfo);
    return this.cache.datasetInfos[topicDatasetId];
  }

  /**
   Fetches all dataset ids for a given entry
   */
  async askEntryDatasetIds(entryId) {
    const response = await this.net.GET("".concat(PREFIX_URL, "/examples?entryId=").concat(encodeURIComponent(entryId)), {
      authenticated: true
    });
    return JSON.parse(response);
  }
  async askListDatasetEntries() {
    let {
      activeTab,
      customListId,
      streamId,
      continuation,
      unlabeledOnly,
      topicDatasetId
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let suffix = DatasetEndpoints[activeTab];
    if (activeTab === BuildTabOptions.customList) {
      suffix += "/".concat(customListId);
    }
    const params = encodeQueryParams({
      continuation,
      // label only used for Review tab
      label: ReviewTabLabels[activeTab],
      unlabeledOnly,
      streamId,
      count: activeTab === BuildTabOptions.activeLearning ? null : 40
    });
    return this.net.GET("".concat(PREFIX_URL, "/datasets/").concat(topicDatasetId, "/").concat(suffix, "?").concat(params), {
      authenticated: true
    }).then(JSON.parse);
  }

  /**
  Fetches curation states for a given list of entries for a given dataset
  */
  async askListEntryCurationStates(_ref5) {
    let {
      topicDatasetId,
      entryIds
    } = _ref5;
    const response = await this.net.GET("".concat(PREFIX_URL, "/datasets/").concat(topicDatasetId, "/examples?entryIds=").concat(encodeURIComponent(entryIds.join())), {
      authenticated: true
    });
    return JSON.parse(response);
  }

  /**
  Fetches all topic datasets
  */
  async askListTopicDatasets() {
    let withStats = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    if (this.cache.datasetsCachedWithStats || this.cache.datasets && !withStats) {
      return this.cache.datasets;
    }
    const datasets = await this.net.GET("".concat(PREFIX_URL, "/datasets?withStats=").concat(withStats), {
      authenticated: true
    });
    this.cache.datasets = JSON.parse(datasets);
    this.cache.datasetsCachedWithStats = withStats;
    return this.cache.datasets;
  }

  /**
   Add an entry to a resource dataset
   @param {Object} annotationInfo
     @param {String} annotationInfo.resourceId
     @param {String} annotationInfo.resourceLabel
     @param {String} annotationInfo.entryId
     @param {String} annotationInfo.label
   @return {Promise}
   */
  async askAddEntryToResourceDataset(annotationInfo) {
    await this.net.POST("".concat(PREFIX_URL, "/datasets/resource/example"), annotationInfo, {
      authenticated: true
    });
  }
  async askSearchDataset(datasetId, alertsQuery, lastContinuation) {
    const url = "".concat(PREFIX_URL, "/datasets/").concat(datasetId, "/search?count=40").concat(lastContinuation ? "&continuation=".concat(lastContinuation) : '');
    const {
      continuation,
      items
    } = await this.net.POST(url, {
      alertsQuery
    }).then(JSON.parse);
    const entries = await this.reader.askLookupEntries(items.map(_ref6 => {
      let {
        entryId
      } = _ref6;
      return entryId;
    }));
    let highlightableKeywords = getHighlightableKeywords(alertsQuery === null || alertsQuery === void 0 ? void 0 : alertsQuery.layers);

    // Special case for entries opened from the topic modeler (for now)
    // Add user-inputted keywords as highlightable terms
    const curationKeywords = this.getCachedCurationKeywords({
      topicDatasetId: datasetId
    });
    if (curationKeywords !== null && curationKeywords !== void 0 && curationKeywords.length) {
      highlightableKeywords = {
        ...highlightableKeywords,
        ...curationKeywords.reduce((acc, keyword) => {
          acc[keyword] = {
            highlight: true
          };
          return acc;
        }, {})
      };
    }
    const feed = await this.reader.askParseJSONFeed({
      items: entries,
      continuation
    }, {
      highlightableKeywords
    });
    return {
      ...feed,
      curationStates: items
    };
  }

  /**
  Fetches key metrics for a dataset
  */
  async askUnderTheHoodData(datasetId) {
    if (this.cache.datasetMetrics[datasetId]) {
      return this.cache.datasetMetrics[datasetId];
    }
    const datasetMetrics = await this.net.GET("".concat(PREFIX_URL, "/datasets/").concat(datasetId, "/under-the-hood"), {
      authenticated: true
    }).then(JSON.parse);
    this.cache.datasetMetrics[datasetId] = datasetMetrics;
    return this.cache.datasetMetrics[datasetId];
  }
  async askUpdateDatasetInfo(_ref7) {
    let {
      topicDatasetId,
      datasetInfo
    } = _ref7;
    const topicDatasetInfo = await this.net.PUT("".concat(PREFIX_URL, "/datasets/").concat(topicDatasetId), datasetInfo, {
      authenticated: true
    });
    this.fire('onMLTopicDatasetsChanged', topicDatasetId);
    return JSON.parse(topicDatasetInfo);
  }

  /**
   Fetches datasetId corresponding to a wikidata topic
   */
  async askWikidataDatasetId(_ref8) {
    let {
      wikidataTopicId
    } = _ref8;
    try {
      const data = await this.net.GET("".concat(PREFIX_URL, "/datasets/wikidata/").concat(wikidataTopicId), {
        authenticated: true
      });
      return {
        datasetId: JSON.parse(data).datasetId.toString()
      };
    } catch (error) {
      if (error.errorType === 'NotFound') {
        return {
          datasetId: undefined
        };
      }
      throw error;
    }
  }

  /**
   Fetches monthly feedback history for a given topic
   */
  async askFeedbackDetailedSummary(datasetId) {
    const response = await this.net.GET("".concat(PREFIX_URL, "/feedbacks/detailed_summary"), {
      authenticated: true
    });
    const responseJson = JSON.parse(response);
    return responseJson.find(detailedSummary => detailedSummary.datasetId === datasetId);
  }
  async askGenerateMiBlueprint(seed) {
    const response = await this.net.POST('https://ml.feedly.com/api/mi-blueprints', seed).then(JSON.parse);
    return response;
  }

  /** Grabs cached positive keywords inputted by the user */
  getCachedCurationKeywords(_ref9) {
    var _datasetInfo$curation, _datasetInfo$curation2;
    let {
      topicDatasetId
    } = _ref9;
    const datasetInfo = this.cache.datasetInfos[topicDatasetId];
    return (_datasetInfo$curation = datasetInfo === null || datasetInfo === void 0 || (_datasetInfo$curation2 = datasetInfo.curationInfo) === null || _datasetInfo$curation2 === void 0 ? void 0 : _datasetInfo$curation2.positiveKeywords) !== null && _datasetInfo$curation !== void 0 ? _datasetInfo$curation : [];
  }
  getLastDatasetId() {
    return this.cache.lastDatasetId;
  }
}

// eslint-disable-next-line func-names
/* harmony default export */ function mltopicdatasets(streetId) {
  return new MLTopicDatasets(streetId);
}
;// CONCATENATED MODULE: ./src/content/app/lib/ioUtils.js



const maxRetry = 2;
const RETRIES = [10000, 30000, 90000, 270000];

/**
 * @return {string}
 */
async function executeRequest(input) {
  let retry = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  const {
    method,
    url,
    body,
    headers = {}
  } = input;
  if (!url) {
    throw new Error('url not specified');
  }
  const options = {
    method,
    body,
    headers,
    signal: AbortSignal.timeout(90000)
  };
  if (url.startsWith(PREFIX_URL) ||  false && 0) {
    options.credentials = 'include';
  }
  const isAuthTokenRefresh = url.indexOf('/v3/auth/token') > -1;
  let response;
  try {
    response = await fetch(url, options);
  } catch (error) {
    if (error.name === 'TimeoutError') {
      if (retry < maxRetry) {
        await sleep(RETRIES[retry]);
        return executeRequest(input, retry + 1);
      }
      throw new HttpError({
        errorCode: 0,
        errorMessage: 'network timeout'
      });
    }
    throw error;
  }
  if (response.status === 401 && isAuthTokenRefresh) {
    throw new Error('authentication invalidated');
  }
  if (response.status === 401 && retry < 2) {
    const session = await askSession(true);
    if (session) {
      const updatedHeaders = {
        ...headers,
        Authorization: 'Bearer ' + session.feedlyToken
      };
      await sleep(RETRIES[retry]);
      return executeRequest({
        method,
        url,
        body,
        headers: updatedHeaders
      }, retry + 1);
    }
  }
  if (response.status === 0 || response.status === 408 || response.status === 504) {
    throw new HttpError({
      errorCode: 0,
      errorMessage: 'request timed out'
    });
  }
  if (response.status < 400) {
    return response.text();
  }
  if (response.status === 409) {
    console.error('[io] 409 error for ' + method + ' ' + url);
  }
  const responseText = await response.text();
  let errorInfo;
  try {
    // If the body of the response is JSON parsable, we might get better
    // information from there.
    errorInfo = {
      errorCode: response.status,
      ...JSON.parse(responseText)
    };
  } catch (ignored) {
    // we tried our best
    errorInfo = {
      errorCode: response.status,
      errorMessage: responseText
    };
  }
  throw new HttpError(errorInfo);
}
function sleep(duration) {
  return new Promise(resolve => {
    setTimeout(resolve, duration);
  });
}
;// CONCATENATED MODULE: ./src/content/app/lib/stringUtils.js



/**
 * Decapitalize first letter of string and leave the remainder unchanged.
 * @param {String} word or phrase to be decapitalized
 * @return {String} decapitalized word or phrase
 */
function decapitalize(str) {
  if (typeof str !== 'string') {
    throw new Error('Expected type "string" for decapitalize util function');
  }
  return str[0].toLowerCase() + str.slice(1);
}

/**
 * Capitalize first letter of every words
 * @param {String} phrase to be capitalized
 * @return {String} capitalized phrase
 */
function capitalizePhrase(str) {
  if (typeof str !== 'string') {
    throw new Error('Expected type "string" for capitalizePhrase util function');
  }
  return str.split(' ').map(word => capitalizeFirstLetter(word)).join(' ');
}
function replaceTagsWithSpace(aString) {
  if (!aString) {
    return '';
  }
  return aString.replace(RE_STRIP, ' ');
}

/**
 * Extract string between the begining and the delimiter(s)
 * @param {String} string
 * @param {String|Regex} delimiter A string containing a collection of
 *   characters or a regular expression used to split the string with.
 *   Everything before this delimiter will be included in the returned string.
 * @return {String} return extracted string
 */
function extractBeforeDelimiter(string, delimiter) {
  // If the string is null, undefined or empty we return that string
  // Also if the delimiter is null, undefined or empty we return that string
  if (!string || !delimiter) {
    return string;
  }
  const regex = typeof delimiter === 'string' ? new RegExp("[".concat(delimiter, "]")) : delimiter;
  return string.split(regex)[0];
}
function removeSpaces(string) {
  return string.replace(/\s/g, '');
}
function substitute(initialString, listOfReplacments) {
  if (initialString == null) {
    return null;
  }
  let resultingString = initialString;
  Object.keys(listOfReplacments).forEach(searchTerm => {
    if (initialString.includes(searchTerm)) {
      resultingString = resultingString.replace(searchTerm, listOfReplacments[searchTerm]);
    }
  });
  return resultingString;
}
const getPixelValue = value => "".concat(value, "px");
;// CONCATENATED MODULE: ./src/content/app/lib/httpUtils.js



const CLIENT_ID = 'feedly';
async function httpUtils_httpGet(url, headers) {
  const response = await sendRequest({
    method: 'GET',
    url,
    headers
  });
  return JSON.parse(response);
}
async function httpPost(url, body, headers) {
  const response = await sendRequest({
    method: 'POST',
    url,
    body,
    headers
  });
  return JSON.parse(response);
}
function substituteUrl(url) {
  return substitute(url, {
    '!{google}': 'https://www.google.com',
    '!{google.search}': 'https://encrypted.google.com',
    '!{cloud}': globalThis.BACKEND,
    '!{cloud-ml}': 'https://cloud-ml.feedly.com'
  });
}
async function enrichRequestParameters(_ref) {
  let {
    url: rawUrl,
    body: rawBody,
    headers: rawHeaders
  } = _ref;
  let url = rawUrl;
  let body = rawBody;
  let headers = rawHeaders;

  // Enrich feedly URLs with ck, ct and cv
  //
  const isFeedlyUrl = url.startsWith('!{cloud}') || url.startsWith('!{cloud-ml}');
  if (isFeedlyUrl) {
    // This is a feedly URL
    //
    const sep = url.indexOf('?') === -1 ? '?' : '&';
    if (url.indexOf('&ct=') === -1) {
      url += "".concat(sep, "ck=").concat(new Date().getTime(), "&ct=").concat("feedly.mini.ext.chrome", "&cv=").concat("31.0.DEV");
    }
  }

  // Substitute URLS
  url = substituteUrl(url);

  // Special case for when we are running in the Chrome extension
  if (url.indexOf('//') === 0) {
    url = 'https:' + url;
  }
  if (!headers) {
    headers = {};
  }
  const requiresSecrets = !!headers['$Authorization.secrets'];
  if (requiresSecrets) {
    if (false) {} else {
      throw new Error('no secret available');
    }
    delete headers['$Authorization.secrets'];
  }
  if (headers.authenticated !== false) {
    const session = await askSession();
    const forceAttachFeedlyToken = headers.authenticated === true;
    const isLoggedIn = session && session.feedlyToken;
    if (forceAttachFeedlyToken && !isLoggedIn) {
      throw new Error('Bug: authenticated request with no session');
    }
    if (forceAttachFeedlyToken || isFeedlyUrl && isLoggedIn) {
      headers.Authorization = 'Bearer ' + session.feedlyToken;
    }
  }
  delete headers.authenticated;

  // If no content type is set, assume that the content type is
  // application/json.
  if (!headers['Content-Type'] && !(body instanceof FormData)) {
    headers['Content-Type'] = 'application/json';
  }

  // If the body is passed as a JSON structure, convert
  // it into a string.
  if (typeof body !== 'string' && headers['Content-Type'] === 'application/json') {
    body = JSON.stringify(body);
  }
  return {
    url,
    body,
    headers
  };
}
async function sendRequest(_ref2) {
  let {
    method,
    url: rawUrl,
    body: rawBody,
    headers: rawHeaders
  } = _ref2;
  const {
    url,
    body,
    headers
  } = await enrichRequestParameters({
    url: rawUrl,
    body: rawBody,
    headers: rawHeaders
  });
  return executeRequest({
    method,
    url,
    body,
    headers
  });
}
;// CONCATENATED MODULE: ./src/content/app/lib/oAuthStorage.js
class LocalStorageAdapter {
  async getItem(key) {
    return window.localStorage.getItem(key);
  }
  async setItem(key, value) {
    window.localStorage.setItem(key, value);
  }
  async removeItem(key) {
    window.localStorage.removeItem(key);
  }
}
class ChromeLocalStorageAdapter {
  async getItem(key) {
    const values = await chrome.storage.local.get(key);
    return values[key];
  }
  async setItem(key, value) {
    return chrome.storage.local.set({
      [key]: value
    });
  }
  async removeItem(key) {
    return chrome.storage.local.remove(key);
  }
}
const oAuthStorage_LocalStorage =  true ? new ChromeLocalStorageAdapter() : 0;
;// CONCATENATED MODULE: ./src/content/app/lib/oAuthUtils.js






/**
 * To store the OAuth client's data between websites due to redirection.
 */
const LOCALSTORAGE_STATE = 'feedly.oauth2';

/**
 * The maximum length for a code verifier for the best security we can offer.
 * Please note the NOTE section of RFC 7636 § 4.1 - the length must be >= 43,
 * but <= 128, **after** base64 url encoding. This means 32 code verifier bytes
 * encoded will be 43 bytes, or 96 bytes encoded will be 128 bytes. So 96 bytes
 * is the highest valid value that can be used.
 */
const RECOMMENDED_CODE_VERIFIER_LENGTH = 96;

/**
 * A sensible length for the state's length, for anti-csrf.
 */
const RECOMMENDED_STATE_LENGTH = 32;

/**
 * Start Login or Signup authentication with chosen provider.
 *
 * @param {String?} provider provider
 * @param {String} mode login or signup
 * @param {String} loginHint start the login with this email
 * @param {String} pageRef reference to know from what page this came from
 * @param {Object} appState state to maintain during the OAuth flow
 * @param {String} enterprise enteprise id for SSO flow
 * @param {String} useCase MarketIntelligence | ThreatIntelligence
 */
async function startOAuth(provider, mode) {
  let {
    appState,
    loginHint,
    pageRef,
    enterprise,
    useCase,
    work
  } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (!pageRef) {
    const pageInfo = streets.service('pageManager').getPageInfo();
    if (pageInfo) {
      // eslint-disable-next-line no-param-reassign
      pageRef = pageInfo.uri;
    }
  }
  const partnerId = await LocalStorage.getItem('feedly.partner');
  const additionalQueryParams = {
    provider,
    mode,
    landingPage: window.feedlyLandingPage,
    loginHint,
    pageRef,
    partnerId,
    enterprise,
    useCase,
    work
  };

  // load the login page inline (this will make users who use password
  // managers happy)
  window.location = await prepareOAuthUrl("".concat(window.AUTH_BACKEND, "/v3/auth/").concat(provider === 'enterprise' ? 'enterprise' : 'auth'), 'feedly', "".concat(getCurrentOrigin(), "/login"), {
    appState,
    additionalQueryParams
  });
}
async function prepareOAuthUrl(authorizationUrl, clientId, redirectUri) {
  let {
    appState = {},
    additionalQueryParams = {}
  } = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  const {
    codeChallenge,
    codeVerifier
  } = await generatePKCECodes();
  const randomState = generateRandomState(RECOMMENDED_STATE_LENGTH);
  await oAuthStorage_LocalStorage.setItem("".concat(LOCALSTORAGE_STATE, ".").concat(randomState), JSON.stringify({
    codeChallenge,
    codeVerifier,
    appState
  }));
  const scopes = ['https://cloud.feedly.com/subscriptions'];
  const encodedParameters = urlUtils_encodeQueryParams(additionalQueryParams);
  return authorizationUrl + "?response_type=code" + "&client_id=".concat(encodeURIComponent(clientId)) + "&redirect_uri=".concat(encodeURIComponent(redirectUri)) + "&scope=".concat(encodeURIComponent(scopes.join(' '))) + "&state=".concat(randomState) + "&code_challenge=".concat(encodeURIComponent(codeChallenge)) + "&code_challenge_method=S256" + "&ck=".concat(new Date().getTime()) + "&ct=".concat("feedly.mini.ext.chrome") + "&cv=".concat("31.0.DEV") + (encodedParameters ? "&".concat(encodedParameters) : '');
}

/**
 * Exchange an OAuth code for access and refresh
 */
async function exchangeAuthCodeForTokens(code, state, redirectUri) {
  if (!code) {
    throw new Error('Authentication Code Missing');
  }
  const {
    codeVerifier,
    appState
  } = await popOAuthAppState(state);
  const request = {
    code,
    client_id: 'feedly',
    code_verifier: codeVerifier,
    redirect_uri: redirectUri,
    grant_type: 'authorization_code'
  };
  try {
    const tokenResponse = await httpPost('!{cloud}/v3/auth/token', encodeParameters(request), {
      authenticated: false,
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const session = {
      plan: tokenResponse.plan,
      provider: tokenResponse.provider,
      feedlyId: tokenResponse.id,
      feedlyToken: tokenResponse.access_token,
      feedlyRefreshToken: tokenResponse.refresh_token,
      feedlyExpirationTime: new Date().getTime() + tokenResponse.expires_in * 1000 - 10000,
      created: new Date().getTime()
    };
    return {
      session,
      appState,
      isNewAccount: tokenResponse.is_new_account
    };
  } catch (error) {
    console.error('Failed to get session:', error);
    throw new Error('Failed to get session:' + error.message);
  }
}
async function askLogin() {
  try {
    await startOAuth(null, 'login');
  } catch (error) {
    console.error('FAILED TO ASK LOGIN:' + error.name + ' -- ' + error.message);
  }
}
async function askSignupGoogle(options) {
  try {
    await startOAuth('Google', 'signup', options);
  } catch (error) {
    console.error('FAILED TO ASK LOGIN:' + error.name + ' -- ' + error.message);
  }
}
async function askSignupEnterprise() {
  try {
    await startOAuth('enterprise', 'signup');
  } catch (error) {
    console.error('FAILED TO ASK LOGIN:' + error.name + ' -- ' + error.message);
  }
}
async function askSignup() {
  try {
    await startOAuth(null, 'signup');
  } catch (error) {
    console.error('FAILED TO ASK SIGNUP:' + error.name + ' -- ' + error.message);
  }
}
async function askSignupFeedlyLogin(options) {
  try {
    await startOAuth('FeedlyLogin', 'signup', options);
  } catch (error) {
    console.error('FAILED TO ASK SIGNUP:' + error.name + ' -- ' + error.message);
  }
}

/**
 * Implements *base64url-encode* (RFC 4648 § 5) without padding, which is NOT
 * the same as regular base64 encoding.
 */
function oAuthUtils_base64urlEncode(value) {
  let base64 = btoa(value);
  base64 = base64.replace(/\+/g, '-');
  base64 = base64.replace(/\//g, '_');
  base64 = base64.replace(/=/g, '');
  return base64;
}

/**
 * Generates a code_verifier and code_challenge, as specified in rfc7636.
 */
async function generatePKCECodes() {
  const codeVerifier = oAuthUtils_base64urlEncode(generateRandomState(RECOMMENDED_CODE_VERIFIER_LENGTH));
  const buffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(codeVerifier));
  const hash = new Uint8Array(buffer);
  let binary = '';
  const hashLength = hash.byteLength;
  for (let i = 0; i < hashLength; i++) {
    binary += String.fromCharCode(hash[i]);
  }
  const codeChallenge = oAuthUtils_base64urlEncode(binary);
  return {
    codeVerifier,
    codeChallenge
  };
}
async function popOAuthAppState(state) {
  const savedStateStorageKey = "".concat(LOCALSTORAGE_STATE, ".").concat(state);
  const savedState = await oAuthStorage_LocalStorage.getItem(savedStateStorageKey);
  if (jsUtils_isNullish(savedState)) {
    throw new Error('Invalid OAuth state, possible malicious activity somewhere');
  }
  await oAuthStorage_LocalStorage.removeItem(savedStateStorageKey);
  return JSON.parse(savedState);
}
;// CONCATENATED MODULE: ./src/content/app/extensions/mini/service-worker.js



setBackend('https://api.feedly.com', 'https://feedly.com');
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // The callback for runtime.onMessage must return falsy if we're not sending a response
  if (message.type === 'login') {
    (async () => {
      const redirectURL = chrome.identity.getRedirectURL();
      const oauthURL = await prepareOAuthUrl('https://api.feedly.com/v3/auth/auth', 'feedly', redirectURL, {
        additionalQueryParams: {
          feedlyLoginActive: true
        }
      });
      const responseUrl = await chrome.identity.launchWebAuthFlow({
        url: oauthURL,
        interactive: true
      });
      const queryParams = parseURLParameters(responseUrl);
      const code = extractAuthorizationCodeFromUrl(responseUrl);
      const {
        session
      } = await exchangeAuthCodeForTokens(code, queryParams.state, redirectURL);
      await chrome.storage.local.set({
        session: JSON.stringify(session)
      });
    })();
  }
});
})();

/******/ })()
;