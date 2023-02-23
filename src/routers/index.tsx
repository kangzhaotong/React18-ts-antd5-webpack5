/*
 * @Author: M78.Kangzhaotong
 * @Date: 2022-07-25 17:05:11
 * @Last Modified by: M78.Kangzhaotong
 * @Last Modified time: 2023-02-23 11:15:14
 */
import React, { Suspense } from 'react'
import { Routes, Route, useRoutes } from 'react-router-dom'
import { WrapRouters } from './wrapRouters'
import { RoutesTypes } from '../types'
import { Home, PageTwo, Layout, ThreeDome } from './pagesPath'

export const routerList: RoutesTypes[] = [
  {
    path: '/',
    element: WrapRouters(Layout),
    children: [
      {
        path: 'home',
        element: WrapRouters(Home),
        children: [],
      },
      {
        path: 'details',
        element: WrapRouters(PageTwo),
        // (
        //   <Suspense fallback={<div>loading...</div>}>
        //     <PageTwo />
        //   </Suspense>
        // ),
        children: [],
      },
      {
        path: 'threeDome',
        element: WrapRouters(ThreeDome),
        // (
        //   <Suspense fallback={<div>loading...</div>}>
        //     <ThreeDome />
        //   </Suspense>
        // ),
        children: [],
      },
    ],
  },
  {
    path: '/404',
    element: WrapRouters(PageTwo),
  },
]

export const DefaultRoute = () => useRoutes([...routerList])
