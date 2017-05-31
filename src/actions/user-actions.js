import fire from '../fire';
import {store} from '../index'


var ref = fire.database().ref();

export const initiateDB = () => {
    ref.once("value")
    .then(function(snapshot) {
        let owner1 = snapshot.child('owners').child('owner1')
        let owner2 = snapshot.child('owners').child('owner2')
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
    });
}