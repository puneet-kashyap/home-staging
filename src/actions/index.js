import fire from '../fire';
import {store} from '../index'

const getSessionStorage = () => {
  const snapshot = JSON.parse(sessionStorage.getItem('snapshot'));
  return snapshot
}

export const updateStore = () => {
  store.dispatch({
      type:'UPDATE_OWNER',
          owner1 : {
              name: getSessionStorage().owners.owner1.name,
              phone : getSessionStorage().owners.owner1.phone,
              email : getSessionStorage().owners.owner1.email,
              address1 : getSessionStorage().owners.owner1.address1,
              address2 : getSessionStorage().owners.owner1.address2
          },
          owner2 : {
            name: getSessionStorage().owners.owner2.name,
            phone : getSessionStorage().owners.owner2.phone,
            email : getSessionStorage().owners.owner2.email,
            address1 : getSessionStorage().owners.owner2.address1,
            address2 : getSessionStorage().owners.owner2.address2
          }
  })
  store.dispatch({
      type:'UPDATE_PRICE',
          consultation : {
              small: getSessionStorage().prices.consultation.small,
              medium : getSessionStorage().prices.consultation.medium,
              large : getSessionStorage().prices.consultation.large
          },
          gold : {
              small : getSessionStorage().prices.gold.small,
              medium : getSessionStorage().prices.gold.medium,
              large : getSessionStorage().prices.gold.large,
          }
  })
  store.dispatch({
      type:'UPDATE_SERVICE',
          consultation : {
              p1: getSessionStorage().services.consultation.p1
          },
          gold : {
              p1: getSessionStorage().services.gold.p1,
              p2: getSessionStorage().services.gold.p2
          },
          silver : {
              p1: getSessionStorage().services.silver.p1,
              p2: getSessionStorage().services.silver.p2
          },
          platinum : {
              p1: getSessionStorage().services.platinum.p1,
              p2: getSessionStorage().services.platinum.p2
          }
  })
  store.dispatch({
      type:'UPDATE_ABOUT_US',
          aboutUs : {
              p1: getSessionStorage().about.aboutUs.p1,
              p2: getSessionStorage().about.aboutUs.p2,
              p3: getSessionStorage().about.aboutUs.p3,
              p4: getSessionStorage().about.aboutUs.p4
          },
          doYouKnow : {
              p1: getSessionStorage().about.doYouKnow.p1
          }
  })
}

export const initDB = () => {
    const dbRef = fire.database().ref();
    dbRef.once("value")
    .then(function(snapshot) {
        sessionStorage.setItem('snapshot',JSON.stringify(snapshot))
        sessionStorage.initiated = true
        updateStore()
    });
}
