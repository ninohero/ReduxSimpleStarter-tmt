import { SAVEFORM } from '../constants';
import { Map } from 'immutable';

let initialState = new Map({
  project: new Map({
    create: new Map()
  })
});

export default function update(state = initialState, action) {

  if(action.type === SAVEFORM) {
    return state.setIn( [action.formstate.formName, 'create'], new Map( action.formstate.data ) );
  }

  return state;
}
