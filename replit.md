# Overview

A real estate services web application built with a React frontend and Express backend. The application allows users to submit inquiries for different types of real estate services (property management, investment, brokerage). It features a modern, responsive UI with a contact form that stores submissions in a PostgreSQL database.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state and caching
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style)
- **Form Handling**: React Hook Form with Zod validation
- **Animations**: Framer Motion for UI animations
- **Build Tool**: Vite with hot module replacement

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with tsx for TypeScript execution
- **API Design**: REST API with typed route definitions in `shared/routes.ts`
- **Validation**: Zod schemas shared between frontend and backend via `shared/` directory

## Data Storage
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM with drizzle-zod for schema validation
- **Schema Location**: `shared/schema.ts` contains database table definitions
- **Migrations**: Drizzle Kit manages database migrations in `./migrations`

## Project Structure
```
├── client/          # React frontend
│   └── src/
│       ├── components/ui/  # shadcn/ui components
│       ├── pages/          # Page components
│       ├── hooks/          # Custom React hooks
│       └── lib/            # Utility functions
├── server/          # Express backend
│   ├── index.ts     # Server entry point
│   ├── routes.ts    # API route handlers
│   ├── storage.ts   # Database operations
│   └── db.ts        # Database connection
├── shared/          # Shared code between client/server
│   ├── schema.ts    # Drizzle database schema
│   └── routes.ts    # API route type definitions
└── script/          # Build scripts
```

## Key Design Patterns
- **Monorepo Structure**: Single repository with client, server, and shared directories
- **Type Safety**: Full TypeScript with shared types between frontend and backend
- **Schema-First**: Database schema generates both TypeScript types and Zod validators
- **Component Library**: Pre-built shadcn/ui components with Radix UI primitives

# External Dependencies

## Database
- **PostgreSQL**: Primary database, connection via `DATABASE_URL` environment variable
- **pg**: PostgreSQL client for Node.js
- **connect-pg-simple**: PostgreSQL session store (available for session management)

## UI Components
- **Radix UI**: Headless UI primitives for accessible components
- **shadcn/ui**: Pre-styled component library built on Radix
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel component
- **cmdk**: Command palette component
- **Vaul**: Drawer component

## Development Tools
- **Vite**: Frontend build tool with HMR
- **esbuild**: Fast server bundling for production
- **Drizzle Kit**: Database migration tool

## Validation & Forms
- **Zod**: Runtime type validation
- **React Hook Form**: Form state management
- **@hookform/resolvers**: Zod integration for React Hook Form