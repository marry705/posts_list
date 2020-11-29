import React from 'react';

import Header from './components/Header/Header';
import PostsContainer from './components/PostsContainer/PostsContainer';
import ButtonPanel from './components/ButtonPanel/ButtonPanel';

import './index.css';


const App = () => (
    <div className='main-wrapper'>
        <Header/>
        <ButtonPanel/>
        <PostsContainer/>
    </div>
);

export default App;