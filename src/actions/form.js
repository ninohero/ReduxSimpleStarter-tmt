import { SAVEFORM } from '../constants'; 

export function save( formName, data ) {
  return {    type: SAVEFORM,
    formstate: { formName: formName, data: data }
  }
}
