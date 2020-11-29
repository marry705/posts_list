import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTheme } from '../../redux/actions';

import './Header.css'

const Header = () => {
  const { isLoading } = useSelector(state => state.posts);
  const dispatch = useDispatch();
  
  const onMouseEnterButton = (target) => {
    target.classList.add('active');
  }

  const onMouseLeaveButton = (target) => {
    console.log('blur')
    target.classList.remove('active');
  }

  return (
    <div className='header'>
        <button className='theme-button' 
                disabled={isLoading} 
                onMouseOver={(e) => onMouseEnterButton(e.target)}
                onMouseLeave={(e) => onMouseLeaveButton(e.target)}
                onClick={() => dispatch(updateTheme('frontend'))}>
              Frontend
        </button>
        <button className='theme-button' 
                disabled={isLoading} 
                onMouseOver={(e) => onMouseEnterButton(e.target)}
                onMouseLeave={(e) => onMouseLeaveButton(e.target)}
                onClick={() => dispatch(updateTheme('reactjs'))}>
              ReactJS
        </button>
        <button className='theme-button' 
                disabled={isLoading} 
                onMouseOver={(e) => onMouseEnterButton(e.target)}
                onMouseLeave={(e) => onMouseLeaveButton(e.target)}
                onClick={() => dispatch(updateTheme('vuejs'))}>
              VueJS
        </button>
        <button className='theme-button' 
                disabled={isLoading} 
                onMouseOver={(e) => onMouseEnterButton(e.target)}
                onMouseLeave={(e) => onMouseLeaveButton(e.target)}
                onClick={() => dispatch(updateTheme('angular'))}>
              Angular
        </button>
    </div>
  );
};

export default Header;