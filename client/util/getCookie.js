import React from 'react';
import Cookies from 'js-cookie';

const GetCookie = () => {
  return Cookies.get('https://www.yizhuang.fi');
};

export default GetCookie;
