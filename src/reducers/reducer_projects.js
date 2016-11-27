import { LOAD_PROJECTS } from '../actions/index';

export default function(state = [], action) {
  console.log('load projects Action received: ', action);
  switch(action.type) {
    case LOAD_PROJECTS:
      let projects = {}
        action.payload.data.forEach( data => {
          projects[ data._id ] = {
          data: [data]
        }
      });
      return state.setIn( [ action.formName ], fromJS( projects ) );
  }
  return state;
}
