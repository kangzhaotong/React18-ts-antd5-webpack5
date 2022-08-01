/*
 * @Author: M78.Kangzhaotong
 * @Date: 2022-07-26 09:46:46
 * @Last Modified by: M78.Kangzhaotong
 * @Last Modified time: 2022-07-28 16:19:35
 */
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
// 手写Promise
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
    } catch {
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
  (data) => {
    console.log('success', data)
  },
  (error) => {
    console.log('faild', error)
  },
)
// 分词原理
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
// 原型链
function Animal() {
  console.log('I`m a human')
}

const child = new Animal()
console.log(
  // eslint-disable-next-line no-proto
  child.__proto__,
  Animal.prototype,
  Animal.prototype.constructor,
  Object.prototype,
  // eslint-disable-next-line no-proto
  Object.__proto__,
  'ceshiceshi',
)
const a = {}
const b = { name: 1, age: 12 }
const c = { height: 1.9, weghit: 120 }
const d = Object.assign(a, b, c)
console.log(d)
// LruCache
const LRUFunction = function (maxSize) {
  this.maxSize = maxSize
  this.cache = new Map()
}
LRUFunction.prototype.get = function (key) {
  if (this.cache.has(key)) {
    const value = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key, value)
    return value
  }
  return -1
}
LRUFunction.prototype.set = function (key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key)
  }
  if (this.cache.size > this.maxSize) {
    this.cache.delete(this.cache.keys().next().value)
  }
  this.cache.set(key, value)
}
const cacheFun = new LRUFunction(3)
cacheFun.set('a', 1)
cacheFun.set('b', 2)
cacheFun.set('c', 3)
cacheFun.set('d', 4)
console.log(cacheFun.get('a'))
// 简单实现useState
function myUseState(initState) {
  let state = initState
  const setState = (newState) => {
    console.log(newState, 'newState')
    state = newState
    console.log(state)
  }
  return [state, setState]
}
function meyRender() {
  const [count, setCount] = myUseState(0)
  setCount(2222)
  setTimeout(() => {
    console.log(count, 'aaaaa')
  }, 0)
}
meyRender()
