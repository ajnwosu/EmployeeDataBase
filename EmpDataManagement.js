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
  		monthlyRate: monthlyRate
  	});

  });

});