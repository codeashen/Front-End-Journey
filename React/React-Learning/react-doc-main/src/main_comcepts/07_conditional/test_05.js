import React from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';

// 阻止组件渲染

/*
你可能希望能隐藏组件，即使它已经被其他组件渲染。
若要完成此操作，你可以让 render 方法直接返回 null，而不进行任何渲染。
*/

// 显隐的组件
function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Wraning!
        </div>
    );
}

// 控制显隐的组件
class Controller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWaring: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(state => ({
            showWaring: !state.showWaring
        }));
    }

    render() {
        return (
            <div>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWaring ? 'Hide' : 'Show'}
                </button>
                <WarningBanner warn={this.state.showWaring}/>
            </div>
        );
    }
}

ReactDOM.render(
    <Controller/>,
    document.getElementById('root')
);
