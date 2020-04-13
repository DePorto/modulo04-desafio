import React from 'react';

import './App.css';

import Header from './components/Header';

import PostList from './components/PostList';

function App(){
  
  return ( 
    <> 
    <Header />
    <PostList />
    </>
  );

  //return (<div id="header"><span id="logo">Facebookson</span></div>);
}

export default App;