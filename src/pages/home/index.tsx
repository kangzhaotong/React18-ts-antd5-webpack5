/*
 * @Author: M78.Kangzhaotong
 * @Date: 2022-12-27 16:21:30
 * @Last Modified by: M78.Kangzhaotong
 * @Last Modified time: 2023-02-23 16:14:24
 */

import React, { useState, useMemo, useCallback, useTransition, useRef, useEffect, useDeferredValue } from 'react'
// import { flushSync } from 'react-dom';
import { Input, Button } from 'antd'
// 整个项目引入一旦躲起来就显得很臃肿
import type { RootState } from '../../store/store'
// redux原生和dva的区别就是dva的方法按照约定式文件是不需要手动导入的
import { increment, decrement, incrementByAmount } from '../../store/counterModel'
import { useAppDispatch, useAppSelector } from '../../hooks'
import useDeboundce from '../../components/useDebounce'
import './index.less'

interface params {
  data: string
  handelClick: () => void
}

const Child: React.FC<params> = ({ data, handelClick }) => {
  console.log('child')
  return <Button onClick={() => handelClick()}>{data}</Button>
}
const UseMemoChild = React.memo<any>(Child)

const Home: React.FC<any> = () => {
  const inputRef = useRef<any>(null)
  const dispatch = useAppDispatch()
  const counter = useAppSelector((state) => state.counter.value)
  const [name, setName] = useState('aaaa')
  const [value, setValue] = useState('')
  const [isTransition, setTransion] = useState(false)
  const [isPendding, setMyTransition] = useTransition()
  const test = new Map()

  // eslint-disable-next-line react-hooks/exhaustive-deps, @typescript-eslint/no-use-before-define
  const changeName = useCallback(() => dealName(name), [name])

  const debounceValue = useDeboundce({ value, delay: 2000 })

  const data = useMemo(() => name, [name])

  // const handelInputChange = (val: any) => {
  //   setValue(val.target.value)
  //   console.log(val.target.value, 'aaaa')
  // }
  const dealName = (restName: string) => {
    test.set('aa', 11)
    console.log(test.get('aa'), test.keys(), 'ceshi1shuju1zas')
    const newName = `${restName}ceshi`
    setName(newName)
  }

  const newVal = value + name

  const startTransition = () => {
    console.log(debounceValue, 'debounceValuedebounceValuedebounceValuedebounceValue')
    dispatch(decrement())
    setMyTransition(() => {
      setValue(`${inputRef.current?.input.value}11`)
    })
  }

  useEffect(() => {
    console.log(debounceValue, counter, 'hahahahah')
  }, [debounceValue, counter])

  return (
    <div className="app">
      <div>
        <span>
          {value}
          {newVal}
        </span>
        <Button onClick={() => setTransion(!isTransition)}>{isTransition ? 'transition' : 'normal'} </Button>
        <Button type="primary" onClick={startTransition}>
          测试
        </Button>
        {/* {isPendding ? 'hahahahah' : <div>asdasdadaddadadas</div>} */}
        <Input
          style={{ width: 200 }}
          ref={inputRef}
          // onChange={(val) => handelInputChange(val)}
        />
        <UseMemoChild data={data} handelClick={changeName} />
        <div className="test-box">测试盒子{counter}</div>
      </div>
      <svg className="loading" viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="25" className="path" fill="none" />
      </svg>
    </div>
  )
}

export default Home
