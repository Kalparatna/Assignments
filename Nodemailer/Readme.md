
# Nodemailer Email Sender

This is simple task that demonstrates how to send an email using **Node.js** and **Nodemailer**. It uses Gmail's SMTP service to send a simple email with both text and HTML content.

## Prerequisites

- **Node.js** and **npm** installed on your system.
- A **Gmail account** and an **App-Specific Password** for authentication.

## Setup Instructions

Follow these steps to set up and run the project:

### 1. Clone the Repository

If you're starting from a Git repository, clone the project:

```bash
git clone https://github.com/Kalparatna/Assignments.git
cd Assignments/Nodemailer
```

If you're starting from scratch, create a folder and initialize a new Node.js project.

### 2. Install Dependencies

Run the following command to install required dependencies:

```bash
npm install
```

This will install the `nodemailer` package and `dotenv` for environment variable management.

### 3. Set Up Environment Variables

Create a `.env` file in the root of the project folder with the following content:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
```

Replace `your-email@gmail.com` with your Gmail email address, and `your-app-specific-password` with the **App-Specific Password** you generate in your Google account. For more information on creating an app-specific password, see [Google's documentation](https://support.google.com/accounts/answer/185833).

### 4. Update the Email Recipient

In the `index.js` file, update the recipient's email address in the `mailOptions` object:

```javascript
to: 'recipient-email@gmail.com',
```

### 5. Run the Application

Run the Node.js application using the following command:

```bash
node index.js
```

If everything is set up correctly, the email will be sent successfully, and you will see a success message in the terminal.

### 6. Check Your Inbox

Check the recipient's email inbox to confirm that the email has been sent.

---

### Troubleshooting

- **Invalid login errors**: If you see an error like `Username and Password not accepted`, make sure you are using an **App-Specific Password** instead of your Gmail account password. You also need to enable **less secure apps** on your Gmail account or use OAuth authentication for production.
- **File attachment errors**: If you're sending attachments, make sure the file exists in the specified path.

---
```

You can copy and paste this into your `README.md` file.
