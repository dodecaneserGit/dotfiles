# Setup fzf
# ---------
if [[ ! "$PATH" == */home/dodecaneser/.fzf/bin* ]]; then
  export PATH="${PATH:+${PATH}:}/home/dodecaneser/.fzf/bin"
fi

# Auto-completion
# ---------------
[[ $- == *i* ]] && source "/home/dodecaneser/.fzf/shell/completion.zsh" 2> /dev/null

# Key bindings
# ------------
source "/home/dodecaneser/.fzf/shell/key-bindings.zsh"
