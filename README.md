# ByteBrain Frontend

ByteBrain Frontend is a modern web application built using React, designed to serve as the UI for the ByteBrain platform. It leverages advanced React libraries and tools to provide a performant, user-friendly experience.

## Features

- **Modern UI with React**: The application is built entirely in React, ensuring fast rendering and responsive user interactions.
- **Data Fetching with React Query**: Efficient state management and API communication using React Query, making server state synchronization seamless.
- **Forms with React Hook Form**: Easy and flexible form management using React Hook forms, including validation and error handling.
- **Component-based Architecture**: Clean separation of concerns via reusable components.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Recommended v18+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/doomerdpk-1802/ByteBrain_Frontend.git
   cd ByteBrain_Frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # OR
   yarn install
   ```

3. **Configure environment variables**  
   Create a `.env` file in the root of your project. Example:
   ```
   REACT_APP_API_URL=http://localhost:5173/
   ```

4. **Start development server**:
   ```bash
   npm run dev
   ```
   The app will run at [http://localhost:5173

## Usage

- Standard React development setup.
- All forms handled via React Hook Form for validation.
- Data fetching and cache is managed by React Query.

## Project Structure (default example)

```
ByteBrain_Frontend/
├── public/
├── src/
│   ├── api/         # API calls via React Query
│   ├── components/  # Reusable React components
│   ├── hooks/       # Custom React hooks
│   ├── pages/       # Page level components
│   ├── forms/       # Form components using React Hook Form
│   ├── App.js
│   └── index.js
├── .env
├── package.json
└── README.md
```

## Technologies Used

- **React**
- **React Query**
- **React Hook Form**
