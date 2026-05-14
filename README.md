# PDF Maker - Node.js Invoice PDF Generator

A modern Node.js PDF generation project built using **Express.js**, **EJS**, and **Puppeteer**. This project generates stylish A4 invoice PDFs dynamically from HTML templates.

## Features

- Generate professional invoice PDFs
- Built with Node.js and Express.js
- Dynamic invoice template using EJS
- PDF generation using Puppeteer
- A4 size optimized invoice layout
- Inline CSS styling
- Download generated PDF automatically
- ES6 Modules support
- Clean and simple project structure

---

# Tech Stack

## Backend

- Node.js
- Express.js
- Puppeteer
- EJS

## Frontend Template Engine

- EJS Templates
- HTML5
- Inline CSS

---

# Project Structure

```bash
sample-pdf-maker/
│
├── views/
│   └── invoice.ejs
│
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

# Installation

## 1. Clone Repository

```bash
git clone <your-repository-url>
```

## 2. Navigate to Project Folder

```bash
cd sample-pdf-maker
```

## 3. Install Dependencies

```bash
npm install
```

---

# Run Project

Start the Node.js server:

```bash
node index.js
```

Server will start on:

```bash
http://localhost:5000
```

---

# Generate PDF

Open the following URL in your browser:

```bash
http://localhost:5000/generate-pdf
```

The project will:

1. Render EJS invoice template
2. Convert HTML into PDF
3. Save PDF temporarily
4. Automatically download the generated PDF

---

# API Endpoint

## Generate Invoice PDF

### Request

```http
GET /generate-pdf
```

### Response

Returns downloadable PDF invoice file.

---

# Dependencies

## Express

Used to create the web server and routes.

```bash
npm install express
```

## EJS

Used as template engine for dynamic invoice rendering.

```bash
npm install ejs
```

## Puppeteer

Used to generate PDFs from HTML content.

```bash
npm install puppeteer
```

---

# ES6 Module Support

Project uses ES6 Modules.

```json
"type": "module"
```

Import syntax:

```javascript
import express from "express";
```

---

# Customization

You can easily customize:

- Invoice UI design
- Company branding
- Product table
- GST calculation
- Currency
- PDF filename
- Customer information
- Invoice layout

---

# Future Improvements

Possible enhancements:

- Database integration
- Dynamic API data
- Authentication
- Email PDF invoices
- Multi-page invoices
- QR code support
- Razorpay payment integration
- Admin dashboard
- Download history
- Cloud storage integration

---

# Example Use Cases

- E-commerce invoices
- Order receipts
- Billing systems
- GST invoices
- Purchase receipts
- Subscription invoices
- Freelancer invoices
- Admin billing panels

---

# Recommended Node.js Version

```bash
Node.js >= 18
```

---

# License

This project is licensed under the ISC License.
