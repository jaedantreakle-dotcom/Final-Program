// noinspection JSValidateTypes

document.addEventListener("DOMContentLoaded", () => {
    // ******** Year in footer ********
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // ******** Smooth scroll for nav links ********
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
            const targetId = anchor.getAttribute("href");
            if (!targetId || targetId === "#") return;
            const el = document.querySelector(targetId);
            if (el) {
                e.preventDefault();
                el.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // ******** Contact form (front-end only) ********
    const contactForm = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            // For now, just show a message. You can hook this to Formspree/EmailJS/etc.
            formStatus.textContent =
                "Thanks for reaching out! This demo form does not send real emails, but you can contact me via LinkedIn or email.";
            contactForm.reset();
        });
    }

    // ******** QR code ********

const qrImg = document.getElementById("portfolio-qr");
const qrLink = document.getElementById("qr-link");

if (qrImg && qrLink) {
    // This is the URL you want people to go to when they scan the QR or click the text link
    const portfolioUrl = "https://qrco.de/bgUc59";  // or your GitHub Pages URL if you prefer

    // Show your own PNG QR image (make sure this file exists!)
    qrImg.src = "assets/my-qr.png";  // adjust path if the file is somewhere else

    // Clickable text link under the QR
    qrLink.href = portfolioUrl;
    qrLink.textContent = portfolioUrl;
}


    // ******** Chatbot ********
    const chatbot = document.getElementById("chatbot");
    const chatbotToggle = document.getElementById("chatbot-toggle");
    const chatbotClose = document.getElementById("chatbot-close");
    const chatbotMessages = document.getElementById("chatbot-messages");
    const chatbotInput = document.getElementById("chatbot-input");
    const chatbotSend = document.getElementById("chatbot-send");

    const faqData = [
        {
            keywords: ["skill", "skills"],
            answer:
                "Jaedan's skills include network design and configuration, network and server security, Linux and Windows administration, DNS/BIND9, Apache, MySQL/phpMyAdmin, Excel dashboards, troubleshooting, and strong teamwork and communication."
        },
        {
            keywords: ["project", "projects"],
            answer:
                "Key projects: (1) Secure Web & DNS Server Deployment on Linux using BIND9, Apache, SSL/TLS, MySQL, and phpMyAdmin; (2) Maryland Educational Attainment Data Analysis using Excel dashboards and ACS PUMS data; (3) Dual Boot System integrating Linux and Windows; (4) Networking Topology labs using Cisco Packet Tracer."
        },
        {
            keywords: ["education", "degree", "school", "university"],
            answer:
                "Jaedan is pursuing a B.S. in Computer Technology with a concentration in Cybersecurity Networking Infrastructure at Bowie State University, expected December 2025."
        },
        {
            keywords: ["cert", "certification", "security+", "comptia"],
            answer:
                "Jaedan holds the CompTIA Security+ (SY0-701) certification, issued July 2025 (Candidate ID: COMP001022841750)."
        },
        {
            keywords: ["experience", "internship", "work", "job", "accenture"],
            answer:
                "Jaedan worked as a Cybersecurity Intern at Accenture Federal Services, contributing to projects, aligning vendor reviews with NIST SP 800-53, and documenting findings to improve security protocols. He also worked as a Geek Squad Installer Cadet at Best Buy, performing diagnostics, malware removal, system hardening, network deployments, and customer education on cybersecurity best practices."
        },
        {
            keywords: ["contact", "email", "reach"],
            answer:
                "You can contact Jaedan through the contact form on this site, via LinkedIn, or by email (see the resume header for direct contact details)."
        },
        {
            keywords: ["network", "networking"],
            answer:
                "Jaedan has strong networking skills, including designing and troubleshooting topologies in Cisco Packet Tracer, configuring routers and switches, deploying home and small-business networks, and securing wireless environments."
        }
    ];

    function getBotResponse(message) {
        const lower = message.toLowerCase();
        for (const item of faqData) {
            if (item.keywords.some((kw) => lower.includes(kw))) {
                return item.answer;
            }
        }
        return "I'm not sure about that one yet, but you can check the Projects, About, and Resume sections above for more details about Jaedan.";
    }

    function appendMessage(text, sender) {
        const div = document.createElement("div");
        div.classList.add("message", sender);
        div.textContent = text;
        chatbotMessages.appendChild(div);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function handleSend() {
        const text = chatbotInput.value.trim();
        if (!text) return;
        appendMessage(text, "user");
        chatbotInput.value = "";

        setTimeout(() => {
            const response = getBotResponse(text);
            appendMessage(response, "bot");
        }, 250);
    }

    if (chatbotToggle && chatbot) {
        chatbotToggle.addEventListener("click", () => {
            chatbot.classList.toggle("open");
        });
    }

    if (chatbotClose && chatbot) {
        chatbotClose.addEventListener("click", () => {
            chatbot.classList.remove("open");
        });
    }

    if (chatbotSend && chatbotInput) {
        chatbotSend.addEventListener("click", handleSend);
        chatbotInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                handleSend();
            }
        });
    }
});
