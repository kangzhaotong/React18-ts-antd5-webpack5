/*
 * @Author: M78.Kangzhaotong
 * @Date: 2022-07-27 15:01:47
 * @Last Modified by: M78.Kangzhaotong
 * @Last Modified time: 2023-02-23 11:08:31
 */
import React from 'react'
import * as reactIs from 'react-is'

type ChildT = React.LazyExoticComponent<() => JSX.Element> | React.FC
export const WrapRouters = (Child: ChildT, cutonFallBack?: any) => {
  // 判断jsx
  if (reactIs.isElement(Child)) {
    return Child
  }
  // 判断是否为clas和function组件
  if (reactIs.isValidElementType(Child)) {
    return <Child />
  }
  // 判断是否为lazy组件
  return (
    // <React.Suspense fallback={cutonFallBack || <div>loadding</div>}>
    <Child />
    // </React.Suspense>
  )
}
