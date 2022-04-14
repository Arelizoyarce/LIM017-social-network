import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';
import { app } from './firebaseConfiguration.js';

// registrar usuario
const auth = getAuth(app);

export const registerWithEmailFb = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            // return user.email
            // ...
        })
        // .catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     console.log(errorMessage);
        //     // ..
        // });
};
export const updateProfilefb = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
    }).then(() => {
        // Profile updated!
        // ...
        console.log('ya actualice tu nombre y foto');
    }).catch((error) => {
        // An error occurred
        // ...
        console.log('error al actualizar');
    });
}
export const sendEmailfb = () => {
    return sendEmailVerification(auth.currentUser)
        .then(() => {
            // Email verification sent!
            // ...
            console.log('email enviado');
        });
}
export const registerWithGoogleFb = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user);
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
}
export const loginFb = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            console.log('logueado con exito')
            const userData = {
                userName: user.displayName,
                userState: user.emailVerified,
                userPhoto: user.photoURL,
                userUid: user.uid
            }
            return userData;
            // ...
        })


}
export const logOutfb = () => {
    return signOut(auth)
        .then(() => {
            console.log('Se esta cerrando la sesion')
                // Sign-out successful.
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // An error happened.
        });

}