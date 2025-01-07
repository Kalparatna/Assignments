
# Firebase Phone Authentication

This project demonstrates a phone number authentication system using Firebase. The app allows users to verify their phone numbers via OTP (One-Time Password) sent through SMS.

## Features
- Firebase authentication for phone number verification.
- OTP input field to confirm the phone number.
- A simple UI built using React and Tailwind CSS.

## Technologies Used
- React
- Firebase Authentication
- Tailwind CSS
- React Icons
- OTP Input React Library
- React Phone Input

## Setup and Run

Follow these steps to set up and run the project on your local machine:

### 1. Clone the repository
Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/Kalparatna/Assignments.git
cd Assignments
```

### 2. Install Dependencies
Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed. Install the required dependencies using:

```bash
npm install
```

### 3. Set Up Firebase
Create a Firebase project by following these steps:
1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Create a new project (if you don't have one already).
3. Go to the **Authentication** section and enable **Phone Authentication**.
4. Get your Firebase configuration from your Firebase console. You’ll need to add the Firebase config in the `firebase.config.js` file.

**firebase.config.js**

```js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
```

### 4. Run the App
Once the dependencies are installed and Firebase is set up, you can start the app using the following command:

```bash
npm start
```

This will launch the app at `http://localhost:3000`.

### 5. Set up ReCaptcha
The app uses Firebase's reCAPTCHA verification to send OTP. It’s set to be invisible on the frontend, but make sure you are connected to the internet when testing.

### 6. Test the App
Once the app is running:
1. Enter your phone number and click **Send code via SMS**.
2. Wait for the OTP to be sent to your phone.
3. Enter the OTP and click **Verify OTP** to complete the authentication process.
