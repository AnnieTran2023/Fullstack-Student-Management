
function getDataFromServer() {

	let url = "http://localhost:8080/full-stack-project/students";

	fetch(url).then(response => response.json()).then(data => displayText(data));

}

function displayText(data) {

	let container = document.querySelector(".container");
	let display = "";

	for (student of data) {
		let output = `<tr> 
    		<td id="${student.id}">${student.id}</td>
    		<td>${student.lastname}</td>
    		<td>${student.firstname}</td>
    		<td>${student.streetaddress}</td>
    		<td>${student.postcode}</td>
    		<td>${student.postoffice}</td>
    		<td class="icon"><i class="gg-pen"></i></td> 
			<td class ="icon"><i class="gg-trash"></i></td> 
  				</tr>`;

		display += output;
	}

	container.innerHTML = display;
}

getDataFromServer();