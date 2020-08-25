import React from 'react';
import { Header } from 'components';

export default ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
