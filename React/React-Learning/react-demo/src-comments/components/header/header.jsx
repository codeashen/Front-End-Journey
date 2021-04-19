import React from 'react'

/**
 * header组件，固定组件
 */
class Header extends React.Component {

    render() {
        return (
            <header className="site-header jumbotron">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <h1>请发表对React的评论</h1>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;