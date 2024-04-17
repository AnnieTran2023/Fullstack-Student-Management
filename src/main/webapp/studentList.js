
function getDataFromServer() {

	let url = "http://localhost:8080/full-stack-project/students";

	fetch(url).then(response => response.json()).then(data => displayText(data));

}

function displayText(data) {

	let container = document.querySelector(".container");
	let display = "";

	for (student of data) {
		let output = `<tr> 
    		<td>${student.id}</td>
    		<td>${student.lastname}</td>
    		<td>${student.firstname}</td>
    		<td>${student.streetaddress}</td>
    		<td>${student.postcode}</td>
    		<td>${student.postoffice}</td>
  				</tr>`;

		display += output;
	}

	container.innerHTML = display;
}

getDataFromServer();