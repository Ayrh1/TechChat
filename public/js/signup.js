const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (name && password) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ name,password }),
        headers: { 'Content-Type': 'application/json' },
        individualHooks: true
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  };

  document
  .querySelector('#auth-form')
  .addEventListener('submit', signupFormHandler);
