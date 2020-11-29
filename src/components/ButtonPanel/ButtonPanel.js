import React from 'react';
import { connect } from 'react-redux';
import { ActionCreators as UndoActionCreators } from 'redux-undo';

import './ButtonPanel.css';

let ButtonPanel = ({ canUndo, canRedo, onUndo, onRedo }) => {
  return (
    <div className='button-wrapper'>
        <button className='state-button' 
                disabled={!canUndo} 
                onClick={onUndo}>
              UNDO
        </button>
        <button className='state-button' 
                disabled={!canRedo} 
                onClick={onRedo}>
              REDO
        </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  canUndo: state.posts.past.length > 0,
  canRedo: state.posts.future.length > 0
});

const mapDispatchToProps = ({
  onUndo: UndoActionCreators.undo,
  onRedo: UndoActionCreators.redo
});

ButtonPanel = connect( mapStateToProps, mapDispatchToProps )(ButtonPanel);

export default ButtonPanel;