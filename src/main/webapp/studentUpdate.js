function update() {

	let idUpdate = document.getElementById("idUpdate").value;
	let firstnameUpdate = document.getElementById("firstnameUpdate").value;
	let lastnameUpdate = document.getElementById("lastnameUpdate").value;
	let streetaddressUpdate = document.getElementById("streetaddressUpdate").value;
	let postcodeUpdate = document.getElementById("postcodeUpdate").value;
	let postofficeUpdate = document.getElementById("postofficeUpdate").value;

	let urlUpdate = "http://localhost:8080/full-stack-project/updateStudent";

	let parameterUpdate = `id=${idUpdate}&firstname=${firstnameUpdate}&lastname=${lastnameUpdate}&streetaddress=${streetaddressUpdate}&postcode=${postcodeUpdate}&postoffice=${postofficeUpdate}`;

	let requestOptionsUpdate = {
		method: "POST",
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body: parameterUpdate
	}
	fetch(urlUpdate, requestOptionsUpdate)
		.then(response => {
			if (response.ok) {
				return response.json();
			} else {
				throw "HTTP status code is " + response.status;
			}
		})
		.then(status => {
			processResponseStatusUpdate(status);
			if (status.errorCode === 0) {
				document.getElementById("popupFormUpdate").style.display = "none";
				document.querySelector(".backdrop").style.display = "none";
				getDataFromServer();
			}
		})
		.catch(errorText => console.error("Fetch failed: " + errorText));
}

function processResponseStatusUpdate(status) {
    if (status.errorCode === 0) {
        alert("Student data updated!");
    } else if (status.errorCode === 1) {
        alert("Cannot update student data. Try again!");
    } else {
        alert("The database is temporarily unavailable. Please try again later");
    }
}