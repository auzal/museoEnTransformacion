import { initFirebase } from './firebase'

document.addEventListener("DOMContentLoaded", function() {
  console.log('onload');

  initFirebase();

  document.querySelector('form').onsubmit = (e) => {
    e.preventDefault();

    console.log('submit!');

    const inputValue = document.querySelector('input[name=answer]').value;

    const db = firebase.firestore();
    db.collection('desires').doc().set({
      answer: inputValue,
      time: firebase.firestore.FieldValue.serverTimestamp()
    })

    document.querySelector('#questionForm').style.display = 'none';
    document.querySelector('#thanks').style.display = 'block';
  }
});