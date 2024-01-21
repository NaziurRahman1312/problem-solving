var WordDictionary = function () {
  this.root = {};
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let node = this.root;

  for (let chr of word) {
    if (chr in node) node = node[chr];
    else {
      node[chr] = {};
      node = node[chr];
    }
  }

  node.end = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  return find(this.root, word, 0, word.length);

  function find(node, word, pos, len) {
    if (!node) return false;
    if (pos == len) return node.end === undefined ? false : node.end;

    if (word[pos] === ".") {
      for (let chr in node) {
        if (chr == "end") continue;
        if (find(node[chr], word, pos + 1, len)) return true;
      }

      return false;
    } else {
      if (word[pos] in node) return find(node[word[pos]], word, pos + 1, len);
      else return false;
    }
  }
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
