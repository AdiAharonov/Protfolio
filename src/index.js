import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import App from './App';
import { Blog } from './Blog';
import { BlogPostPage } from './pages/BlogPostPage';
import { HashRouter, Route, Switch } from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename='/'>
    <Switch>
    <Route exact component={App} path="/" />
    <Route exact component={Blog} path="/blog" />
    <Route exact component={BlogPostPage} path="/blog/:name?" />
    </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


