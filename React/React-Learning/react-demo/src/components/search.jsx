import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * 搜索组件，将搜索关键词传到父组件App
 */
class Search extends Component {

    // static关键字表示这是组件的属性
    static propTypes = {
        refreshName: PropTypes.func.isRequired
    }

    // 调用父组件传入的方法，更新父组件state
    search = () => {
        let name = this.nameInput.value;
        this.props.refreshName(name);
    }

    render() {
        return (
            <div>
                {/* ref 非受控组件 */}
                <input type="text" placeholder="enter the name you search"
                       ref={input => this.nameInput = input}/>
                <button onClick={this.search}>Search</button>
            </div>
        );
    }
}

export default Search;