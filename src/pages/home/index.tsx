/*
 * @Author: M78.Kangzhaotong
 * @Date: 2022-07-25 17:01:29
 * @Last Modified by: M78.Kangzhaotong
 * @Last Modified time: 2022-07-27 17:23:55
 */
import React, { useState, useMemo, useCallback } from 'react'
// import { flushSync } from 'react-dom';
import { Input, Button } from 'antd'
// import './App.css'
interface params {
  data: string
  handelClick: () => void
}

const Child: React.FC<params> = ({ data, handelClick }) => {
  console.log('child')
  return <Button onClick={() => handelClick()}>{data}</Button>
}
const UseMemoChild = React.memo(Child)
const Home: React.FC<any> = () => {
  const [name, setName] = useState('aaaa')
  const [value, setValue] = useState('')
  const [isTransition, setTransion] = useState(false)
  const test = new Map()
  const handelInputChange = (val: any) => {
    const dataMap = new Map([
      ['key1', 'value1'],
      ['key2', 'value2'],
      ['key2', 'value2'],
      ['key2', 'value2'],
      ['key7', 'value7'],
    ] as const)
    console.log(val, dataMap, dataMap.has('key7'), Array.from(dataMap), JSON.stringify(dataMap), 'aaaa')
    setValue(val.target.value)
  }
  const data = useMemo(() => name, [name])
  const dealName = (restName: string) => {
    test.set('aa', 11)
    console.log(test.get('aa'), test.keys(), 'ceshi1shuju1zas')
    const newName = `${restName}ceshi`
    setName(newName)
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const changeName = useCallback(() => dealName(name), [name])
  window.addEventListener('mousedown', function (e) {
    console.log(e.clientX, e.offsetX, 'aaaa', e.screenX)
  })
  return (
    <div className="app">
      <div>
        <span>{value}</span>
        <Button onClick={() => setTransion(!isTransition)}>{isTransition ? 'transition' : 'normal'} </Button>
        <Button type="primary">测试</Button>
        <Input style={{ width: 200 }} onChange={(val) => handelInputChange(val)} />
        <UseMemoChild data={data} handelClick={changeName} />
      </div>
    </div>
  )
}

export default Home
