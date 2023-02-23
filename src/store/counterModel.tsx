import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
// 每个切片文件都应该为其初始状态值定义一个类型，以便可以正确地推断出每种情况下的 reducercreateSlice的类型。state

// 所有生成的操作都应使用PayloadAction<T>Redux Toolkit 中的类型进行定义，该类型将字段的类型action.payload作为其通用参数。

// RootState您可以在此处安全地从存储文件中导入类型。这是一个循环导入，但 TypeScript 编译器可以正确处理类型。对于像编写选择器函数这样的用例，这可能是需要的。
export interface CounterState {
  value: number
}
// payload生成的 action creators 将根据PayloadAction<T>您为 reducer 提供的类型正确输入以接受参数。例如，incrementByAmount需要 anumber作为其参数。

// 在某些情况下，TypeScript 可能会不必要地收紧初始状态的类型。如果发生这种情况，您可以通过使用 转换初始状态来解决它as，而不是声明变量的类型
const initialState = {
  value: 0,
} as CounterState

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: CounterState) => {
      // Redux Toolkit 允许我们在 reducer 中编写“变异”逻辑。它
      // 实际上并没有改变状态，因为它使用了 Immer 库，
      // 它检测到“草稿状态”的变化并产生一个全新的
      // 基于这些变化的不可变状态
      // eslint-disable-next-line no-param-reassign
      state.value += 1
    },
    decrement: (state: CounterState) => {
      // eslint-disable-next-line no-param-reassign
      state.value -= 1
    },
    incrementByAmount: (state: CounterState, action: PayloadAction<number>) => {
      // eslint-disable-next-line no-param-reassign
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer
