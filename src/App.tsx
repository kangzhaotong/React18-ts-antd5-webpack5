/*
 * @Author: M78.Kangzhaotong
 * @Date: 2022-07-25 17:01:51
 * @Last Modified by: M78.Kangzhaotong
 * @Last Modified time: 2022-12-26 13:07:46
 */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './layout/index'
import { DefaultRoute } from './routers'
import './index.less'

interface Props {
  children: React.ReactNode
}
const App: React.FC<Props> = () => {
  return (
    <div>
      <DefaultRoute />
    </div>
  )
}
export default App
