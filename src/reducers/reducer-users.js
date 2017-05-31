const initialState = {
    owner1: {
        name:'Sonia'
    },
    owner2: {
        name:'Simar'
    }
}

const UserReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'UPDATE_OWNER':
      return {...state, 
        owner1:{
            name: action.owner1.name,
            phone: action.owner1.phone,
            email: action.owner1.email
        },
        owner2:{
            name: action.owner2.name,
            phone: action.owner2.phone,
            email: action.owner2.email
        }
    }
    default:
      return state
  }
}

export default UserReducer;