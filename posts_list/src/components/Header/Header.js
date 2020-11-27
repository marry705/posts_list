import React from 'react';
import { useDispatch } from 'react-redux';
import { updateTheme } from '../../redux/actions';

const ProfileContainer = () => {
  const dispatch = useDispatch();

  return (
    <div>
        <button onClick={() => dispatch(updateTheme('frontend'))}>Frontend</button>
        <button onClick={() => dispatch(updateTheme('reactjs'))}>ReactJS</button>
        <button onClick={() => dispatch(updateTheme('vuejs'))}>VueJS</button>
        <button onClick={() => dispatch(updateTheme('angular'))}>Angular</button>
    </div>
  );
};

export default ProfileContainer;