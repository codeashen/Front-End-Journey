import React from 'react'
import PropTypes from 'prop-types'

/**
 * 评论添加组件，收集数据 + 添加评价
 *   输入框绑定onChange事件，使用state自动搜集输入框数据，直接读取state；
 *   调用父组件App的add函数添加评论。
 */
class CommentAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            content: ''
        }
    }

    changeUsername = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    changeContent = (event) => {
        this.setState({
            content: event.target.value
        });
    }

    addComment = () => {
        // 获取数据
        let {username, content} = this.state;
        let comment = {username, content};
        // 调用父组件的add方法，更新state
        this.props.add(comment);
        // 清除输入框
        this.setState({
            username: '',
            content: ''
        });
    }

    render() {
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名"
                               value={this.state.username} onChange={this.changeUsername}/>
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" placeholder="评论内容"
                                  value={this.state.content} onChange={this.changeContent}/>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.addComment}>提交
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

CommentAdd.propTypes = {
    add: PropTypes.func.isRequired
}

export default CommentAdd;