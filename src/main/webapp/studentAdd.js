function add() {
	
    let id = document.getElementById("id").value;
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let streetaddress = document.getElementById("streetaddress").value;
    let postcode = document.getElementById("postcode").value;
    let postoffice = document.getElementById("postoffice").value;

    let url = "http://localhost:8080/full-stack-project/addStudent";

    let parameter = `id=${id}&firstname=${firstname}&lastname=${lastname}&streetaddress=${streetaddress}&postcode=${postcode}&postoffice=${postoffice}`;

    let requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: parameter
    }

    fetch(url, requestOptions)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw "HTTP status code is " + response.status;
            }
        })
        .then(status => {
            processResponseStatus(status);
            if (status.errorCode === 0) {
                document.getElementById("popupForm").style.display = "none";
                document.querySelector(".backdrop").style.display = "none"; 
                getDataFromServer();
            }
        })
        .catch(errorText => console.error("Fetch failed: " + errorText));
}

function processResponseStatus(status) {
    if (status.errorCode === 0) {
        alert("Student data added!");
    } else if (status.errorCode === 1) {
        alert("Cannot add the student. The id is already in use!");
    } else {
        alert("The database is temporarily unavailable. Please try again later");
    }
}

document.getElementById("buttonSubmit").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    add();
});
