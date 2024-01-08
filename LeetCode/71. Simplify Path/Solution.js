/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let dirs = path.split("/");
  let stack = [];

  dirs.forEach((dir) => {
    if (!isEmpty(dir) && dir != ".") {
      if (dir === "..") stack.pop();
      else stack.push(dir);
    }
  });

  return "/" + stack.join("/");
};

function isEmpty(value) {
  return (
    value == null || (typeof value === "string" && value.trim().length === 0)
  );
}
