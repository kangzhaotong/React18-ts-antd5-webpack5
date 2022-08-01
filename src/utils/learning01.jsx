function currFunc() {
  // eslint-disable-next-line prefer-rest-params
  const newArgs = [...arguments]
  // console.log(newArgs, [...arguments], '11111');
  function innerFun() {
    // console.log(newArgs, [...arguments], '2222222');
    // eslint-disable-next-line prefer-rest-params
    newArgs.push(...arguments)
    // console.log(newArgs, '33333333');
    return innerFun
  }
  innerFun.valueOf = () => newArgs.reduce((a, b) => a + b)
  return innerFun
}
console.log(currFunc(4)(5, 6)(3)(8, 9).valueOf())
const PENDDING = 'PENDDING'
const REJECTED = 'REJECTED'
const FULFILLED = 'FULFILLED'
class Promise {
  constructor(executer) {
    // debugger
    this.state = PENDDING
    this.val = undefined
    this.reason = undefined
    const resolve = (value) => {
      if (this.state === PENDDING) {
        this.state = FULFILLED
        this.val = value
      }
    }
    const reject = (reason) => {
      if (this.state === PENDDING) {
        this.state = REJECTED
        this.reason = reason
      }
    }
    try {
      executer(resolve, reject)
    } catch (e) {
      throw new Error('执行失败')
    }
  }

  then(onFullfilled, onReject) {
    if (this.state === FULFILLED) {
      onFullfilled(this.val)
    }
    if (this.state === REJECTED) {
      onReject(this.reason)
    }
  }
}
const promise = new Promise((resolve, reject) => {
  // 传入一个异步操作
  resolve('成功')
}).then(
  // eslint-disable-next-line promise/always-return
  (data) => {
    console.log('success', data)
  },
  (err) => {
    console.log('faild', err)
  },
)

const LETTERS = /[\da-z]/
const currentToken = ''
const tokens = []
function emit(token) {
  currentToken.type = ''
  currentToken.value = ''
  tokens.push(token)
}
// eslint-disable-next-line consistent-return
function jsxIdentifier(char) {
  console.log(char, 'three')
  if (LETTERS.test(char)) {
    currentToken.vaule += char
    return jsxIdentifier
  }
  if (char === '') {
    emit(currentToken)
  }
}
// eslint-disable-next-line consistent-return
function dealParaentFunc(char) {
  console.log(char, 'first')
  if (LETTERS.test(char)) {
    currentToken.type = 'JSXIdentifier'
    currentToken.vaule += char
    return jsxIdentifier
  }
}
function start(name) {
  console.log(name, 'lllllllllllllllllll')
  if (name === '<') {
    emit({ type: 'leftParaent', value: '<' })
    return dealParaentFunc
  }
  throw new Error('出错')
}

function testFunc(stringCode) {
  // debugger
  /*  */
  let state = start
  for (const item of stringCode) {
    if (state) state = state(item)
    //  start(item)
  }
  return tokens
}
// eslint-disable-next-line quotes
testFunc("<h1 id='asda' class='name'> <span>sadasda</span></h1>")
function animal() {
  console.log('I`m a human')
}

// eslint-disable-next-line new-cap
const child = new animal()
// 防抖
function debounce(func, delay) {
  let timer
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
// 节流
function throttle(func, delay) {
  let timer
  return function (...args) {
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      func.apply(this, args)
      timer = null
    }, delay)
  }
}
// 偏平化
function partial(func, ...args) {
  return function (...rest) {
    return func.apply(this, [...args, ...rest])
  }
}
// 偏函数
function partialRight(func, ...args) {
  return function (...rest) {
    return func.apply(this, [...rest, ...args])
  }
}
// async/await
function asyncFunc(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        resolve(data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
// fetch('https://api.github.com/users/octocat')
//   .then((res) => {
//     return res.json()
//   })
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((err) => {
//     console.log(err)
//   })
// Promise.all([
//   fetch('https://api.github.com/users/octocat'),
//   fetch('https://api.github.com/users/octocat/repos'),
// ]).then((res) => {
//   return Promise.all(res.map((item) => item.json()))
// }).then((data) => {
//   console.log(data)
// }
// ).catch((err) => {
//   console.log(err)
// }
// )
console.log(
  // eslint-disable-next-line no-proto
  child.__proto__.constructor,
  animal.prototype,
  // eslint-disable-next-line no-proto
  animal.prototype.__proto__.constructor === Object,
  // eslint-disable-next-line no-proto
  Object.prototype === animal.prototype.__proto__,
  // eslint-disable-next-line no-proto
  Object.__proto__,
  'ceshiceshi',
)
const a = {}
const b = { name: 1, age: 12 }
const c = { height: 1.9, weghit: 120 }
const d = Object.assign(a, b, c)
console.log(d)
