import React from 'react';

import './Buttons.scss';

const Buttons = ({
  DownLoadCV,
  GetCookie,
  onClickThemeChange,
  onDropDownClick,
  showDropDown,
  changeTheme,
  Themes
}) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <div className="buttons">
        <a
          className="buttons-resume"
          href="https://files.fm/down.php?cf&i=jtc9s3rr&n=CV_YI.pdf"
          target="_blank"
          onClick={() => DownLoadCV()}
          rel="noopener noreferrer"
          style={!GetCookie() ? { marginTop: '100px' } : { marginTop: '20px' }}
        >
          <i className="fa fa-cloud" />
          Download Resume
        </a>
        <div className="buttons-dropdown">
          <button
            onClick={() => {
              onClickThemeChange();
              onDropDownClick();
            }}
            className="buttons-dropdown--btn"
          >
            Change theme
          </button>
          {showDropDown && (
            <div className="buttons-dropdown--content">
              {Themes.map(({ name, theme, bg }, index) => (
                <a onClick={() => changeTheme(theme, bg, name)} key={index}>
                  {name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Buttons;
