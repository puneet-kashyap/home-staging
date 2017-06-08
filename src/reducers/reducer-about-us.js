import * as db from './firebaseDB';

const initialState = db.about

const AboutUsReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'UPDATE_ABOUT_US':
        return {...state, 
            aboutUs:{
                p1: action.aboutUs.p1,
                p2: action.aboutUs.p2,
                p3: action.aboutUs.p3,
                p4: action.aboutUs.p4   
            },
            doYouKnow:{
                p1: action.doYouKnow.p1
            }
    }
    default:
      return state
  }
}

export default AboutUsReducer;