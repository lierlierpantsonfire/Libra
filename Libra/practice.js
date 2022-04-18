
const firebaseConfig = {
    apiKey: "AIzaSyAOji9mszEf5__pKDFBaVXYoPL1T15ty4w",
    authDomain: "kwitter-5743b.firebaseapp.com",
    databaseURL: "https://kwitter-5743b-default-rtdb.firebaseio.com",
    projectId: "kwitter-5743b",
    storageBucket: "kwitter-5743b.appspot.com",
    messagingSenderId: "302454570736",
    appId: "1:302454570736:web:7ebb201e56a6046b054c35",
    measurementId: "G-LG4FCRNRFJ"
  };

function adduser()
{
    user_name = document.getElementById("user_name").value;
    firebaseConfig.database().ref("/").child(user_name).update({
        purpose : "adding user"
    })
}