import { INPUT } from '../constants';

const updateInput = event => ({
  type: INPUT.UPDATE,
  payload: event.target.value,
});

export { updateInput };
