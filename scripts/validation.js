document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const errorMessages = [];

    const name = document.getElementById('name').value;
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        errorMessages.push('Name must contain letters and spaces only.');
    }

    const email = document.getElementById('email').value;
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        errorMessages.push('Email must be in a valid format.');
    }

    const phone = document.getElementById('phone').value;
    if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(phone)) {
        errorMessages.push('Phone number must be in the format (123) 456-7890.');
    }

    const date = document.getElementById('date').value;
    if (!/^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/(19|20)\d{2}$/.test(date)) {
        errorMessages.push('Date must be in MM/DD/YYYY format.');
    }

    const tickets = document.getElementById('tickets').value;
    if (!/^[1-9]$|^10$/.test(tickets)) {
        errorMessages.push('Number of tickets must be between 1 and 10.');
    }

    const errorContainer = document.getElementById('errorMessages');
    errorContainer.innerHTML = '';
    if (errorMessages.length > 0) {
        errorMessages.forEach(message => {
            const error = document.createElement('p');
            error.textContent = message;
           alert(error);
        });
    } else {
 // Show the modal
                const modal = document.getElementById('myModal');
                modal.style.display = 'block';

                // Close the modal when the user clicks on <span> (x)
                const span = document.getElementsByClassName('close')[0];
                span.onclick = function() {
                    modal.style.display = 'none';
                };

                // Close the modal when the user clicks anywhere outside of the modal
                window.onclick = function(event) {
                    if (event.target == modal) {
                        modal.style.display = 'none';
                    }
                };    }
});