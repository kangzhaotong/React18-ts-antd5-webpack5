import React, { useState, useEffect, useMemo, useCallback } from 'react'
// import { flushSync } from 'react-dom'
import { Input, Button } from 'antd'

interface params {
  data: string
  handelClick: () => void
}

const Child = ({ data, handelClick }: params) => {
  console.log('child')
  return <Button onClick={() => handelClick()}>{data}</Button>
}

const UseMemoChild = React.memo(Child)
const App = () => {
  console.log('app')
  const [name, setName] = useState('aaaa')
  const [value, setValue] = useState('')
  const [isTransition, setTransion] = useState(false)
  useEffect(() => {
    console.log(name)
  }, [name])
  const data = useMemo(() => name, [name])
  const handelInputChange = (val: any) => {
    console.log(val, 'aaaa')
    setValue(val.target.value)
  }
  const changeName = useCallback(() => setName(`${name}haizi`), [name])

  return (
    <div className="app">
      <div>
        <span>{value}</span>
        <Button onClick={() => setTransion(!isTransition)}>{isTransition ? 'transition' : 'normal'} </Button>
        <Input onChange={(val) => handelInputChange(val)} />
        <UseMemoChild data={data} handelClick={changeName} />
      </div>
    </div>
  )
}

export default App
