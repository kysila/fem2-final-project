export const ACTIONS = Object.seal({
  MODAL_OPEN: 'MODAL_OPEN',
  MODAL_CLOSE: 'MODAL_CLOSE',
});

export default function (state = {}, { type, payload }) {
  let newState = state;

  switch (type) {
    case ACTIONS.MODAL_OPEN:
      newState = { ...newState, opened: true, child: payload };
      break;
    case ACTIONS.MODAL_CLOSE:
      newState = { ...newState, opened: false, child: null };
      break;
    default:
      break;
  }

  return newState;
}
