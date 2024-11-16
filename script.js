const form = document.getElementById('userForm');
const message = document.getElementById('message');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Get input values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();

    // Prepare data
    const timestamp = new Date().toISOString();
    const url = 'https://api.sheety.co/ecffe46261a242b806d42fe8e31d4976/emails/cEmail';
    const body = {
        cEmail: {
            firstName,
            lastName,
            email,
            timestamp
        }
    };

    // Make the POST request
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (response.ok) {
            const result = await response.json();
            message.textContent = 'Data submitted successfully!';
            message.className = 'message success';
            form.reset();
        } else {
            throw new Error(`Error: ${response.status}`);
        }
    } catch (error) {
        console.error(error);
        message.textContent = 'Failed to submit data. Please try again.';
        message.className = 'message error';
    }
});
