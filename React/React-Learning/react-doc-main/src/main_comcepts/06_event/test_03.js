import React from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';

// 向事件处理函数传递参数

/*
通常我们会为事件处理函数传递额外的参数。
例如，若 id 是你要删除那一行的 ID，
以下两种方式都可以向事件处理函数传递参数：
*/


class DeleteRowCmp extends React.Component {
    constructor(props) {
        super(props);
        this.deleteRow = this.deleteRow.bind(this);
    }

    deleteRow(id) {
        alert('Deleted data with id ' + id)
    }

    render() {
        return (
            <div>
                <span>1</span>
                {/* 方式一：通过箭头函数 */}
                <button onClick={(e) => this.deleteRow('1', e)}>
                    Delete
                </button>
                <br/>

                <span>2</span>
                {/* 方式二：通过 Function.prototype.bind */}
                <button onClick={this.deleteRow.bind(this, '2')}>
                    Delete
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <DeleteRowCmp/>,
    document.getElementById('root')
);

/*
在这两种情况下，React 的事件对象 e 会被作为第二个参数传递。
  如果通过箭头函数的方式，事件对象必须显式的进行传递;
  而通过 bind 的方式，事件对象以及更多的参数将会被隐式的进行传递。
*/
