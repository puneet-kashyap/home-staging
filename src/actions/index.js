import fire from '../fire';
import {store} from '../index'
import * as db from '../reducers/firebaseDB';

export const storageEnabled = () => {
    try {
        localStorage.setItem('init', 'yes');
        if (localStorage.getItem('init') === 'yes') {
            localStorage.removeItem('init');
            return true
        } else {
            return false
        }
    } catch(e) {
        return false
    }
}

const getSessionStorage = () => {
  let snapshot
  if ((!storageEnabled()) && (!sessionStorage.snapshot)){
    snapshot = db
    console.log('Local memory used')
  } else {
    snapshot = sessionStorage.getItem('snapshot');
  }
  return JSON.parse(snapshot)
}
const dataB = getSessionStorage()

export const updateStore = (database=dataB) => {
  store.dispatch({
      type:'UPDATE_OWNER',
          owner1 : {
              name: database.owners.owner1.name,
              phone : database.owners.owner1.phone,
              email : database.owners.owner1.email,
              address1 : database.owners.owner1.address1,
              address2 : database.owners.owner1.address2
          },
          owner2 : {
            name: database.owners.owner2.name,
            phone : database.owners.owner2.phone,
            email : database.owners.owner2.email,
            address1 : database.owners.owner2.address1,
            address2 : database.owners.owner2.address2
          }
  })
  store.dispatch({
      type:'UPDATE_PRICE',
          consultation : {
              small: database.prices.consultation.small,
              medium : database.prices.consultation.medium,
              large : database.prices.consultation.large
          },
          gold : {
              small : database.prices.gold.small,
              medium : database.prices.gold.medium,
              large : database.prices.gold.large,
          }
  })
  store.dispatch({
      type:'UPDATE_SERVICE',
          consultation : {
              p1: database.services.consultation.p1
          },
          gold : {
              p1: database.services.gold.p1,
              p2: database.services.gold.p2
          },
          silver : {
              p1: database.services.silver.p1,
              p2: database.services.silver.p2
          },
          platinum : {
              p1: database.services.platinum.p1,
              p2: database.services.platinum.p2
          }
  })
  store.dispatch({
      type:'UPDATE_ABOUT_US',
          aboutUs : {
              p1: database.about.aboutUs.p1,
              p2: database.about.aboutUs.p2,
              p3: database.about.aboutUs.p3,
              p4: database.about.aboutUs.p4
          },
          doYouKnow : {
              p1: database.about.doYouKnow.p1
          }
  })
}

export const initDB = () => {
  if (storageEnabled() && (!sessionStorage.snapshot)){
    const dbRef = fire.database().ref();
    dbRef.once("value")
    .then(function(snapshot) {
      let stringSnapshot = JSON.stringify(snapshot)
      let parsedSnapshot = JSON.parse(stringSnapshot)
      updateStore(parsedSnapshot)
        sessionStorage.setItem('snapshot',stringSnapshot)
        console.log('Database initiated with session storage')
    });
  } else {
    updateStore()
    console.log('Memory store used')
  }
}
