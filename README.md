# Final-Program
Final Program for CTEC 450

# Jaedan Treakle – Personal Portfolio

This repository contains the source code for my personal portfolio website.  
It showcases my skills, projects, resume, and includes an interactive chatbot and QR code for quick access.

## Live Site

Index.HTML

## Features

- **Home** – Short introduction and quick links to LinkedIn and GitHub.
- **About** – Details about my education, skills, and interests in network security and cybersecurity.
- **Projects** – Highlighted university and personal projects with links to GitHub repositories.
- **Resume** – Embedded PDF viewer with a downloadable version of my resume.
- **Contact** – Simple contact form (front-end only for now).
- **Chatbot** – A JavaScript chatbot that answers FAQs about my skills, projects, education, and experience.
- **QR Code** – Automatically generated QR code that links directly to the deployed portfolio URL.

## Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**

No backend is required for this project.

## Files

- `index.html` – Main page and structure of the portfolio.
- `style.css` – Styling for all sections and the chatbot UI.
- `script.js` – Chatbot logic, QR code generation, smooth scrolling, and form behavior.
- `assets/Jaedan_Treakle_Resume.pdf` – My latest resume in PDF format.

## Chatbot Implementation

The chatbot is implemented in plain JavaScript:

- A small FAQ dataset is defined in `script.js`.
- When a user submits a message, the script looks for keywords in the message and returns the corresponding answer.
- If no match is found, the chatbot returns a generic response directing the user to the different sections of the site.

This approach satisfies the “simple chatbot” requirement without needing external services like Dialogflow. The logic can be easily extended by adding more keyword/answer pairs.

## QR Code Implementation

The QR code is generated using the public `api.qrserver.com` endpoint:

```js
const portfolioUrl = "https://your-username.github.io/your-repo-name/";
const qrApi = "https://api.qrserver.com/v1/create-qr-code/";
const size = "200x200";
const qrSrc = `${qrApi}?size=${size}&data=${encodeURIComponent(portfolioUrl)}`;
