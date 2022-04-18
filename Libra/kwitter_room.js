
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
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       function addroom()
       {
             Room_name = document.getElementById("room_name").value;
 
             firebase.database().ref("/").child(room_name).update({
                   purpose : "adding room name"
             });
 
             localStorage.setItem("room_name", room_name);
 
             window.location = "kwitter_page.html";
       }
      });});}
getData();

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;

      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";

      function redirectToRoomName(name)
      {
            console.log(name);
            localStorage.setItem("room_name", name);
            window.location = "kwitter_page.html";
      }

