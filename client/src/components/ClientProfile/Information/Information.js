import React, { useState, useEffect } from 'react';
import axios from 'axios';


export const Information = (props) => {
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
      <div>
        Something will be here when designer finishes his work...
      </div>
    </React.Fragment>
  );
};
