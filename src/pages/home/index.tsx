/*
 * @Author: M78.Kangzhaotong
 * @Date: 2022-07-25 17:01:29
 * @Last Modified by: M78.Kangzhaotong
 * @Last Modified time: 2022-12-07 17:22:18
 */
import React, { useState, useMemo, useCallback, useTransition, useRef, useEffect } from 'react'
// import { flushSync } from 'react-dom';
import { Input, Button } from 'antd'
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
  const [name, setName] = useState('aaaa')
  const [value, setValue] = useState('')
  const [isTransition, setTransion] = useState(false)
  const [isPendding, setMyTransition] = useTransition()
  const test = new Map()
  const handelInputChange = (val: any) => {
    setValue(val.target.value)
    console.log(val.target.value, 'aaaa')
  }
  const newVal = value + name
  const debounceValue = useDeboundce({ value, delay: 2000 })
  const data = useMemo(() => name, [name])
  const dealName = (restName: string) => {
    test.set('aa', 11)
    console.log(test.get('aa'), test.keys(), 'ceshi1shuju1zas')
    const newName = `${restName}ceshi`
    setName(newName)
  }
  const changeName = useCallback(() => dealName(name), [name])
  window.addEventListener('mousedown', function (e) {
    console.log(e.clientX, e.offsetX, 'aaaa', e.screenX)
  })
  const startTransition = () => {
    console.log(inputRef.current?.input.value, 'asdasdadas')
    setValue(inputRef.current?.input.value)
    // setTimeout(() => {
    //   setMyTransition(() => {
    //     setName((preState) => preState + 'kzt')
    //   })
    // }, 5000)
  }
  useEffect(() => {
    console.log(debounceValue, 'hahahahah')
  }, [debounceValue])
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
        {isPendding ? 'hahahahah' : <div>asdasdadaddadadas</div>}
        <Input style={{ width: 200 }} ref={inputRef} onChange={(val) => handelInputChange(val)} />
        <UseMemoChild data={data} handelClick={changeName} />
        <div className="test-box">测试盒子</div>
      </div>
    </div>
  )
}

export default Home
