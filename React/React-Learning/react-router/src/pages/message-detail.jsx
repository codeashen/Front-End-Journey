import React from 'react'

const messageDetails = [
    {id: 1, title: 'Message001', content: 'React is very nice!'},
    {id: 2, title: 'Message002', content: 'Java is very nice!'},
    {id: 3, title: 'Message003', content: 'C is very hard!'}
];

export default function MessageDetail(props) {

    // 从 match 中取出 id, 这个值是 Message 组件通过路由 path 传进来的
    const id = props.match.params.id;
    const md = messageDetails.find(md => md.id.toString() === id);

    return (
        <ul>
            <li>ID: {md.id}</li>
            <li>TITLE: {md.title}</li>
            <li>CONTENT: {md.content}</li>
        </ul>
    );
}