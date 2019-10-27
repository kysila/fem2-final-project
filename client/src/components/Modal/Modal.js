import React from 'react';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';

import { Header } from '../../commons/Header/Header';
import { dispatchModalClose } from '../../store/modal/actions';

import { LoginForm } from '../Auth/LoginForm';
import { RegisterForm } from '../Auth/RegisterForm';

function ModalWindow(props) {
  const onClose = () => props.closeModal();
  const getChild = () => {
    switch (props.child) {
      case 'register':
        return <RegisterForm />;
      case 'login':
      default:
        return <LoginForm />;
    }
  };
  return (
    <Modal open={props.opened} onClose={onClose}>
      <React.Fragment>
        <Header callCenter="1-855-324-5387" subMenuHidden />
        {getChild()}
      </React.Fragment>
    </Modal>
  );
}

const mapStateToProps = (state) => ({
  opened: state.modal.opened,
  child: state.modal.child,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(dispatchModalClose()),
});

const ModalConnect = connect(mapStateToProps, mapDispatchToProps)(ModalWindow);

export {
  ModalConnect as Modal,
  ModalWindow as Mdl,
};
