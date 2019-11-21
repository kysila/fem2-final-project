import React from 'react';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Box from '@material-ui/core/Box';
import Backdrop from '@material-ui/core/Backdrop';

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
      closeAfterTransition
      open={props.opened}
      BackdropComponent={Backdrop}
      BackdropProps={{
        style: {
          background: 'linear-gradient(180deg, #6686FF 0%, #8F8DE2 100%)',
          opacity: '0.5',
        },
        timeout: 700,
      }}
      onClose={onClose}
    >
      <Fade in={props.opened} timeout={{ enter: 700, exit: 700 }}>
        <Box>
          {getChild()}
        </Box>
      </Fade>
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
