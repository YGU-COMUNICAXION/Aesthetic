# Aesthetic Concept Design

## Overview
This project is a web application designed to showcase various events and exhibitions related to aesthetic concept design. It features a gallery page that displays images and videos of past events, along with a contact section for inquiries.

## Project Structure
The project is organized into the following directories and files:

```
aesthetic
├── src
│   ├── components
│   │   ├── ContactSection.astro      # Component for the contact section
│   │   └── GalleryCard.astro         # Component for displaying gallery items with automatic image rotation
│   ├── layouts
│   │   └── Layout.astro              # Layout structure for the pages
│   ├── pages
│   │   └── galeria.astro             # Main gallery page
│   └── assets
│       └── img
│           └── galleria
│               ├── habitat.jpg       # Image asset for the gallery
│               └── mueble.jpg        # Another image asset for the gallery
├── package.json                       # npm configuration file
├── tsconfig.json                      # TypeScript configuration file
└── README.md                          # Project documentation
```

## Features
- **Gallery Display**: The gallery page showcases images and videos of events, utilizing the `GalleryCard` component for dynamic image rotation.
- **Contact Section**: A dedicated section for users to reach out for inquiries or more information.

## Getting Started
To get started with the project, clone the repository and install the necessary dependencies:

```bash
npm install
```

After installing the dependencies, you can run the project using:

```bash
npm start
```

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.