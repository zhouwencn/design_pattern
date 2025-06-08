// 基础类
class ActionService {
  doSomething() {
    console.log("执行主功能：做某件事");
  }
}

// 装饰器：日志功能
class LogDecorator {
  constructor(actionService) {
    this.actionService = actionService;
  }

  doSomething(...args) {
    console.log("日志：用户点击了按钮");
    return this.actionService.doSomething(...args);
  }
}

// 装饰器：权限控制
class PermissionDecorator {
  constructor(actionService, userRole) {
    this.actionService = actionService;
    this.userRole = userRole;
  }

  doSomething(...args) {
    if (this.userRole !== 'admin') {
      console.log("权限不足，无法执行操作");
      return;
    }
    return this.actionService.doSomething(...args);
  }
}