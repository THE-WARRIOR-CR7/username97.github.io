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
    username=localStorage.getItem("username");
    room_name=localStorage.getItem("roomname");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
console.log(firebase_message_id);
console.log(message_data);
like=message_data['like'];
message=message_data['message'];
name1=message_data['name1'];
namewithtag="<h4>"+name1+"<img class='user_tick' src='tick.png'></h4>";
messagewithtag="<h4 class='message_h4'>"+message+"</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
             span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
             row=namewithtag+messagewithtag+like_button+span_withtag;
             document.getElementById("output").innerHTML+=row;

      } });  }); }
getData();

function send() {
      msg=document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            name1:username,
            message:msg,
            like:0
      });
      document.getElementById("message").value="";
}function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}