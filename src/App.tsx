/*
 * @Author: M78.Kangzhaotong
 * @Date: 2022-07-25 17:01:51
 * @Last Modified by: M78.Kangzhaotong
 * @Last Modified time: 2023-02-23 11:16:31
 */
import React from 'react'
import { DefaultRoute } from './routers'
import './index.less'

interface Props {
  children: React.ReactNode
}
const App: React.FC<Props> = () => {
  return (
    <DefaultRoute />
    // </React.Suspense>
  )
}
export default App
