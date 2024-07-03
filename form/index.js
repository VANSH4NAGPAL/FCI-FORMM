document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous error messages
    clearErrors();

    // Get form values
    const cardholderName = document.getElementById('cardholder-name').value.trim();
    const cardNumber = document.getElementById('card-number').value.trim();
    const expMonth = document.getElementById('exp-month').value.trim();
    const expYear = document.getElementById('exp-year').value.trim();
    const cvc = document.getElementById('cvc').value.trim();

    // Validation flags
    let isValid = true;

    // Validate cardholder name
    if (cardholderName === '') {
        showError('name-error', "Can't be blank");
        isValid = false;
    }

    // Validate card number
    const cardNumberPattern = /^[0-9\s]+$/;
    if (cardNumber === '') {
        showError('number-error', "Can't be blank");
        isValid = false;
    } else if (!cardNumberPattern.test(cardNumber)) {
        showError('number-error', "Wrong format, numbers only");
        isValid = false;
    }

    // Validate expiration date
    const expPattern = /^[0-9]{2}$/;
    if (expMonth === '' || expYear === '') {
        showError('exp-error', "Can't be blank");
        isValid = false;
    } else if (!expPattern.test(expMonth) || !expPattern.test(expYear)) {
        showError('exp-error', "Wrong format, numbers only");
        isValid = false;
    }

    // Validate CVC
    const cvcPattern = /^[0-9]{3}$/;
    if (cvc === '') {
        showError('cvc-error', "Can't be blank");
        isValid = false;
    } else if (!cvcPattern.test(cvc)) {
        showError('cvc-error', "Wrong format, numbers only");
        isValid = false;
    }

    // If all fields are valid, show the thank you message
    if (isValid) {
        document.getElementById('payment-form').style.display = 'none';
        document.getElementById('thank-you').style.display = 'block';
    }
});

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.textContent = '';
    });
}
function loadNewPage() {
    window.location.href = '/form/index.html'; 
}