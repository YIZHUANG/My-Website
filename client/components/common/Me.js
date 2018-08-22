import React from 'react';
import './Me.scss';

const Me = () => {
  return (
    <div className="description_me">
      <h1 className="description_me-title">Hello world !</h1>
      <p className="description_me-intro">
        I am Yi, currently working as a software developer mostly with
        JavaScript since April, 2018.
      </p>
      <p
        style={{ marginTop: 20, marginBottom: 40 }}
        className="description_me-intro"
      >
        I interact with React, Redux, Css daily with a strong focus on testing,
        writing clean and maintainable code.
      </p>
    </div>
  );
};

export default Me;
