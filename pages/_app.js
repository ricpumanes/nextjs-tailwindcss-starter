import React from 'react';

import '@public/assets/styles/globals.scss';

const App = (props) => {
  const { Component, pageProps } = props;

  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default App;
