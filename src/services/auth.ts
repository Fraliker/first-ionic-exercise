import firebase from 'firebase';
// import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase/app';

export class AuthService {
  // constructor(private afAuth: AngularFireAuth){}
  signup(email:string, password:string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  signin(email:string, password:string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  logout() {
    firebase.auth().signOut();
  }

  signInWithFacebook() {
    firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(res => console.log(res));
  }

}
