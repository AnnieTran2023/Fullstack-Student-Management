function search(idSearch) {

	let urlSearch = "http://localhost:8080/full-stack-project/studentSearch";

	let parameterSearchID = `id=${idSearch}`;

	let requestOptionsSearch = {
		method: "POST",
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body: parameterSearchID
	}

	fetch(urlSearch, requestOptionsSearch).then(response => {
		if (response.ok) {
			return response.json();
		} else {
			throw "HTTP status code is " + response.status;
		}
	})
		.then(data => displaySearch(data))
		.catch(errorText => console.error("Fetch failed: " + errorText));
}

function displaySearch(student) {
	
	let container = document.querySelector(".container");


	if (student == null) {
		container.innerHTML =  "<div style='text-align: center; color: red; font-weight: 400;'>Unknown ID</div>";
		return
	}

	let display =
		`<tr> 
    		<td id="${student.id}">${student.id}</td>
    		<td>${student.lastname}</td>
    		<td>${student.firstname}</td>
    		<td>${student.streetaddress}</td>
    		<td>${student.postcode}</td>
    		<td>${student.postoffice}</td>
    		<td class="icon"><i class="gg-pen"></i></td> 
			<td class ="icon"><i class="gg-trash"></i></td> 
  				</tr>`;

	container.innerHTML = display;
}

document.querySelector(".gg-search").addEventListener('click', function() {
	let idSearch = document.getElementById("idSearch").value;
	console.log(idSearch);
	console.log('click');
	search(idSearch);
})