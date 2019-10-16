console.log('Forms and JS');

// Reading form data
document.getElementById('submit').addEventListener('click', function() {
	// Records the name inputted by the user
	var name = document.getElementById('name').value;
	console.log(name);

	// Records the address inputted by the user
	var address = document.getElementById('address').value;
	console.log(address);

	document.getElementById('formData').innerHTML = name + ' lives at ' + address;
});

// Blank arrays to be filled by the created fields in the HTML code
var eName = [];
var projectA = [];
var projectB = [];
var projectC = [];
var projectAverage = [];

// Prompt to help find the amount of details that are going to be entered
var n = parseInt(prompt('Enter the number of employees'));

// Reading form data
document.getElementById('submitE').addEventListener('click', function() {
	// Records the name inputted by the user
	var individualName = document.getElementById('eName').value;
	console.log(eName);

	// Records results for project A
	var projA = parseInt(document.getElementById('projectA').value);
	console.log(projA);
	// Records results for project B
	var projB = parseInt(document.getElementById('projectB').value);
	console.log(projB);
	// Records results for project C
	var projC = parseInt(document.getElementById('projectC').value);
	console.log(projC);

	// Finds the average performance of the employee
	var projAverage = ((projA + projB + projC) / 3).toFixed(2);

	document.getElementById('employeeResults').innerHTML += individualName + ': ' + projA + '% for project A, ' + projB + '% for project B, ' + projC + '% for project C.<br>' + '<b>Project Average:</b> ' + projAverage + '%';

	// Placing values into the array
	eName.push(individualName);
	projectA.push(projA);
	projectB.push(projB);
	projectC.push(projC);
	projectAverage.push(projAverage);
	console.log(eName, projectA, projectB, projectC, projectAverage);

	// Clears the form at the end ready for next input
	document.getElementById('employeeForm').reset();
});






















