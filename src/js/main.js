"use strict";

import { isNullOrUndefined } from "util";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below
console.log(`Hello world!`);

const glassCounter = document.querySelector('.glass__number--js');
const addGlassButton = document.querySelector('.buttons__add--js');
const removeGlassButton = document.querySelector('.buttons__remove--js');
const todayStartDate = new Date().toISOString().slice(0, 10);
const localStorageInitialValue = localStorage.getItem(todayStartDate);

if (isNullOrUndefined(localStorageInitialValue)) {
  glassCounter.innerHTML = 0;
  saveValueToLocalStorage(glassCounter.innerHTML);
} else {
  glassCounter.innerHTML = localStorage.getItem(todayStartDate);
}



addGlassButton.addEventListener('click', e => addGlass());
removeGlassButton.addEventListener('click', e => removeGlass());





function addGlass() {
  if (glassCounter.innerHTML < 10) {
    glassCounter.innerHTML++;
    saveValueToLocalStorage(glassCounter.innerHTML);
  }
    
}

function removeGlass() {
  if (glassCounter.innerHTML > 0) {
    glassCounter.innerHTML--;
    saveValueToLocalStorage(glassCounter.innerHTML);
  }
    
}

function saveValueToLocalStorage(value) {
  const dateKey = new Date().toISOString().slice(0, 10);
  localStorage.setItem(dateKey, value);
}

