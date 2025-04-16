import axios from 'axios';  // Use `import` instead of `require`

async function checkIn() {
  console.log('Starting the check-in process...');
  console.log('Using COOKIE:', process.env.COOKIE);  // You can remove this later for privacy

  try {
    // Send a POST request to claim the daily check-in reward
    const response = await axios.post('https://act.hoyolab.com/ys/event/signin-sea-v3/index.html?act_id=e202102251931481', {}, {
      headers: {
        'Cookie': process.env.COOKIE, // Passing the cookie as header for authentication
      }
    });

    console.log('Response:', response.data);

    // Log success if we receive a success message
    if (response.data && response.data.message === 'Success') {
      console.log('Successfully checked in!');
    } else {
      console.log('Check-in failed. Response:', response.data);
    }
  } catch (error) {
    console.error('Error during check-in:', error.message);
  }
}

checkIn();


