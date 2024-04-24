document.querySelector("tbody").addEventListener('click', function(event) {
	if (event.target.classList.contains("gg-pen")) {

		//get data from the clicked row
		const row = event.target.closest('tr');
		const id = row.querySelector('td:first-child').id;
		const lastname = row.querySelector('td:nth-child(2)').innerText;
		const firstname = row.querySelector('td:nth-child(3)').innerText;
		const streetaddress = row.querySelector('td:nth-child(4)').innerText;
		const postcode = row.querySelector('td:nth-child(5)').innerText;
		const postoffice = row.querySelector('td:nth-child(6)').innerText;

		//parse data into the update form
		document.getElementById('idUpdate').value = id;
		document.getElementById('firstnameUpdate').value = firstname;
		document.getElementById('lastnameUpdate').value = lastname;
		document.getElementById('streetaddressUpdate').value = streetaddress;
		document.getElementById('postcodeUpdate').value = postcode;
		document.getElementById('postofficeUpdate').value = postoffice;

		//disable updating id 
		document.getElementById('idUpdate').disabled = true;

		document.getElementById('popupFormUpdate').style.display = 'block';

	}
})