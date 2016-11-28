import { FETCH_PROJECTS } from '../actions/index';
import { Map, fromJS } from 'immutable';

let initialState = fromJS({
	projects: {},
});

export default function(state = initialState, action={}) {
  console.log('Action received: ', action);
  switch(action.type) {
    case FETCH_PROJECTS:
      return [action.payload.data, ...state];
  		return state.setIn( [ action.formName ], fromJS( projects ) );
    }
  return state;
}
