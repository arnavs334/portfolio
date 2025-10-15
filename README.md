# Portfolio Website

## Technologies Used

### Core Framework
- **React 18.3.1** - A JavaScript library for building user interfaces with a component-based architecture
- **TypeScript** - Strongly typed programming language that builds on JavaScript, adding static type definitions
- **Vite** - Next-generation frontend build tool that provides fast development server and optimized production builds

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework for rapidly building custom user interfaces
- **shadcn/ui** - Re-usable component library built on Radix UI primitives with Tailwind CSS
- **tailwindcss-animate** - Tailwind CSS plugin for creating beautiful animations
- **class-variance-authority** - Tool for creating variant-based component APIs
- **Radix UI** - Unstyled, accessible component library including:
  - Accordion, Alert Dialog, Avatar, Checkbox, Dialog, Dropdown Menu
  - Navigation Menu, Popover, Progress, Radio Group, Select, Slider
  - Switch, Tabs, Toast, Tooltip, and more

### State Management & Data Fetching
- **@tanstack/react-query (v5.83.0)** - Powerful data synchronization and caching library for React applications
- **react-hook-form (v7.61.1)** - Performant, flexible forms with easy-to-use validation
- **zod (v3.25.76)** - TypeScript-first schema validation library

### Routing & Navigation
- **react-router-dom (v6.30.1)** - Declarative routing for React applications with client-side navigation

### UI Components & Utilities
- **lucide-react (v0.462.0)** - Beautiful and consistent icon library
- **next-themes (v0.3.0)** - Theme management with dark/light mode support
- **sonner (v1.7.4)** - Opinionated toast notification component
- **cmdk (v1.1.1)** - Command menu component for React
- **vaul (v0.9.9)** - Drawer component for React
- **embla-carousel-react (v8.6.0)** - Lightweight carousel library

### Date & Time
- **date-fns (v3.6.0)** - Modern JavaScript date utility library
- **react-day-picker (v8.10.1)** - Flexible date picker component

### Charts & Data Visualization
- **recharts (v2.15.4)** - Composable charting library built on React components

### Form Components
- **input-otp (v1.4.2)** - One-time password input component
- **react-resizable-panels (v2.1.9)** - Resizable panel layouts

### Utilities
- **clsx (v2.1.1)** - Utility for constructing className strings conditionally
- **tailwind-merge (v2.6.0)** - Merge Tailwind CSS classes without style conflicts

## Development Setup

```sh
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

- `/src/components` - Reusable React components
- `/src/pages` - Page-level components
- `/src/hooks` - Custom React hooks
- `/src/lib` - Utility functions and helpers
- `/public` - Static assets
