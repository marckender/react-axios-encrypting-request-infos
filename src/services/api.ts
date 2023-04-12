import axios, { AxiosInstance } from 'axios';
import { AES, enc } from 'crypto-js';

// Function to encrypt data using AES algorithm
const encryptData = (data: any, key: string, iv: string) => {
  const encryptedMessage = AES.encrypt(JSON.stringify(data), enc.Hex.parse(key), { iv: enc.Hex.parse(iv) }).toString();
  return encryptedMessage;
};

// Create an Axios instance
const api: AxiosInstance = axios.create({
  // Axios configurations ,  fake api adress
  baseURL: "https://fakeapii.com/"
  // ...
});

// Add an interceptor to encrypt data before sending it to the backend
api.interceptors.request.use(config => {
  const key = 'secret-key'; // Encryption key
  const iv = 'initialization-vector'; // Initialization vector (IV)

  // Check if the request configuration has data to send
  if (config.data) {
    config.data = encryptData(config.data, key, iv);
  }

  alert("Crypted Data: " + config.data)
  return config;
}, error => {
  return Promise.reject(error);
});

export default api;
