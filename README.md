# Node.js Express TypeScript Tutorial

This is a simple Node.js Express project written in TypeScript. It demonstrates serving static files, rendering EJS templates, and providing a basic tasks API with form and JSON support.

## Features

- Express server with TypeScript
- EJS view engine
- Serves static files from the `public` folder
- Tasks API (CRUD)
- Supports both JSON and form submissions
- Source map support for better error stack traces

## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm

### Installation

```bash
npm install
```

### Development

Run the app in development mode (auto-recompiles and restarts):

```bash
npm run dev
```

### Build

Compile TypeScript to JavaScript:

```bash
npm run build
```

### Start (production)

Run the compiled app:

```bash
npm start
```

## API Endpoints

- `GET /tasks` - List all tasks
- `GET /tasks/:id` - Get a task by ID
- `POST /tasks` - Create a new task (JSON or form data)

## Static Files

Place static assets (images, CSS, JS) in the `public` folder. Example: `public/image.jpg` is available at `http://localhost:3000/image.jpg`.

## Error Stack Traces

Stack traces show TypeScript source lines if you use `source-map-support` (already included).

## Project Structure

```
├── src/
│   ├── server.ts
│   └── routes/
│       └── tasks.ts
├── views/
│   └── index.ejs
├── public/
│   └── image.jpg
├── ap-test.http
├── package.json
├── tsconfig.json
└── README.md
```

## License

ISC

## Author

Alex Rusin
