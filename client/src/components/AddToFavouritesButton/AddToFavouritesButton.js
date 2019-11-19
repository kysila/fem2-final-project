import React from 'react';

import Button from '@material-ui/core/Button';

import { WeigherIcon } from '../Icons/Icons';

export const AddToFavouritesButton = ({ obj, user, allProps, className, iconStyle }) => {

  return (
    <Button
      className={className}
      onClick={e => {
        if (user) {
          // Место для логики добавления товара в Wish List
        }
      }}
    >
      <WeigherIcon
        color="action"
        className="icon"
        style={iconStyle}
      />
    </Button>
  );
};
