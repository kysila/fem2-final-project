import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import '../../index.css';

import { Header, Footer } from '../../commons';
import AllBreadcrumbs from './AllBreadcrumbs';

export { Information } from './Information/Information';


export const ClientProfile = (props) => {


  return (
    <React.Fragment>
      <Header callCenter="1-855-324-5387" />
      <AllBreadcrumbs />


      <div>
        Something will be here when designer finishes his work...
      </div>

      <Footer />
    </React.Fragment>
  );
};
