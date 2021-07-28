
var firebaseConfig = {
      apiKey: "AIzaSyDMXFNoxQ2yucRPpcygzRyyzM3oCxQ_TgY",
      authDomain: "kwitter-game.firebaseapp.com",
      databaseURL: "https://kwitter-game-default-rtdb.firebaseio.com",
      projectId: "kwitter-game",
      storageBucket: "kwitter-game.appspot.com",
      messagingSenderId: "1056599167072",
      appId: "1:1056599167072:web:bcac818200ea092af4f305",
      measurementId: "G-GMYWRJDLKD"
    };
    
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      row="<div class='room_name' id='"+Room_names+"' onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;

     
      });});}
getData();
username=localStorage.getItem("username");
document.getElementById("username").innerHTML="welcome "+username;
function addroom() {
 roomname=document.getElementById("room_name").value;
 firebase.database().ref("/").child(roomname).update({
       purpose:"adding room name"
 });
 localStorage.setItem("roomname",roomname);
     window.location="kwitter_page.html";
}
function redirect(name) {
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}