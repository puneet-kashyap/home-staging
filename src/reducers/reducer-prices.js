import * as db from './firebaseDB';

const initialState = db.prices;

const PriceReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'UPDATE_PRICE':
        return {...state, 
            consultation:{
                small: action.consultation.small,
                medium: action.consultation.medium,
                large: action.consultation.large
            },
            gold:{
                small: action.gold.small,
                medium: action.gold.medium,
                large: action.gold.large
            }
    }
    default:
      return state
  }
}

export default PriceReducer;