document.getElementById('signup-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('signup-username').value;
  const password = document.getElementById('signup-password').value;

  try {
    const response = await axios.post('http://localhost:3000/signup', {
      username,
      password,
    });
    alert(response.data.message);
  } catch (error) {
    console.error('Error during signup:', error);
  }
});

document.getElementById('signin-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('signin-username').value;
  const password = document.getElementById('signin-password').value;

  try {
    const response = await axios.post('http://localhost:3000/signin', {
      username,
      password,
    });
    const token = response.data.message;
    alert('Signed in successfully! Your token: ' + token);

    // Fetch user details with token
    getUserDetails(token);
  } catch (error) {
    console.error('Error during signin:', error);
    alert('Signin failed. Check your username or password.');
  }
});

async function getUserDetails(token) {
  try {
    const response = await axios.get('http://localhost:3000/me', {
      headers: { token: token },
    });
    const userInfo = response.data;
    const userDetails = document.getElementById('user-details');

    if (userInfo.username) {
      userDetails.innerText = `Username: ${userInfo.username}\nPassword: ${userInfo.password}`;
    } else {
      userDetails.innerText = 'User not found!';
    }
  } catch (error) {
    console.error('Error fetching user details:', error);
  }
}
