import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import {createStore} from "redux";
import {counter} from "./redux/reducers";

// 根据 counter 函数创建 store 对象
const store = createStore(counter);

// 定义渲染组件标签的函数
const render = () => {
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    )
}

// 初始化渲染
render();

// 注册（订阅）监听，一旦状态发生变化，自动重新渲染
store.subscribe(render);