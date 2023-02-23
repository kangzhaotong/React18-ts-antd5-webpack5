// function currFunc() {
//   const newArgs = [...arguments]
//   function midFun() {
//     newArgs.push([...arguments])
//     return midFun
//   }
//   midFun.valueOf = () => newArgs.reduce((a, b) => a + b)
//   return midFun
// }
// console.log(currFunc(4)(5, 6)(3)(8, 9).valueOf())
// const PENDDING = 'PENDDING'
// const REJECTED = 'REJECTED'
// const FULFILLED = 'FULFILLED'
// class Promise {
//   constructor(executer) {
//     // debugger
//     this.state = PENDDING
//     this.val = undefined
//     this.reason = undefined
//     const resolve = (value) => {
//       if (this.state === PENDDING) {
//         this.state = FULFILLED
//         this.val = value
//       }
//     }
//     const reject = (reason) => {
//       if (this.state === PENDDING) {
//         this.state = REJECTED
//         this.reason = reason
//       }
//     }
//     try {
//       executer(resolve, reject)
//     } catch (e) {
//       throw new Error('执行失败')
//     }
//   }

//   then(onFullfilled, onReject) {
//     if (this.state === FULFILLED) {
//       onFullfilled(this.val)
//     }
//     if (this.state === REJECTED) {
//       onReject(this.reason)
//     }
//   }
// }
// const promise = new Promise((resolve, reject) => {
//   // 传入一个异步操作
//   resolve('成功')
// }).then(
//   // eslint-disable-next-line promise/always-return
//   (data) => {
//     console.log('success', data)
//   },
//   (err) => {
//     console.log('faild', err)
//   },
// )

// const LETTERS = /[\da-z]/
// const currentToken = ''
// const tokens = []
// function emit(token) {
//   currentToken.type = ''
//   currentToken.value = ''
//   tokens.push(token)
// }
// // eslint-disable-next-line consistent-return
// function jsxIdentifier(char) {
//   console.log(char, 'three')
//   if (LETTERS.test(char)) {
//     currentToken.vaule += char
//     return jsxIdentifier
//   }
//   if (char === '') {
//     emit(currentToken)
//   }
// }
// // eslint-disable-next-line consistent-return
// function dealParaentFunc(char) {
//   console.log(char, 'first')
//   if (LETTERS.test(char)) {
//     currentToken.type = 'JSXIdentifier'
//     currentToken.vaule += char
//     return jsxIdentifier
//   }
// }
// function start(name) {
//   console.log(name, 'lllllllllllllllllll')
//   if (name === '<') {
//     emit({ type: 'leftParaent', value: '<' })
//     return dealParaentFunc
//   }
//   throw new Error('出错')
// }

// function testFunc(stringCode) {
//   // debugger
//   /*  */
//   let state = start
//   for (const item of stringCode) {
//     if (state) state = state(item)
//     //  start(item)
//   }
//   return tokens
// }
// // eslint-disable-next-line quotes
// testFunc("<h1 id='asda' class='name'> <span>sadasda</span></h1>")

// // 防抖
// function debounce(func, delay) {
//   let timer
//   return function (...args) {
//     if (timer) {
//       clearTimeout(timer)
//     }
//     timer = setTimeout(() => {
//       func.apply(this, args)
//     }, delay)
//   }
// }
// // 节流
// function throttle(func, delay) {
//   let timer
//   return function (...args) {
//     if (timer) {
//       return
//     }
//     timer = setTimeout(() => {
//       func.apply(this, args)
//       timer = null
//     }, delay)
//   }
// }
// // 偏平化
// function partial(func, ...args) {
//   return function (...rest) {
//     return func.apply(this, [...args, ...rest])
//   }
// }
// // 偏函数
// function partialRight(func, ...args) {
//   return function (...rest) {
//     return func.apply(this, [...rest, ...args])
//   }
// }
// // async/await
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
fetch('https://api.github.com/users/octocat')
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })
Promise.all([fetch('https://api.github.com/users/octocat'), fetch('https://api.github.com/users/octocat/repos')])
  .then((res) => {
    return Promise.all(res.map((item) => item.json()))
  })
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })
// 给你一个正整数 num ，请你统计并返回 小于或等于 num 且各位数字之和为 偶数 的正整数的数目。
// 正整数的 各位数字之和 是其所有位上的对应数字相加的结果。
//
// 示例 1：
// 输入：num = 4
// 输出：2
// 解释：
// 只有 2 和 4 满足小于等于 4 且各位数字之和为偶数。

// 示例 2：
// 输入：num = 30
// 输出：14
// 解释：
// 只有 14 个整数满足小于等于 30 且各位数字之和为偶数，分别是：
// 2、4、6、8、11、13、15、17、19、20、22、24、26 和 28 。
// function findNum(num) {
//   const numList = []
//   if (num < 10) {
//     for (let i = 2; i < num; i++) {
//       if (i < num && i % 2 === 0) {
//         numList.push(i)
//       }
//     }
//   } else {
//     for (let i = 2; i < num; i++) {
//       const plus = midArr.reduce((a, b) => a + b)
//       if (plus % 2 === 0) {
//         numList.push(i)
//       }
//     }
//   }
//   console.log(numList, 'numListnumListnumListnumList')
// }
// findNum(12)
