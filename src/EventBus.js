class EventBus {
  constructor() {
    this.events = {}; // 存储事件
  }
  // 事件订阅
  on (event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  // 取消订阅
  off (event, callback) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(cb => cb !== callback)
  }

  // 发布事件
  emit (event, ...args) {
    if (!this.events[event]) return;
    this.events[event].forEach(callback => callback(...args))
  }

  // 只触发一次
  once (event, callback) {
    const wrapper = (...args) => {
      callback(...args)
      this.off(event, wrapper)
    }
    this.on(event, wrapper)
  }
}