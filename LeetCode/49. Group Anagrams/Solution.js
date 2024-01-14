/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let dict = {};

  for (let i = 0; i < strs.length; i++) {
    let key = strs[i].split("").sort().join("");
    if (dict[key] === undefined) {
      dict[key] = [];
    }
    dict[key].push(strs[i]);
  }

  var result = [];
  for (let key in dict) result.push(dict[key]);

  return result;
};
