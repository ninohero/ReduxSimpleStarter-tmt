import { LOAD_PROJECTS } from '../actions/index';

export default function(state = [], action) {
  console.log('load projects Action received: ', action);
  switch(action.type) {
    case LOAD_PROJECTS:
      let contracts = {}
        action.payload.data.forEach( data => {
          contracts[ data._id ] = {
          details: [],
          events: [],
          data: [data]
        }
      });
      return state.setIn( [ action.formName ], fromJS( contracts ) );
  }
  return state;
}
