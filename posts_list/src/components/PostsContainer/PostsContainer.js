import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AutoSizer from 'react-virtualized-auto-sizer';
import { List } from 'react-virtualized';

import { changePostStatus, removePost } from '../../redux/actions';

import 'react-virtualized/styles.css';
import './PostsContainer.css';

const PostsContainer = () => {
    const { posts } = useSelector(state => state.posts.present);
    const { isLoading, errorMessage, } = useSelector(state => state.theme);
    const dispatch = useDispatch();

    const PostRow = ({ index, key, style }) => {
        let content;

        if (index === posts.length) {
        content = (isLoading) ? <div className='load-ellipsis'><div></div><div></div><div></div><div></div></div> : (errorMessage) ? <p>{errorMessage}</p> : null;
        } else {
          content = 
            <div className='row-post'>
                <button className={ posts[index].isFavorite ? 'fan-button favorite' : 'fan-button' } onClick={() => dispatch(changePostStatus(posts[index].id))}></button>
                <button className='remove-button' onClick={() => dispatch(removePost(posts[index].id))}></button>
                <a href={ posts[index].data.url } target="_blank" rel="noreferrer">{ posts[index].data.title }</a>
            </div>;
        }
        return (
            <div key={key} style={style} className='row'>
                {content}
            </div>
        );
    };

    return (
        <div className='posts-wrapper'>
            <AutoSizer>
                {({ height, width } ) => (
                    <List
                        width={width}
                        height={height}
                        rowHeight={65}
                        rowCount={posts.length+1}
                        rowRenderer={PostRow}
                        data={posts}/> 
                )}
            </AutoSizer>
        </div>
    );
};

export default PostsContainer;