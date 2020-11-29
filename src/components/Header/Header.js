import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTheme } from '../../redux/actions';

import './Header.css';

const Header = () => {
  const { isLoading } = useSelector(state => state.request);
  const dispatch = useDispatch();
  
  const onMouseEnterButton = (target) => {
    target.classList.remove('no-active');
    target.classList.add('active');
  }

  const onMouseLeaveButton = (target) => {
    target.classList.remove('active');
    target.classList.add('no-active');
  }

  return (
    <div className='header'>
        <button className='theme-button' 
                disabled={isLoading} 
                onMouseEnter={(e) => onMouseEnterButton(e.target)}
                onTouchStart={(e) => onMouseEnterButton(e.target)}
                onMouseLeave={(e) => onMouseLeaveButton(e.target)}
                onTouchEnd={(e) => onMouseLeaveButton(e.target)}
                onClick={() => dispatch(updateTheme('frontend'))}>
              Frontend
        </button>
        <button className='theme-button' 
                disabled={isLoading} 
                onMouseEnter={(e) => onMouseEnterButton(e.target)}
                onTouchStart={(e) => onMouseEnterButton(e.target)}
                onMouseLeave={(e) => onMouseLeaveButton(e.target)}
                onTouchEnd={(e) => onMouseLeaveButton(e.target)}
                onClick={() => dispatch(updateTheme('reactjs'))}>
              ReactJS
        </button>
        <button className='theme-button' 
                disabled={isLoading} 
                onMouseEnter={(e) => onMouseEnterButton(e.target)}
                onTouchStart={(e) => onMouseEnterButton(e.target)}
                onMouseLeave={(e) => onMouseLeaveButton(e.target)}
                onTouchEnd={(e) => onMouseLeaveButton(e.target)}
                onClick={() => dispatch(updateTheme('vuejs'))}>
              VueJS
        </button>
        <button className='theme-button' 
                disabled={isLoading} 
                onMouseEnter={(e) => onMouseEnterButton(e.target)}
                onTouchStart={(e) => onMouseEnterButton(e.target)}
                onMouseLeave={(e) => onMouseLeaveButton(e.target)}
                onTouchEnd={(e) => onMouseLeaveButton(e.target)}
                onClick={() => dispatch(updateTheme('angular'))}>
              Angular
        </button>
    </div>
  );
};

export default Header;