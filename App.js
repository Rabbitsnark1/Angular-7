import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PostList from './PostList';
import PostDetails from './PostDetails';

function App({ posts }) {
  return (
    <Router>
      <Switch>
        <Route exact path="/posts">
          <PostList posts={posts} />
        </Route>
        <Route path="/posts/:postId">
          <PostDetails posts={posts} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;