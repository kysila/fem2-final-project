export const ACTIONS = Object.seal({
  MODAL_OPEN: 'MODAL_OPEN',
  MODAL_CLOSE: 'MODAL_CLOSE',
});

export default function (state = { opened: false, child: null, inject: null }, { type, payload, inject }) {
  let newState = state;

  switch (type) {
    case ACTIONS.MODAL_OPEN:
      newState = {
        ...newState, opened: true, child: payload, inject,
      };
      break;
    case ACTIONS.MODAL_CLOSE:
      newState = {
        ...newState, opened: false, child: null, inject: null,
      };
      break;
    default:
      break;
  }

  return newState;
}
