import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'

const app = firebase.initializeApp({
    apiKey: "AIzaSyCVUQoigHUrsRvj7DjrkVGC0snSGqobH98",
    authDomain: "thing-list-cb151.firebaseapp.com",
    databaseURL: "https://thing-list-cb151.firebaseio.com",
    projectId: "thing-list-cb151",
    storageBucket: "thing-list-cb151.appspot.com",
    messagingSenderId: "109010597794"
})
const db = database(app)

export default Rebase.createClass(db)