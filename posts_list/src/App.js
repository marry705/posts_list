import React from 'react';

import Header from './components/Header/Header';
import PostsContainer from './components/PostsContainer/PostsContainer';

import './index.css';


const App = () => (
    <div className='main-wrapper'>
        <Header/>
        <PostsContainer/>
    </div>
);

export default App;