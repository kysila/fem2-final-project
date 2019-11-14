/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withSnackbar } from 'notistack';
import CloseIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { closeSnackbar, removeSnackbar } from '../../store/notification/actions';

function Notifier(props) {
  let displayed = [];

  const storeDisplayed = (id) => {
    displayed = [...displayed, id];
  };

  const removeDisplayed = (id) => {
    displayed = displayed.filter((key) => id !== key);
  };

  useEffect(() => {
    const { notifications = [] } = props;

    notifications.forEach(({
      key,
      message,
      options = {},
      dismissed = false,
    }) => {
      if (dismissed) {
        props.closeSnackbar(key);
        return;
      }
      if (displayed.includes(key)) return;
      props.enqueueSnackbar(message, {
        key,
        ...options,
        action: (k) => (
          <CloseIcon style={{ cursor: 'pointer' }} onClick={() => closeSnackbar(k)} />
        ),
        onClose: (event, reason, k) => {
          if (options.onClose) {
            options.onClose(event, reason, k);
          }
        },
        onExited: (event, k) => {
          props.removeSnackbar(k);
          removeDisplayed(k);
        },
      });
      storeDisplayed(key);
    });
  });

  return null;
}

const mapStateToProps = (store) => ({
  notifications: store.notification,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  closeSnackbar,
  removeSnackbar,
}, dispatch);

const NotifierConnect = withSnackbar(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Notifier));

export {
  NotifierConnect as Notifier,
};
