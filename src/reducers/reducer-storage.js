 const initialState = {
}

const StorageReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'UPDATE_STORAGE':
        return {...state, 
            logo: action.logo
    }
    default:
      return state
  }
}

export default StorageReducer;