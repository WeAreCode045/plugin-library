# Dashboard App

This project is a dashboard application that includes user management, authentication, settings configuration, and plugin management features. 

## Features

- **Login Page**: Allows users to authenticate with their credentials.
- **User Manager**: Manages user accounts, providing functionalities to add, edit, and delete users.
- **Settings Page**: Enables users to set and update their secret key and consumer key.
- **Plugins Page**: Fetches and displays a list of plugins from an external API, showing relevant details in a table format.

## Project Structure

```
dashboard-app
├── src
│   ├── components
│   │   ├── LoginPage.tsx
│   │   ├── UserManager.tsx
│   │   ├── SettingsPage.tsx
│   │   └── PluginsPage.tsx
│   ├── services
│   │   └── api.ts
│   ├── App.tsx
│   └── index.tsx
├── public
│   └── index.html
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd dashboard-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```
This will launch the application in your default web browser.

## API Integration

The application interacts with an external API to fetch plugin data. Ensure you have the correct consumer key and secret key set in the settings page to successfully retrieve the plugin list.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.