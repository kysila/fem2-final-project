import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import { useArrowStyles } from './styles';

function ArrowTooltip(props) {
  const { arrow, ...classes } = useArrowStyles();
  const [arrowRef, setArrowRef] = useState(null);

  return (
    <Tooltip
      open={Boolean(props.title)}
      classes={classes}
      PopperProps={{
        popperOptions: {
          modifiers: {
            arrow: {
              enabled: Boolean(arrowRef),
              element: arrowRef,
            },
          },
        },
      }}
      {...props}
      title={(
        <React.Fragment>
          {props.title}
          <span className={arrow} ref={setArrowRef} />
        </React.Fragment>
      )}
    />
  );
}

ArrowTooltip.propTypes = {
  title: PropTypes.node,
};

ArrowTooltip.defaultProps = {
  title: null,
};

export {
  ArrowTooltip,
};
