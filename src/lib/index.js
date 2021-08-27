/* eslint-disable no-unused-vars */
import { logInWithGoogle, logOut /* registerWithEmail */ } from '../firebase/firebaseAuth.js';

// inicio de sesion con google
export const logInWithGoogleClick = () => {
  const messageError = document.querySelector('#error-logueo');
  logInWithGoogle()
    .then(() => {
      const user = firebase.auth().currentUser;
      if (user != null) {
        window.location.hash = '#/Home';
        messageError.innerHTML = '';
      }
    })
    .catch((error) => {
      // Manejar errores aquí.
      const errorCode = error.code;
      const errorMessage = error.message;
      // El correo electrónico de la cuenta del usuario utilizada.
      const email = error.email;
    });
};

// funcion para agregar post
export const writePost = (event) => {
  event.preventDefault();
  const post = document.getElementById('contentPost').value;
  const user = currentUser();
  const photo = currentUser().photoURL;
  if (post !== '') {
    postCollection(user.email, user.displayName, user.uid, post, photo)
      .then(() => {
        document.getElementById('contentPost').value = '';
        console.log('agregando post');
      }).catch((error) => {
        console.log('no se agregó post', error);
      });
  } else {
    alert('Ingrese su post');
  }
};

export const observadorWatcher = () => {
  firebase.auth().onAuthStateChanged((user) => {
    let photo;
    let name;
    if (user !== null) {
      name = user.displayName;
      photo = user.photoURL;
      console.log(user);
      // menuNavegacionHome(displayName, photoURL);
    } else {
      window.location.hash = '#/LogIn';
    }
  });
};

// cerrar sesion
export const logOutClick = () => {
  logOut()
    .then(() => {
      window.location.hash = '#/LogIn';
    })
    .catch((err) => {
    });
};
