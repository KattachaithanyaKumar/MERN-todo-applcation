# MERN Todo Application

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Overview

This is a MERN (MongoDB, Express.js, React.js, Node.js) stack-based todo application. It allows users to manage their todo items, providing basic CRUD (Create, Read, Update, Delete) functionality.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)

## Installation

To run this project locally, follow these steps:

```bash
# Clone the repository
git clone https://github.com/KattachaithanyaKumar/MERN-todo-applcation.git

# Change into the project directory
cd MERN-todo-applcation

# Install dependencies for both server and client
npm install
cd frontend
npm install
```

## Usage
To start the server and the React client, run:

```bash
#In the root directory
npm run dev

#In the frontend directory
npm run dev
```

## API Routes
The following API routes are available:

- GET /api/items: Get all todo items.
- POST /api/items: Create a new todo item.
Example request body: { "content": "Your todo item content" }
- PUT /api/items/:id: Update a todo item.
- DELETE /api/items/:id: Delete a todo item.


