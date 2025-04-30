# Joel Mamboka Portfolio Website

This repository contains the source code for the personal portfolio website of Joel Mamboka.

## Overview

This website showcases Joel Mamboka's work, provides information about him, and offers a way for visitors to get in touch. It is built using React and features a responsive design to ensure a consistent experience across different devices.

## Key Features

- **Navigation Header:** A clear and responsive header with links to the main sections of the website (Work, About, Contact) and a link to Joel's Instagram profile. The active page in the navigation is visually highlighted.
- **Homepage:** An engaging homepage displaying a gallery of images in a responsive grid layout. The number of image columns adapts to different screen sizes.
- **About Page:** (Implementation details not fully covered in our conversation, but assumed to exist based on the header link).
- **Contact Page:** A user-friendly contact form allowing visitors to send direct inquiries. The form utilizes the EmailJS service to handle email submissions.
- **Responsive Design:** The layout and styling of the website adapt to various screen sizes, including desktops, tablets, and mobile phones, through the use of CSS media queries.
- **Environment Variable Configuration:** Sensitive information such as EmailJS credentials are securely managed using Vite's environment variable system.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **React Router DOM:** For handling client-side routing and navigation.
- **EmailJS Browser:** For sending emails directly from the front-end.
- **React Icons:** For incorporating icons, specifically the Instagram icon.
- **CSS Modules:** For modular and scoped styling of React components.
- **Vite:** A build tool that provides a fast and efficient development experience.

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd <repository_name>
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up environment variables:**

    - Create a `.env` file in the root directory of the project.
    - Add your EmailJS credentials to the `.env` file using the `VITE_` prefix:
      ```
      VITE_EMAILJS_SERVICE_ID=your_service_id
      VITE_EMAILJS_TEMPLATE_ID=your_template_id
      VITE_EMAILJS_PUBLIC_KEY=your_public_key
      ```
      Replace `your_service_id`, `your_template_id`, and `your_public_key` with your actual EmailJS credentials.

4.  **Start the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    Open your browser and navigate to the address provided (usually `http://localhost:5173`).

## Build for Production

To build the website for production deployment:

```bash
npm run build
# or
yarn build
```
