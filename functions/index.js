const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);
const db = admin.database();
const galleryRef = db.ref("gallery");

exports.retrieveStorage = functions.storage.object().onFinalize((object) => {
    if (object.name.startsWith('Gallery/')){
        const name = object.name.split('/');
        const folderName = name[1];
        const fileName = name[2].split('.')[0];
        const downloadableUrl = `https://firebasestorage.googleapis.com/v0/b/${object.bucket}/o/${encodeURIComponent(object.name)}?alt=media&token=${process.env.mediaToken}`;
        // Saving downloadable url to db
        if (object.contentType.startsWith('image/')) {
            galleryRef.child(folderName).update({
                [fileName]: downloadableUrl
            });
        } else {
            console.log(`Non image file added ${fileName}`);
        }
        console.log(object);
    }
});

exports.onDeleteImages = functions.storage.object().onDelete((object) => {
    if (object.name.startsWith('Gallery/')) {
        const name = object.name.split('/');
        const folderName = name[1];
        const fileName = name[2].split('.')[0];
        //deletes the db reference when image is removed
        if (object.contentType.startsWith('image/')) {
            galleryRef.child(folderName).child(fileName).remove();
        }
        console.log(object);
    };
})
