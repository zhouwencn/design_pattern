function doSomething (args) {
  console.log("args", args);
    console.log("执行主功能：做某件事");
}

// 日志装饰器
function withLog (fn) {
  return function (...args) { 
    console.log("日志：用户点击了按钮");
    return fn.apply(this, ...args);
  }
}

// 权限装饰器
function withPermission(fn, userRole) {
  return function (...args) {
    if (userRole !== 'admin') {
      console.log("权限不足，无法执行操作");
      return;
    }
    return fn.apply(this, args);
  }
}