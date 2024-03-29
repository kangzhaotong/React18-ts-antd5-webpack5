import React from 'react'
// import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import App from './App'

// import reportWebVitals from './reportWebVitals';

// const root =ReactDOM.createPortal()
// // ReactDOM.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>,
// //   document.getElementById('root')
// // );
// During an update, there's no need to pass the container again.
// root.render(<App tab="profile" />);
// reportWebVitals();
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

const container = document.querySelector('#root')

// Create a root.
const root = ReactDOMClient.createRoot(container)

// Initial render: Render an element to the root.
root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store} />
      <App />
    </HashRouter>
  </React.StrictMode>,
)
