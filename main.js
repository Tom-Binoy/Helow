function login(){
    console.log("ok")
    user = document.getElementById("name").value;
    localStorage.setItem("user",user);
    window.location = "Room.html";

}

function teach(){
    teach = "Teacher";
    localStorage.setItem("person",teach);
    row = '<label>User Name:</label><input type="text" class="form-control" id="name" placeholder="Type Your Name Please"><br><button id="login_button" onclick ="login()" class="btn btn-primary">Login</button>'
    document.getElementById("user_name").innerHTML = row;
    document.getElementById("user").innerHTML = "";
}

function stud(){
    teach = "Student";
    localStorage.setItem("person",teach);
    row = '<label>User Name:</label><input type="text" class="form-control" id="name" placeholder="Type Your Name Please"><br><button id="login_button" onclick ="login()" class="btn btn-primary">Login</button>'
    document.getElementById("user_name").innerHTML = row;
    document.getElementById("user").innerHTML = "";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
