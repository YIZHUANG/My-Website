import React from 'react';

import './Buttons.scss';

class Buttons extends React.PureComponent {
  constructor() {
    super();
    this.state = { showDropDown: false };
    this.handleOnClickOutSide = this.handleOnClickOutSide.bind(this);
  }
  componentDidMount() {
    document.addEventListener('click', this.handleOnClickOutSide);
  }
  handleOnClickOutSide(e) {
    if (
      this.state.showDropDown &&
      e.target.className !== 'buttons-dropdown--btn'
    ) {
      this.setState({ showDropDown: false });
    }
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleOnClickOutSide);
  }
  render() {
    const {
      DownLoadCV,
      GetCookie,
      onClickThemeChange,
      showDropDown,
      changeTheme,
      Themes
    } = this.props;
    return (
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div className="buttons">
          <a
            className="buttons-resume"
            href="https://files.fm/down.php?cf&i=jtc9s3rr&n=CV_YI.pdf"
            target="_blank"
            onClick={() => DownLoadCV()}
            rel="noopener noreferrer"
            style={
              !GetCookie() ? { marginTop: '100px' } : { marginTop: '20px' }
            }
          >
            <i className="fa fa-cloud" />
            Download Resume
          </a>
          <div className="buttons-dropdown">
            <button
              onClick={() =>
                this.setState({ showDropDown: !this.state.showDropDown })
              }
              className="buttons-dropdown--btn"
            >
              Change theme
            </button>
            {this.state.showDropDown && (
              <div className="buttons-dropdown--content">
                {Themes.map(({ name, theme, bg }, index) => (
                  <a
                    onClick={() => {
                      changeTheme(theme, bg, name);
                    }}
                    key={index}
                  >
                    {name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Buttons;
