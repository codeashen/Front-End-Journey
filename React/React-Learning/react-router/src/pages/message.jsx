import React from 'react';
import {Link, Route} from 'react-router-dom';
import MessageDetail from "./message-detail";

export default class Message extends React.Component {
    state = {
        messages: []
    }

    componentDidMount() {
        // 模拟发ajax请求获取数据
        setTimeout(() => {
            const data = [
                {id: 1, title: 'Message001'},
                {id: 2, title: 'Message002'},
                {id: 3, title: 'Message003'}
            ];
            this.setState({messages: data});
        }, 1000);
    }

    // 使用 history 对象，实现前端路由
    detail = (id) => {
        this.props.history.push(`/home/message/${id}`);
    }
    detail2 = (id) => {
        this.props.history.replace(`/home/message/${id}`);
    }
    back = () => {
        this.props.history.goBack();
    }
    forward = () => {
        this.props.history.goForward();
    }

    render() {
        // match 中取出 path, 此处为 "/home/message"
        const path = this.props.match.path;

        return (
            <div>
                <ul>
                    {
                        this.state.messages.map((m, index) => (
                            <li key={index}>
                                {/* 动态获取路由path */}
                                <Link to={`${path}/${m.id}`}>{m.title}</Link>
                                &nbsp;&nbsp;&nbsp;
                                {/* 通过不直接设置时间函数，而是用箭头函数包裹的方式，实现函数传参。 实际上事件函数是外层的箭头函数 */}
                                <button onClick={() => this.detail(m.id)}>查看详情(push)</button>&nbsp;
                                <button onClick={() => this.detail2(m.id)}>查看详情(replace)</button>
                            </li>
                        ))
                    }
                </ul>
                <div>
                    <button onClick={this.back}>后退</button>&nbsp;
                    <button onClick={this.forward}>前进</button>&nbsp;
                </div>
                <hr/>
                {/* :id 表示参数，会存入Message组件中的 props.match.params.id 中 */}
                <Route path={`${path}/:id`} component={MessageDetail}/>
            </div>
        );
    }


}
