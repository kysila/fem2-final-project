import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../../index.css';


import { Header } from '../../commons';
import StayInTouch from '../../commons/Footer/StayInTouch';

export const ClientProfile = (props) => {

  const [customerInfo, setCustomerInfo] = useState('customer');

  useEffect(() => {
    axios.get('/customers/customer')
      .then((loggedInCustomer) => {
        console.log(loggedInCustomer.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  console.log(customerInfo);


  return (
    <React.Fragment>
      <Header callCenter="1-855-324-5387" />
      <div>
        Something will be here when designer finishes his work...
      </div>
      <StayInTouch />
    </React.Fragment>
  );
};
