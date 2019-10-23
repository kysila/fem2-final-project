import React from 'react';
import { connect } from 'react-redux';
import { dispatchModalClose } from '../../store/modal/actions';

import Dialog from '@material-ui/core/Dialog';

function Modal(props) {
  const onClose = () => props.closeModal();

  return (
    <Dialog open={props.opened} onClose={onClose}>
      {props.children}
    </Dialog>
  );
}

function mapStateToProps(state) {
  return {
    opened: state.modal.opened,
    children: state.modal.child
  };
}

function mapDispatchToProps(dispatch) {
  return {
    closeModal() { dispatch(dispatchModalClose()); }
  }
}

const ModalConnect = connect(mapStateToProps, mapDispatchToProps)(Modal);

export {
  ModalConnect as Modal,
  Modal as Mdl
};