import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import MyNavLink from "../components/my-nav-link";
import News from "./news";
import Message from "./message";

/**
 * Home 组件，包含 news 组件和 message 组件
 * @returns {*}
 * @constructor
 */
export default function Home() {
    return (
        <div>
            <h2>Home 组件内容</h2>
            <div>
                <ul className="nav nav-tabs">
                    <li>
                        <MyNavLink to='/home/news'>News</MyNavLink>
                    </li>
                    <li>
                        <MyNavLink to='/home/message'>Message</MyNavLink>
                    </li>
                </ul>
                <Switch>
                    <Route path='/home/news' component={News}/>
                    <Route path='/home/message' component={Message}/>
                    <Redirect to='/home/news'/>
                </Switch>
            </div>
        </div>
    );
}