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