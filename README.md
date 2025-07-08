# SaasAble Design System

A modern, comprehensive design system built with React Router 7, Tailwind CSS 4, and TypeScript. Features SaaS-focused components and design tokens.

## 🚀 Features

- **Modern React Router 7** - Latest routing capabilities
- **Tailwind CSS 4** - Latest utility-first CSS framework
- **TypeScript** - Full type safety
- **SaasAble Design Tokens** - Comprehensive color and typography system
- **Shadcn UI Components** - Customizable, accessible components
- **Figma Integration** - MCP server for design token sync
- **ESLint + Prettier** - Code quality and formatting
- **Husky + lint-staged** - Pre-commit hooks

## 🎨 SaasAble Design System

### Typography System

The typography system is fully responsive with breakpoint-specific styles:

- **Display**: 4 sizes (XL: 72px, LG: 60px, MD: 48px, SM: 36px) for hero sections
- **Headings**: 5 sizes (XL: 32px, LG: 28px, MD: 24px, SM: 20px, XS: 18px) for content hierarchy
- **Paragraphs**: 3 sizes (LG: 18px, MD: 16px, SM: 14px) for body text
- **Labels**: 3 sizes (LG: 16px, MD: 14px, SM: 12px) for form elements and UI labels
- **Links**: Interactive hyperlinks with hover states
- **Responsive**: Automatically scales down for tablet (md) and mobile (sm) breakpoints

### Color Palette

#### Primary Colors

- Full spectrum from Primary-0 to Primary-100
- Dark blues: `#006397` (Primary-40) to `#CCE5FF` (Primary-90)
- Used for primary actions, focus states, and brand elements

#### Secondary Colors

- Complementary blue-gray palette
- From `#4F6070` (Secondary-40) to `#D3E4F8` (Secondary-90)
- Used for secondary actions and supporting elements

#### Neutral Colors

- Comprehensive grayscale from `#000000` to `#FFFFFF`
- Special stops at key contrast ratios (10, 20, 50, 90, 95, etc.)
- Used for text, backgrounds, borders, and surfaces

#### Neutral Variant Colors

- Alternative neutral palette with blue undertones
- Better integration with Primary/Secondary colors
- Used for subtle UI elements and variants

### Component System

#### Button Component

- **Variants**:
  - `filled` - Primary solid button (default)
  - `outlined` - Border-only button
  - `text` - Text-only button
  - `elevated` - Shadow/elevated button
  - `destructive` - Error/delete actions
  - `secondary` - Secondary actions
  - `ghost` - Minimal hover button
  - `link` - Link-style button

- **Sizes**:
  - `small` - 32px height, compact spacing
  - `medium` - 40px height (default)
  - `large` - 48px height, generous spacing
  - `icon` - Square 40px for icon-only
  - `icon-sm` - Square 32px for small icons
  - `icon-lg` - Square 48px for large icons

- **States**: Default, Hover, Focus, Active, Disabled, Loading
- **Icons**: Left and right icon support with proper spacing
- **Accessibility**: ARIA attributes, keyboard navigation, focus management

### Dark Mode Support

Full dark theme with automatic color token switching:

- Background colors flip appropriately
- Text contrast maintained
- Component states work in both themes
- CSS custom properties handle the switching
- Can be toggled via `.dark` class on `<html>`

## 📂 Project Structure

```
app/
├── components/
│   └── ui/               # SaasAble UI components
│       └── button.tsx    # Comprehensive button component
├── lib/
│   └── utils.ts         # Utility functions (cn, etc.)
├── routes/
│   └── home.tsx         # Design system showcase
├── app.css              # SaasAble design tokens and typography
└── root.tsx             # App root with theme setup

.vscode/
└── mcp.json             # Figma MCP server configuration

.github/
└── fonts-colors.prompt.md  # Design system extraction instructions
```

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Usage Examples

### Typography Classes

```tsx
// Display text for hero sections
<h1 className="text-display-xl">Hero Title</h1>
<h2 className="text-display-lg">Large Display</h2>

// Headings for content hierarchy
<h2 className="text-heading-xl">Section Title</h2>
<h3 className="text-heading-lg">Subsection</h3>

// Body text
<p className="text-paragraph-lg">Large body text for readability</p>
<p className="text-paragraph-md">Standard body text</p>

// Labels and small text
<label className="text-label-md">Form Label</label>
<span className="text-label-sm">Helper text</span>

// Links
<a href="#" className="text-link">Interactive Link</a>
```

### Button Examples

```tsx
import { Button } from "~/components/ui/button";

// Basic buttons
<Button variant="filled">Primary Action</Button>
<Button variant="outlined">Secondary Action</Button>
<Button variant="text">Text Button</Button>
<Button variant="elevated">Elevated Button</Button>

// Different sizes
<Button size="small">Small</Button>
<Button size="medium">Medium (default)</Button>
<Button size="large">Large</Button>

// With icons
<Button leftIcon={<PlusIcon />}>Add Item</Button>
<Button rightIcon={<ArrowIcon />}>Continue</Button>

// States
<Button disabled>Disabled</Button>
<Button loading>Loading...</Button>

// Icon-only buttons
<Button variant="filled" size="icon">
  <SearchIcon />
</Button>
```

### Color Usage

```tsx
// Using CSS variables directly
<div style={{ backgroundColor: 'var(--primary-40)' }}>
  Primary background
</div>

// Using component color tokens
<div className="bg-primary text-primary-foreground">
  Component with proper contrast
</div>

// Dark mode support
<div className="bg-background text-foreground">
  Automatically switches in dark mode
</div>
```

### CSS Custom Properties

All SaasAble design tokens are available as CSS custom properties:

```css
/* Primary colors */
var(--primary-0) through var(--primary-100)

/* Secondary colors */
var(--secondary-0) through var(--secondary-100)

/* Neutral colors */
var(--neutral-0) through var(--neutral-100)

/* Neutral variant colors */
var(--neutral-variant-0) through var(--neutral-variant-100)

/* Component tokens */
var(--background)
var(--foreground)
var(--primary)
var(--primary-foreground)
/* ... and many more */
```

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
