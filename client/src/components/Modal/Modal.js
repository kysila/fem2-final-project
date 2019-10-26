import React from 'react';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';

import { Header } from '../../commons/Header/Header';

import { dispatchModalClose } from '../../store/modal/actions';

function ModalWindow(props) {
  const onClose = () => props.closeModal();

  return (
    <Modal open={props.opened} onClose={onClose}>
      <React.Fragment>
        <Header callCenter="1-855-324-5387" subMenuHidden />
        {props.children}
      </React.Fragment>
    </Modal>
  );
}

function mapStateToProps(state) {
  return {
    opened: state.modal.opened,
    children: state.modal.child,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    closeModal() { dispatch(dispatchModalClose()); },
  };
}

const ModalConnect = connect(mapStateToProps, mapDispatchToProps)(ModalWindow);

export {
  ModalConnect as Modal,
  ModalWindow as Mdl,
};
