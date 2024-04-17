function remove() {

	let idDelete = document.getElementById("idDelete").value;

	let urlDelete = "http://localhost:8080/full-stack-project/deleteStudent";

	let parameterDeleteID = `id=${idDelete}`;

	let requestOptionsDelete = {
		method: "POST",
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body: parameterDeleteID
	}

	fetch(urlDelete, requestOptionsDelete).then(response => {
		if (response.ok) {
			return response.json();
		} else {
			throw "HTTP status code is " + response.status;
		}
	})
		.then(status => {
			processResponseStatusDelete(status);
			if (status.errorCode === 0) {
				document.getElementById("popupFormDelete").style.display = "none";
				document.querySelector(".backdrop").style.display = "none";
				getDataFromServer();
			}
		})
		.catch(errorText => console.error("Fetch failed: " + errorText));
}

function processResponseStatusDelete(status) {
	if (status.errorCode === 0) {
		alert("Student data deleted!");
	} else if (status.errorCode === 1) {
		alert("Student data not deleted. Unknown student id!");
	} else {
		alert("The database is temporarily unavailable. Please try again later");
	}
}

document.getElementById("buttonDelete").addEventListener("click", function(event) {
	event.preventDefault(); // Prevent default form submission behavior
	remove();
});

