# Top Podcasts

This application allows users to explore the top 100 podcasts from Itunes and
its lasts episodes.

## Table of Contents

- [Introduction](#introduction)
- [Deployment](#deployment)
- [API Integration](#api-integration)
- [Design Implementation](#design-implementation)
- [Development Setup](#development-setup)
- [Testing](#testing)
- [Accessibility](#accessibility)
- [Linting and Formatting](#linting-and-formatting)
- [Usage](#usage)
- [Stack](#stack)
- [Hexagonal Architecture Implementation](#hexagonal-architecture-implementation)

## Introduction

This is a React application generated with Next.js that will allow users to
manage trips and itineraries

## Deployment

The application has been deployed and can be consulted at the following public
URL:
[https://travels-app-ebon.vercel.app/](https://travels-app-ebon.vercel.app/)

## API Integration

The application fetches the default trips data from a
[JSONPlaceholder](https://jsonplaceholder.typicode.com/) api.

## Design Implementation

Components are styled using CSS modules for scoped styling following the
provided designs.

## Development Setup

Setting up the development environment is very straightforward

- **Dependencies**: Ensure Node.js and dependencies from `package.json` are
  installed (`npm install`).
- **Development**: Run `npm run dev` to launch the application in development
  mode using webpack dev server.
- **Build**: Generate a production build with `npm run build`.
- **Start**: Start the application in production mode `npm run start`.

## Testing

Testing is implemented using Jest and React Testing Library (`npm run test`).
Unit tests are located in respective `__tests__` directories under `hooks` and
inside each `component`. The project maintains a test coverage of over 90%,
ensuring comprehensive testing of components and application logic.

## Accessibility

The application ensures accessibility by using semantic HTML, alt attributes for
images, and adhering to accessibility guidelines for interactive elements.

## Linting and Code Quality

Linting is managed with ESLint to maintain code quality (`npm run lint`).
TypeScript support is integrated to enhance type safety and development
efficiency.

## Usage

1. **Homepage**: Displays the list of trips available according to search and
   navigation (nav tabs) params.
2. **Create trip**: A create new trip form is available through a dialog element
   for creating new trips.
3. **Edit trip**: A edit trip form is available through a dialog element for
   editing existing trips.
4. **Show trip details**: Shows detailed information about the trip and
   itinerary, and allows for marking the trip as completed.

## Stack

- React
- Next.js
- Zustand
- TypeScript
- CSS

## Hexagonal Architecture Implementation

This project follows the principles of Hexagonal Architecture, also known as
Ports and Adapters Architecture. This architectural style promotes a clean
separation of concerns, making the system more maintainable, testable, and
extensible. Here's a brief overview of how it's implemented:

- **Domain Layer (`/domain`)**

  - This layer contains the core business logic and domain entities such as the
    types that are being used in the app.
  - It is the heart of the application, encapsulating all the business rules and
    remaining independent of external systems and frameworks.

- **Application Layer (`/application`)**

  - This layer includes application-specific logic, in this case includes the
    state management files as react custom hooks (`/hooks`).
  - It acts as a mediator between the domain layer and the outer layers
    (infrastructure and presentation), coordinating the application’s workflow
    and state management.

- **Infrastructure Layer (`/infrastructure`)**

  - This layer manages external systems, APIs, data mappers, and utility
    functions.
  - It includes:
    - **API communication (`/api`)**: Handles the initial API call.

- **Presentation Layer (`/presentation`)**

  - This layer is responsible for the user interface and user interactions,
    consisting of components, pages, layouts, assets, and global styles.
  - It includes:
    - **Components (`/components`)**: Reusable UI components like `TravelCard`,
      `Header`, and `SearchBar`.
    - **Pages (`/pages`)**: The main application view: `Main`.
    - **Layouts (`/layouts`)**: Layout components that structure the page.

- **Testing**
  - Test files (`*.test.tsx`) are properly organized within their respective
    contexts to ensure thorough and maintainable testing practices.

### Architecture Features

- **Modularity**: Each layer is independent and can be tested in isolation.
- **Testability**: Easy to mock dependencies for unit testing, especially in the
  application and domain layers.
- **Maintainability**: Changes in external APIs or UI components can be
  accommodated without affecting core business logic.

