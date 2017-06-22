$(document).ready(function() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBGJ481PEl1pSk6Z06BX6HKd-YsL-klRA8",
    authDomain: "empdat.firebaseapp.com",
    databaseURL: "https://empdat.firebaseio.com",
    projectId: "empdat",
    storageBucket: "",
    messagingSenderId: "155340612682"
  };

  firebase.initializeApp(config);

  var database = firebase.database();
  var employee;
  var role;
  var startDate;
  var monthlyRate;

  console.log("the page loaded");

  $(document).on("click", "#btnSubmit", function(event){

  	event.preventDefault();

  	console.log("clicking");

  	employee = $("#employee-name").val().trim();
  	role = $("#role").val().trim();
  	startDate = $("#startdate").val().trim();
  	monthlyRate = $("#monthlyrate").val().trim();

  	database.ref().push({
  		employee:employee,
  		role:role,
  		startDate:startDate,
  		monthlyRate: monthlyRate,
  		dataAdded: firebase.database.ServerValue.TIMESTAMP
  	});

  	database.ref().on("child_added",function(childSnapshot){

  		// console.log(childSnapshot.val().employee);
  		// console.log(childSnapshot.val().role);
  		// console.log(childSnapshot.val().startDate);
  		// console.log(childSnapshot.val().monthlyRate);

  		$("#table-display").append('<tr>'
                                  + '<td>' + childSnapshot.val().employee +'</td>'
                                  + '<td>' + childSnapshot.val().role +'</td>'
                                  + '<td>' + childSnapshot.val().startDate +'</td>'
                                  + '<td>' + childSnapshot.val().monthlyRate +'</td>'
                                  + '<td>' + '23' +'</td>'
                                  + '<td>' + '30' +'</td>'
                                  +'</tr>'
        );

  	})

  });

  function pullData(){

  }

});