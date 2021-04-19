import React from 'react'
import Header from "../header/header";
import CommentAdd from '../comment-add/comment-add'
import CommentList from '../comment-list/comment-list'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        // 模拟异步获取数据
        setTimeout(() => {
            const comments = [
                {
                    username: 'Tom',
                    content: 'ReactJS好难啊!'
                },
                {
                    username: 'Alice',
                    content: 'ReactJS还不错!'
                }
            ];
            this.setState({comments});
        }, 1000);
    }

    // 添加评论函数，使用箭头函数省略构造器中函数绑定
    add = (comment) => {
        let {comments} = this.state;
        comments.unshift(comment);
        this.setState({comments});
    }

    // 删除评价函数
    delete = (index) => {
        let {comments} = this.state;
        comments.splice(index, 1);    // 删除数组中指定下标的一个元素
        this.setState({comments});
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <CommentAdd add={this.add}/>
                    <CommentList comments={this.state.comments} delete={this.delete}/>
                </div>
            </div>
        );
    }
}

export default App;