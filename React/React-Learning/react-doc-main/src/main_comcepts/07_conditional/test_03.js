import React from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';


/*
============ 与运算符 && ============

通过花括号包裹代码，你可以在 JSX 中嵌入任何表达式。
这也包括 JavaScript 中的逻辑与 (&&) 运算符。它可以很方便地进行元素的条件渲染。

之所以能这样做，是因为在 JavaScript 中，
true && expression 总是会返回 expression,
而 false && expression 总是会返回 false。

因此，如果条件是 true，&& 右侧的元素就会被渲染，如果是 false，React 会忽略并跳过它。
*/

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 &&
            <h2>
                You have {unreadMessages.length} unread messages.
            </h2>
            }
        </div>
    );
}

const messages = ['React', 'Vue', 'Angular'];

ReactDOM.render(
    <Mailbox unreadMessages={messages}/>,
    document.getElementById('root')
);