/* eslint-disable react/destructuring-assignment */
import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import NotFound from './NotFound';
import { getVideoSource } from '../actions';
import '../assets/styles/containers/Player.scss';

const Player = (props) => {
  const { id } = props.match.params;

  const hasPlaying = Object.keys(props.playing).length > 0;

  console.log(props);

  useLayoutEffect(() => {
    props.getVideoSource(id);
  }, []);

  return hasPlaying ? (
    <div className='Player'>
      <button
        type='button'
        className='back-button'
        onClick={() => props.history.goBack()}
      >
        Regresar
      </button>
      <video controls muted autoPlay>
        <source src={props.playing.source} type='video/mp4' />
      </video>
    </div>
  ) : <NotFound />;
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
