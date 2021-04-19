import React, {Component} from 'react';

import Search from "./search";
import UserList from "./user-list";

/**
 * 得到Search组件的关键词searchName，更新state，从而刷新UserList
 */
class App extends Component {

    // 搜索名存在父组件中
    state = {
        searchName: ''
    }

    // 搜索框更新函数
    refreshName = (searchName) => this.setState({searchName});

    render() {
        return (
            <div className="container">
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <Search refreshName={this.refreshName}/>
                </section>
                <UserList searchName={this.state.searchName}/>
            </div>
        );
    }
}

export default App;