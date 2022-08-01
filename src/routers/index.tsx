/*
 * @Author: M78.Kangzhaotong
 * @Date: 2022-07-25 17:05:11
 * @Last Modified by: M78.Kangzhaotong
 * @Last Modified time: 2022-07-27 16:44:45
 */
import React, { Suspense } from 'react'
import { Routes, Route, useRoutes } from 'react-router-dom'

import { Home, PageTwo } from './pagesPath'

export default () => {
  return useRoutes([
    {
      path: '/',
      element: (
        <Suspense fallback={<div>loading...</div>}>
          <Home />
        </Suspense>
      ),
      children: [],
    },
    {
      path: '/details',
      element: (
        <Suspense fallback={<div>loading...</div>}>
          <PageTwo />
        </Suspense>
      ),
      children: [],
    },
  ])
}
