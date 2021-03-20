var firebaseConfig = {
  apiKey: "AIzaSyCctZpV6bXX8HtkvkIonbr5cf6LXx2mavo",
  authDomain: "contact-form-e87df.firebaseapp.com",
  projectId: "contact-form-e87df",
  storageBucket: "contact-form-e87df.appspot.com",
  messagingSenderId: "1020446908511",
  appId: "1:1020446908511:web:9361eff2c37d01d608bbea",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let messageRef = firebase.database().ref("messages");

function myFunction() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}

document.getElementById("contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  saveContactInfo(name, email, phone, message);

  document.querySelector(".alert").style.display = "block";

  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  document.getElementById("contact-form").reset();
}

function saveContactInfo(name, email, phone, message) {
  let newContactInfo = messageRef.push();
  newContactInfo.set({
    name: name,
    email: email,
    phone: phone,
    message: message,
  });
}
