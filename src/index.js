import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import App from './App';
import { Blog } from './Blog';
import { BlogPostPage } from './pages/BlogPostPage';
import { HashRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'




ReactDOM.render(
  <React.StrictMode>
    <Router basename="/" >
    <Switch>
    <Route exact component={App} path="/" />
    <Route exact component={Blog} path="/blog" />
    <Route exact component={BlogPostPage} path="/blog/:name?" />
    <Route component={() => (<div>404 Not found </div>)} />
    </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


