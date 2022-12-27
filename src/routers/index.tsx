/*
 * @Author: M78.Kangzhaotong
 * @Date: 2022-07-25 17:05:11
 * @Last Modified by: M78.Kangzhaotong
 * @Last Modified time: 2022-12-27 10:09:27
 */
import React, { Suspense } from 'react'
import { WrapRouters } from './wrapRouters'
import { Routes, Route, useRoutes } from 'react-router-dom'
import { RoutesTypes } from '../types'
import { Home, PageTwo, Layout } from './pagesPath'

export const routerList: RoutesTypes[] = [
  {
    path: '/',
    element: WrapRouters(Layout),
    children: [
      {
        path: 'home',
        element: (
          <Suspense fallback={<div>loading...</div>}>
            <Home />
          </Suspense>
        ),
        children: [],
      },
      {
        path: 'details',
        element: (
          <Suspense fallback={<div>loading...</div>}>
            <PageTwo />
          </Suspense>
        ),
        children: [],
      },
    ],
  },
  {
    path: '/404',
    element: (
      <Suspense fallback={<div>loading...</div>}>
        <PageTwo />
      </Suspense>
    ),
  },
]

export const DefaultRoute = () => useRoutes([...routerList])
