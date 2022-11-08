//YOUR FIREBASE LINKS

welcome=localStorage.getItem("storage");
document.getElementById("welcome").innerHTML="Welcome "+welcome;

const firebaseConfig = {
      apiKey: "AIzaSyDlQghTwJK1w1hi7IZBCd3qvgEo4brFAMI",
      authDomain: "cursed-twitter.firebaseapp.com",
      databaseURL: "https://cursed-twitter-default-rtdb.firebaseio.com",
      projectId: "cursed-twitter",
      storageBucket: "cursed-twitter.appspot.com",
      messagingSenderId: "290851393679",
      appId: "1:290851393679:web:b058ee151dcfacd95e60fa"
};
firebase.initializeApp(firebaseConfig);
var room_name ="Donation Room";
Total ="";
Money1=0;
function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_amount_id = childKey;
                        amount_data = childData;
                        //Start code
                        console.log(amount_data);
                        console.log(firebase_amount_id);
                        //End code
                        name1 = amount_data['name'];
                        
                        Money = amount_data['amount'];
                        nameHTML = "<h4>" + name1 + "<img src='tick.png' class='user_tick'></h4>";
                        amountHTML = "<h4 class='message_h4'>" +"$ "+ Money + "</h4>"
                        localStorage.setItem("storage2",Money);
                        row=nameHTML+amountHTML;
                        document.getElementById("output").innerHTML+=row;
                        
                  }
            });
      });
     
}
getData();
function logout() {
      localStorage.removeItem("roomname");
      localStorage.removeItem("storage");
      window.location = "index.html";
      
}
function confirm() {
      total=localStorage.getItem("storage2");
     
      Total = document.getElementById("output").value;
      var amount = document.getElementById("amount").value;
      if(amount!=""){
      var room_username = localStorage.getItem("storage");
      firebase.database().ref(room_name).push({ name: room_username, amount:amount});
      document.getElementById("amount").value = "";
      document.getElementById("Total").innerHTML = "$"+total;
}
}


