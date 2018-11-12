import React from 'react';

import HeaderContainer from '../../containers/common/HeaderContainer'

const PageTemplate = ({children}) => {
  return (
    <div>
      <HeaderContainer/>
      <main>
        {children}
      </main>
    </div>
  );
};

export default PageTemplate;