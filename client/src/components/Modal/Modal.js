import React from 'react';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';

import { dispatchModalClose } from '../../store/modal/actions';

import { LoginForm } from '../Auth/LoginForm';
import { RegisterForm } from '../Auth/RegisterForm';
import { Map } from '../Map/Map';

function ModalWindow(props) {
  const onClose = () => props.closeModal();
  const getChild = () => {
    switch (props.child) {
      case 'register':
        return <RegisterForm {...props.inject} />;
      case 'map':
        if (props.inject.Container) {
          const { Container, ...injected } = props.inject;
          return (
            <Container>
              <Map {...injected} />
            </Container>
          );
        }
        return <Map {...props.inject} />;
      case 'login':
      default:
        return <LoginForm {...props.inject} />;
    }
  };
  return (
    <Modal
      open={props.opened}
      BackdropProps={{
        style: {
          background: 'linear-gradient(180deg, #6686FF 0%, #8F8DE2 100%)',
          opacity: '0.5',
        },
      }}
      onClose={onClose}
    >
      <React.Fragment>
        {getChild()}
      </React.Fragment>
    </Modal>
  );
}

const mapStateToProps = (state) => ({
  opened: state.modal.opened,
  child: state.modal.child,
  inject: state.modal.inject,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(dispatchModalClose()),
});

const ModalConnect = connect(mapStateToProps, mapDispatchToProps)(ModalWindow);

export {
  ModalConnect as Modal,
  ModalWindow as Mdl,
};
