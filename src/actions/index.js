import fire from '../fire';
import {store} from '../index'

export const initiateStorage = () => {
    const storageRef = fire.storage().ref().child('company-logo/logo.png');
    storageRef.getDownloadURL().then(function(url){
        const logoUrl = url
        store.dispatch({
            type: 'UPDATE_STORAGE',
            logo: logoUrl
        })
    }) 
}

export const initiateDB = () => {
    const dbRef = fire.database().ref();
    dbRef.once("value")
    .then(function(snapshot) {
        let owner1 = snapshot.child('owners/owner1')
        let owner2 = snapshot.child('owners/owner2')
        let prices = snapshot.child('prices')
        let services = snapshot.child('services')
        let aboutUs = snapshot.child('about')
        store.dispatch({
            type:'UPDATE_OWNER', 
                owner1 : {
                    name: owner1.child('name').val(),
                    phone : owner1.child('phone').val(),
                    email : owner1.child('email').val(),
                    address1 : owner1.child('address1').val(),
                    address2 : owner1.child('address2').val()
                },
                owner2 : {
                    name : owner2.child('name').val(), 
                    phone : owner2.child('phone').val(), 
                    email : owner2.child('email').val(),
                    address1 : owner2.child('address1').val(),
                    address2 : owner2.child('address2').val()
                }
        })
        store.dispatch({
            type:'UPDATE_PRICE', 
                consultation : {
                    small: prices.child('consultation/small').val(),
                    medium : prices.child('consultation/medium').val(),
                    large : prices.child('consultation/large').val()
                },
                gold : {
                    small : prices.child('gold/small').val(), 
                    medium : prices.child('gold/medium').val(), 
                    large : prices.child('gold/large').val()
                }
        })
        store.dispatch({
            type:'UPDATE_SERVICE', 
                consultation : {
                    p1: services.child('consultation/p1').val()
                },
                gold : {
                    p1: services.child('gold/p1').val(), 
                    p2: services.child('gold/p2').val()
                },
                silver : {
                    p1: services.child('silver/p1').val(), 
                    p2: services.child('silver/p2').val()
                },
                platinum : {
                    p1: services.child('platinum/p1').val(), 
                    p2: services.child('platinum/p2').val()
                }
        })
        store.dispatch({
            type:'UPDATE_ABOUT_US', 
                aboutUs : {
                    p1: aboutUs.child('aboutUs/p1').val(),
                    p2: aboutUs.child('aboutUs/p2').val(),
                    p3: aboutUs.child('aboutUs/p3').val(),
                    p4: aboutUs.child('aboutUs/p4').val()
                },
                doYouKnow : {
                    p1: aboutUs.child('doYouKnow/p1').val()
                }
        })
    });
}