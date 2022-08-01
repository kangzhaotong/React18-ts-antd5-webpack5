/*
 * @Author: M78.Kangzhaotong
 * @Date: 2022-07-27 15:01:47
 * @Last Modified by: M78.Kangzhaotong
 * @Last Modified time: 2022-07-27 16:34:15
 */
import React from 'react'
import * as reactIs from 'react-is'

type ChildT = React.LazyExoticComponent<() => JSX.Element> | React.FC<any>
export const WrapRouters = (Child: ChildT, cutonFallBack?: any) => {
  if (reactIs.isElement(Child)) {
    return Child
  }
  // 判断是否是函数组件或者class组件
  if (reactIs.isValidElementType(Child)) {
    return <Child />
  }
  // 判断是否为lazy组件
  return (
    <React.Suspense fallback={cutonFallBack || <>...</>}>
      <Child />
    </React.Suspense>
  )
}
