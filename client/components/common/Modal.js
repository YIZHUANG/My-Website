import React, { Component } from 'react';
import PropTypes from 'prop-types';

import OnClickOutSide from '../../util/onClickOutSide';

import './Modal.scss';

const Modal = ({ item, onClose }) => {
  return (
    <div className="modal" onMouseDown={e => OnClickOutSide(e, onClose)}>
      <div className="modal--content">
        <div className="modal--content-title">
          <div className="modal--content-title--text">{item.title}</div>
          <span className="modal--content-title--closeBtn" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="modal--item__container">
          <a
            href={item.Link}
            target="_blank"
            rel="noopener noreferrer"
            className="modal--item__container-content"
          >
            {item.detail}
          </a>
        </div>
        <div className="modal--content-bottom">
          <span className="time">Time: {item.time}</span>
          <a
            href={item.Link}
            rel="noopener noreferrer"
            target="_blank"
            className="Link"
          >
            ...
          </a>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    Link: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
  }).isRequired,
  onClose: PropTypes.func.isRequired
};

export default Modal;
