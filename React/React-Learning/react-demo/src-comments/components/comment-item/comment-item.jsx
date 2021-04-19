import React from 'react'
import PropTypes from 'prop-types'
import './commentItem.css'

/**
 * 评论项组件，展示评论 + 删除评论功能
 */
class CommentItem extends React.Component {

    deleteComment = () => {
        let {username} = this.props.comment;
        if (window.confirm(`确定删除${username}的评论吗？`)) {
            this.props.delete(this.props.index);
        }
    }

    render() {
        let {comment} = this.props;
        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href="#!" onClick={this.deleteComment}>删除</a>
                </div>
                <p className="user"><span>{comment.username}</span><span>说:</span></p>
                <p className="centence">{comment.content}</p>
            </li>
        );
    }
}

CommentItem.propType = {
    comment: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    delete: PropTypes.func.isRequired
}

export default CommentItem;