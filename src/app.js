import { initFirebase } from './firebase'

document.addEventListener("DOMContentLoaded", function() {
  console.log('onload');

  initFirebase();


  var $form = document.querySelectorAll('#signup-form')[0],
    $submit = document.querySelectorAll('#signup-form input[type="submit"]')[0],
    $message;

  $message = document.createElement('span');
    $message.classList.add('message');
    document.querySelector('#signup-form').appendChild($message);

  $message._show = function(type, text) {

    $message.innerHTML = text;
    $message.classList.add(type);
    $message.classList.add('visible');

    window.setTimeout(function() {
      $message._hide();
    }, 3000);

  };

  $message._hide = function() {
    $message.classList.remove('visible');
  };


  document.querySelector('#signup-form').onsubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();

    $message._hide();
    $submit.disabled = true;

    const inputValue = document.querySelector('input[name=email]').value;

    const db = firebase.firestore();
    db.collection('desires').doc().set({
      answer: inputValue,
      time: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
      $form.reset();
      $submit.disabled = false;
      $message._show('success', 'Gracias!');
    })
  }
});

