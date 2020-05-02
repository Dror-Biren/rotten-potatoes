import { firebase } from './firebase';
const postersRef = firebase.storage().ref().child("posters");

function getRandomFileName() {
   const getRandomString = () => Math.random().toString(36).substr(2, 11)
   return "_" + getRandomString() + getRandomString() + getRandomString()
}

export function uploadPoster(posterFile) {
   const posterRef = postersRef.child( getRandomFileName() );
   //console.log({posterFile})
   
   return posterRef.put(posterFile)
      .then(function (snapshot) {
         console.log('img was uploaded!');
         return posterRef.getDownloadURL();
      })
      .catch((error) => {
         console.log('img uploading was failed...', error);
      });
}

/*
export function getPosterUrl (posterId = "1") { 
   return postersRef.child(posterId).getDownloadURL()
      .then((url) => {
         console.log({url})
         return url
      })
      .catch((error) => {
         console.log(error)
      })
}

export default function savePhoto() {
    var url = "http://www.planetware.com/photos-large/F/france-paris-eiffel-tower.jpg";
    // First, download the file:
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function (event) {
        var blob = xhr.response;

        // Define where to store the picture:
        var picRef = firebase.storage().ref();

        // Store the picture:
        picRef.put(blob).then(function (snapshot) {
            console.log('Picture uploaded!');

            // Now get image from storage and display in div...
            picRef.getDownloadURL().then(function (pic) {
                console.log({pic})

                //var userspic = pic;
                //document.getElementById('picTestImage').src = userspic;

            }).catch(function (error) {
                console.log("There was an error: " + error);
            });

        });


    };
    xhr.open('GET', url);
    xhr.send();
}


function getBlob(url) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = function (event) {
            var blob = xhr.response;
            resolve(blob);
        };
        xhr.onerror = reject();
        xhr.open('GET', url);
        xhr.send();
    })
}

export default function (oldURL, newName) {
    getBlob(oldURL)
        .then(function (blob) {
            console.log(1)
            var picRef = firebase.storage().ref().child(newName);
            console.log(2)
            return picRef.put(blob)
        })
        .then(function (snapshot) {
            console.log(3)
            return snapshot.downloadURL;
        })
        .catch((error) => {
            console.log("failed to upload img:", error)
        })
}
*/

