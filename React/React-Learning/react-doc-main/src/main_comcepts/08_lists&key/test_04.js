import React from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';

// 要展示的数据
const posts = [
    {id: 1, title: 'React', content: 'Good framewrok of JavaScript!'},
    {id: 2, title: 'Java', content: 'Good high level program language!'}
];


// 展示数据的组件
function Blog(props) {
    // 标题栏
    const sidebar = (
        <ul>
            {props.posts.map(post =>
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    );

    // 标题和正文
    const content = props.posts.map(post =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );

    return (
        <div>
            {sidebar}
            <hr/>
            {content}
        </div>
    );
}


ReactDOM.render(
    <Blog posts={posts}/>,
    document.getElementById('root')
);
