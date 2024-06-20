function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const eventDate = document.getElementById('eventDate').value;
    const tickets = document.getElementById('tickets').value;

    // Simple validation check
    const namePattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\(\d{3}\) \d{3}-\d{4}$/; // Adjusted to 10 digits without special characters
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;

    if (!namePattern.test(name)) {
        alert('Please enter a valid name.');
    } else if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
    } else if (!phonePattern.test(phone)) {
        alert('Please enter a valid phone number in the format 1234567890.');
    } else if (!datePattern.test(eventDate)) {
        alert('Please enter a valid date in the format YYYY-MM-DD.');
    } else if (tickets < 1 || tickets > 10) {
        alert('Please enter a number of tickets between 1 and 10.');
    } else {
        // Hide the form and show the success message
        document.getElementById('right-side').style.display = 'none';
        const successMessage = document.getElementById('successMessage');
        successMessage.style.display = 'block';
        successMessage.innerHTML = `
                    <h2>Thank you for registering!</h2>
                    <p>Please check your email to get the tickets.</p>
                `;
    }
}

document.getElementById('registrationForm').addEventListener('submit', handleSubmit);