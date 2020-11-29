import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { ActionCreators } from 'redux-undo';
import { undo, redo } from '../../redux/actions';

import './ButtonPanel.css';

const ButtonPanel = () => {
  const { isLoading } = useSelector(state => state.theme);
  const dispatch = useDispatch();

  return (
    <div className='button-wrapper'>
        <button className='state-button' 
                disabled={isLoading} 
                onClick={() => dispatch(undo())}>
              UNDO
        </button>
        <button className='state-button' 
                disabled={isLoading} 
                onClick={() => dispatch(redo())}>
              REDO
        </button>
    </div>
  );
};

export default ButtonPanel;