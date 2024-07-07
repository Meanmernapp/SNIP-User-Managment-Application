# SNIP User Managment Application

This project is a React application for managing user dashboards. It features various modules for user management, department management, report generation, and more. The application uses React Router for navigation, and Context API and `useReducer` for state management.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [State Management](#state-management)
- [Routes](#routes)
- [Components](#components)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The React User Dashboard Application is designed to provide a comprehensive and interactive interface for managing various aspects of a user dashboard. It includes user authentication, department and report management, and several other modules.

## Features

- User Authentication
- User Management
- Department Management
- Report Generation
- Case Management
- Navigation Panel
- Settings Management
- Internet Connection Monitoring
- Image Management
- Log Management
- Alert Notifications

## Installation

### Prerequisites

- Node.js and npm installed on your machine

### Steps

1. **Clone the repository**:
    ```bash
    cd react-user-dashboard
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the development server**:
    ```bash
    npm start
    ```

The application should now be running on `http://localhost:3000`.

## Usage

The application includes several modules accessible through various routes. It uses React Router for navigation and provides a user-friendly interface for managing users, departments, reports, and more.

## State Management

The application uses Context API and `useReducer` for managing the state. The initial state and reducer are defined as follows:

```javascript
const initialState = {
  inputText: "",
  inputMargin: "",
  sidebar: "false",
  check: "false",
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_INPUT":
      return update(state, { inputText: { $set: action.data } });
    case "UPDATE_MARGIN":
      return update(state, { inputMargin: { $set: action.data } });
    case "UPDATE_SIDEBAR":
      return update(state, { sidebar: { $set: action.data } });
    case "UPDATE_CHECK":
      return update(state, { check: { $set: action.data } });
    default:
      return state;
  }
}
