/*
 * @Author: M78.Kangzhaotong
 * @Date: 2022-07-25 17:01:51
 * @Last Modified by: M78.Kangzhaotong
 * @Last Modified time: 2022-07-27 17:06:00
 */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/index'
import './index.less'

interface Props {
  children: React.ReactNode
}
const App: React.FC<Props> = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
export default App
