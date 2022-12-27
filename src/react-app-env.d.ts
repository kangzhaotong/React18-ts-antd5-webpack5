declare module '*.scss' {
  const classes: { [key: string]: string }
  export default classes
}
declare module '*.less' {
  const classes: { [key: string]: string }
  export default classes
}
declare module '*.module.less' {
  const content: { [className: string]: string }
  export = content
}
declare module '*.json' {
  const value: any
  export default value
}
