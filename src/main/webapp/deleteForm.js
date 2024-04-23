let studentIdToDelete; // Variable to store the ID of the student to delete

function showDeleteConfirmationForm(event) {
    if (event.target.classList.contains('gg-trash')) {
        let row = event.target.closest('tr');
        studentIdToDelete = row.querySelector('td:first-child').innerText.trim();

        // Show the popup confirmation form
        document.getElementById('message').innerHTML = `Delete student with id ${studentIdToDelete}?`;
        document.getElementById('popupFormDelete').style.display = 'block';
        document.querySelector('.backdrop').style.display = 'block';

        // Remove any previously attached event listener
        document.getElementById('buttonDelete').addEventListener('click', handleDeleteButtonClick);

    }
}

function handleDeleteButtonClick(event) {
    event.preventDefault();
    remove(studentIdToDelete);
}

document.querySelector(".container").addEventListener("click", showDeleteConfirmationForm);

// Cancel button in deleteForm
document.getElementById('buttonCancel').addEventListener('click', function(event) {
    event.preventDefault();
    let form = document.getElementById('popupFormDelete');
    let backdrop = document.querySelector('.backdrop');
    form.style.display = 'none';
    backdrop.style.display = 'none';
});
