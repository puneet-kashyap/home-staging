import * as db from './firebaseDB';

const initialState = db.services;

const ServicesReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SERVICE':
        return {...state, 
            consultation:{
                p1: action.consultation.p1,
            },
            gold:{
                p1: action.gold.p1,
                p2: action.gold.p2
            },
            silver:{
                p1: action.silver.p1,
                p2: action.silver.p2
            },
            platinum:{
                p1: action.platinum.p1,
                p2: action.platinum.p2
            }
    }
    default:
      return state
  }
}

export default ServicesReducer;