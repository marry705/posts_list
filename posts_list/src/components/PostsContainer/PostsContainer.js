import React from 'react';
import { List } from 'react-virtualized';
import { useSelector, useDispatch } from 'react-redux';

import { Layout, WhenError, WhenLoading, WhenNoAction } from '../Layout/Layout';

const ProfileContainer = () => {
    const { isLoading, errorMessage, posts } = useSelector(state => state.posts);
    const dispatch = useDispatch();
      
    function rowRenderer({
        key, 
        index,
        isScrolling,
        isVisible,
        style,
    }) {
        return (
          <div key={key} style={style}>
            {posts[index]}
          </div>
        );
    }

    return (
        <Layout ifLoading={isLoading} ifError={errorMessage}>               
            <WhenLoading>   
            <div className='main-wrapper wrapper'>
                <h1>Loading</h1>
            </div>        
            </WhenLoading>  
            <WhenError> 
            <div className='main-wrapper wrapper'>
                <p>{errorMessage}</p>
            </div>            
            </WhenError>  
            <WhenNoAction>
                <List
                    width={300}
                    height={300}
                    rowCount={10}
                    rowHeight={20}
                    rowRenderer={rowRenderer}
                />
            </WhenNoAction>
        </Layout>
    );
};

export default ProfileContainer;