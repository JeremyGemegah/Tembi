import * as SecureStore from 'expo-secure-store';

/**
 * Checks if a user is logged in by looking for an 'api_token'.
 * @returns {Promise<boolean>} A promise that resolves to true if the token exists, false otherwise.
 */
export async function checkLoggedIn() {
  try {
    const token = await SecureStore.getItemAsync('api_token');
    return !!token;
  } catch (error) {
    console.error('Error checking login status:', error);
    return false;
  }
}

/**
 * Checks if a user is logged in by looking for an 'api_token'.
 * @returns {Promise<string|null>} A promise that resolves to true if the token exists, false otherwise.
 */

export async function getAPIToken(){
    try {
    return await SecureStore.getItemAsync('api_token');
  } catch (error) {
    console.error('Error getting user data:', error);
    return null;
  }
}

/**
 * Retrieves user data from secure store.
 * @returns {Promise<string|null>} A promise that resolves to the user data string or null if not found or an error occurs.
 */
export async function getUserData() {
  try {
    return await SecureStore.getItemAsync('user');
  } catch (error) {
    console.error('Error getting user data:', error);
    return null;
  }
}

export async function apiCall(endpoint,token, method = 'GET', body = null) {
  const apiToken = token || await getAPIToken();
  

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'User-Agent': 'BikeHiveApp/1.0',
    'Authorization': `Token ${apiToken}`
  };

  const options = {
    method,
    headers
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(`https://tembi.onrender.com/api/${endpoint}`, options);
  
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || errorData.error || 'API call failed');
  }

  return response.json();
}

//sends a push notification

export async function sendPushNotification(expoPushToken, title='BikeHive Notification', body='You have a new notification!') {
    console.log('Sending push notification to:', expoPushToken)
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: title,
    body: body,
    data: { someData: 'goes here' },
  }

    await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  }).then(res => console.log('Push notification response:', res))
}