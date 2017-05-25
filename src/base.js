import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'
import 'firebase/auth'
const app = firebase.initializeApp({
    apiKey: "AIzaSyCVUQoigHUrsRvj7DjrkVGC0snSGqobH98",
    authDomain: "thing-list-cb151.firebaseapp.com",
    databaseURL: "https://thing-list-cb151.firebaseio.com",
    projectId: "thing-list-cb151",
    storageBucket: "thing-list-cb151.appspot.com",
    messagingSenderId: "109010597794"
})
const db = database(app)
export const auth = app.auth()
export const githubProvider = new firebase.auth.GithubAuthProvider()

export default Rebase.createClass(db)