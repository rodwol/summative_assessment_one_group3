document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const errorMessages = [];

    // Name validation
    const name = document.getElementById('name').value;
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        errorMessages.push('Name must contain letters and spaces only.');
    }

    // Email validation
    const email = document.getElementById('email').value;
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        errorMessages.push('Email must be in a valid format.');
    }

    // Phone validation
    const phone = document.getElementById('phone').value;
    if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(phone)) {
        errorMessages.push('Phone number must be in the format (123) 456-7890.');
    }

    // Date validation
    const date = document.getElementById('date').value;
    if (!/^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/(19|20)\d{2}$/.test(date)) {
        errorMessages.push('Date must be in MM/DD/YYYY format.');
    }

    // Number of tickets validation
    const tickets = document.getElementById('tickets').value;
    if (!/^[1-9]$|^10$/.test(tickets)) {
        errorMessages.push('Number of tickets must be between 1 and 10.');
    }

    // Display error messages
    const errorContainer = document.getElementById('errorMessages');
    errorContainer.innerHTML = '';
    if (errorMessages.length > 0) {
        errorMessages.forEach(message => {
            const error = document.createElement('p');
            error.textContent = message;
            errorContainer.appendChild(error);
        });
    } else {
        errorContainer.innerHTML = 'Form submitted successfully!';
    }
});