import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

/**
 * 用户头像列表组件，接受App传入的searchName，然后发送ajax请求获取数据展示
 */
class UserList extends Component {

    static propTypes = {
        searchName: PropTypes.string.isRequired
    }

    // state中存本组件的4中状态，不同状态展示不同效果
    state = {
        firstView: true,    // 首次进入，没有搜索
        loading: false,     // 加载中
        users: null,        // 请求得到user数组数据
        error: null         // 请求出错
    }

    // 组件props更新时调用的生命周期函数（已过时）
    componentWillReceiveProps(nextProps)  {
        let searchName = nextProps.searchName;
        const url = `https://api.github.com/search/users?q=${searchName}`;
        this.setState({firstView: false, loading: true});  // 更新页面状态
        // 使用axios发送请求
        axios.get(url).then((response) => {
            let users = response.data.items;
            this.setState({loading: false, users: users});
        }).catch((error) => {
            this.setState({loading: false, error: error.message});
        })
    }

    render() {
        // 根据不同状态返回不同结果
        if (this.state.firstView) {
            return <h2>Enter name to search</h2>;
        } else if (this.state.loading) {
            return <h2>Loading ...</h2>;
        } else if (this.state.error) {
            return <h2>{this.state.error}</h2>;
        } else {
            return (
                <div className="row">
                    {
                        this.state.users.map((user, index) => (
                            <div className="card" key={index}>
                                <a href={user.html_url} target="_blank">
                                    <img src={user.avatar_url} style={{width: '100px'}} alt='user'/>
                                </a>
                                <p className="card-text">{user.login}</p>
                            </div>
                        ))
                    }
                </div>
            )
        }
    }
}

export default UserList;