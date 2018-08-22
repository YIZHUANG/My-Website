import React from 'react';
import Cookies from 'js-cookie';

const GetCookie = () => {
  return Cookies.get('http://www.yizhuang.fi');
};

export default GetCookie;
