import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Test from './components/Test/Test'

import Blog from './pages/Blog'
import CreateBlog from './pages/CreateBlog'
import EditBlog from './pages/EditBlog'
import Landing from './pages/Landing'
import MyBlogs from './pages/MyBlogs'

export default function AppRouter() {
    return (
        <Switch>

            <Route path="/" exact>
                <Landing />
            </Route>

            <Route path="/blog/create">
                <CreateBlog />
            </Route>

            <Route path="/blog/edit">
                <EditBlog />
            </Route>

            <Route path="/user/blog">
                <MyBlogs />
            </Route>

            <Route path="/blog/:id">
                <Blog />
            </Route>


            <Route path="/test">
                <Test />
            </Route>

            <Route path="/">
                404 not found
                <br />
                <a href="/">Click here to go home</a>
            </Route>

        </Switch>
    )
}

