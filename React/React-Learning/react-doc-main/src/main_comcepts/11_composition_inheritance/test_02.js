import React from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';

// 在组件中预留多个槽，用来放子组件
function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}

function Contacts() {
    return (
        <ul>
            <li>联系人1</li>
            <li>联系人2</li>
            <li>联系人3</li>
        </ul>
    );
}

function Chat() {
    return <div>聊天界面</div>;
}

function App() {
    return (
        <SplitPane left={<Contacts/>} right={<Chat/>} />
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));