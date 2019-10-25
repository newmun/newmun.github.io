(function() {
  const config = {
    
        apiKey: "AIzaSyAP6ZgvRsErDr3prF8InGq0c-qr5Y4RQYc",
        authDomain: "newmunlive.firebaseapp.com",
        databaseURL: "https://newmunlive.firebaseio.com",
        projectId: "newmunlive",
        storageBucket: "",
        messagingSenderId: "674061236225",
        appId: "1:674061236225:web:c0d7c445791bdccf67e800"
      
  };

  firebase.initializeApp(config);
  const bigTextEvaluationStudents = document.getElementById('bigTextEvaluationStudents');
  const dbBigTextEvaluationStudentsRef = firebase.database().ref().child('users');
  dbBigTextEvaluationStudentsRef.on('value', snap => bigTextEvaluationStudents.innerText = snap.val());

  var table = document.querySelector('#table1 tbody');
  const dbEvaluationStudentsRef = firebase.database().ref().child('users');
  dbEvaluationStudentsRef.on('value', snap => {
    while(table.hasChildNodes()) {
		    table.removeChild(table.firstChild);
	  }

    var students = snap.val();
    for(var i in students) {
	
      var row = table.insertRow(-1);
      for(var j in students[i]) {
				
				row.innerHTML = students[i];
			}
		}
  });
}());
