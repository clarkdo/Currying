function currying(fn, context) {
  var params = [];
  var argsLength = fn.length;
  if (typeof fn !== 'function') return null;
  return function partial() {
    params = params.concat([].slice.call(arguments));
    return params.length < argsLength ? partial : fn.apply(context, params);
  };
}

exports.currying = currying;
