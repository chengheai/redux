let state = {
  count: 0
};
let listeners = [];

// 订阅
function subscribe(listener) {
  listeners.push(listener);
}

function changeCount(count) {
  state.count = count;
  // 通知订阅者
  for (let i = 0; i < listeners.length; i++) {
    const listener = listeners[i];
    listener();
  }
}
