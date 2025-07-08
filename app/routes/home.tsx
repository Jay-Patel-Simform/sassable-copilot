import type { Route } from './+types/home';
import { Button } from '~/components/ui/button';
import { Header } from '~/components/ui/header';
import { Plus, Download, Settings, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export function meta(_: Route.MetaArgs) {
  return [
    { title: 'SaasAble - Design System Showcase' },
    { name: 'description', content: 'SaasAble Design System Components' },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="p-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-display-lg text-foreground">
              SaasAble Design System
            </h1>
            <p className="text-paragraph-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive design system built with React Router and Tailwind
              CSS, featuring modern SaaS-focused components and typography.
            </p>
          </div>

          {/* Component Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/hero" className="group block">
              <div className="p-6 bg-neutral-95 dark:bg-neutral-20 rounded-lg border border-neutral-87 dark:border-neutral-25 hover:border-primary-50 dark:hover:border-primary-60 transition-colors">
                <h3 className="text-heading-md font-semibold text-foreground group-hover:text-primary-50 dark:group-hover:text-primary-60 transition-colors">
                  Hero Section
                </h3>
                <p className="mt-2 text-paragraph-sm text-muted-foreground">
                  Responsive hero section with TailwindCSS, following Figma
                  designs and WCAG 2.1 accessibility guidelines.
                </p>
                <div className="flex items-center mt-4 text-primary-50 dark:text-primary-60 text-sm font-medium">
                  View Component <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>

            <Link to="/header-demo" className="group block">
              <div className="p-6 bg-neutral-95 dark:bg-neutral-20 rounded-lg border border-neutral-87 dark:border-neutral-25 hover:border-primary-50 dark:hover:border-primary-60 transition-colors">
                <h3 className="text-heading-md font-semibold text-foreground group-hover:text-primary-50 dark:group-hover:text-primary-60 transition-colors">
                  Header Component
                </h3>
                <p className="mt-2 text-paragraph-sm text-muted-foreground">
                  Responsive navigation header with mobile menu, dark mode
                  toggle, and accessibility features.
                </p>
                <div className="flex items-center mt-4 text-primary-50 dark:text-primary-60 text-sm font-medium">
                  View Component <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>
          </div>

          {/* Button Components Section */}
          <section className="space-y-8">
            <h2 className="text-heading-xl text-foreground">
              Button Components
            </h2>
            <p className="text-paragraph-md text-muted-foreground">
              Button components following SaasAble design specifications with
              Material Design 3 principles. All buttons include full WCAG 2.1 AA
              accessibility compliance with proper ARIA attributes.
            </p>

            {/* Accessibility Features Demo */}
            <div className="space-y-6 p-6 bg-neutral-95 dark:bg-neutral-20 rounded-lg">
              <h3 className="text-heading-md">Accessibility Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="text-label-lg font-medium">
                    Keyboard Navigation
                  </h4>
                  <p className="text-paragraph-sm text-muted-foreground">
                    All buttons are fully keyboard accessible with proper focus
                    indicators and tab order.
                  </p>
                  <div className="flex gap-2">
                    <Button variant="filled" size="medium">
                      Tab to me
                    </Button>
                    <Button variant="outlined" size="medium">
                      Then here
                    </Button>
                    <Button variant="text" size="medium">
                      And finally here
                    </Button>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-label-lg font-medium">
                    Screen Reader Support
                  </h4>
                  <p className="text-paragraph-sm text-muted-foreground">
                    Proper ARIA attributes, loading states, and semantic HTML
                    ensure screen reader compatibility.
                  </p>
                  <div className="flex gap-2">
                    <Button
                      variant="filled"
                      size="medium"
                      loading
                      aria-label="Processing your request"
                    >
                      Loading State
                    </Button>
                    <Button
                      variant="outlined"
                      size="medium"
                      disabled
                      aria-describedby="disabled-help"
                    >
                      Disabled State
                    </Button>
                  </div>
                  <div
                    id="disabled-help"
                    className="text-paragraph-xs text-muted-foreground"
                  >
                    This button is disabled and cannot be activated
                  </div>
                </div>
              </div>
            </div>

            {/* Button Variants */}
            <div className="space-y-8">
              {/* Filled Buttons */}
              <div className="space-y-4">
                <h3 className="text-heading-md">Filled Buttons</h3>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="filled" size="small">
                    Small Button
                  </Button>
                  <Button variant="filled" size="medium">
                    Medium Button
                  </Button>
                  <Button variant="filled" size="large">
                    Large Button
                  </Button>
                  <Button variant="filled" size="medium" leftIcon={<Plus />}>
                    With Icon
                  </Button>
                  <Button
                    variant="filled"
                    size="medium"
                    rightIcon={<ArrowRight />}
                  >
                    Right Icon
                  </Button>
                  <Button variant="filled" size="medium" disabled>
                    Disabled
                  </Button>
                  <Button variant="filled" size="medium" loading>
                    Loading
                  </Button>
                </div>
              </div>

              {/* Outlined Buttons */}
              <div className="space-y-4">
                <h3 className="text-heading-md">Outlined Buttons</h3>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="outlined" size="small">
                    Small Button
                  </Button>
                  <Button variant="outlined" size="medium">
                    Medium Button
                  </Button>
                  <Button variant="outlined" size="large">
                    Large Button
                  </Button>
                  <Button
                    variant="outlined"
                    size="medium"
                    leftIcon={<Download />}
                  >
                    With Icon
                  </Button>
                  <Button
                    variant="outlined"
                    size="medium"
                    rightIcon={<ArrowRight />}
                  >
                    Right Icon
                  </Button>
                  <Button variant="outlined" size="medium" disabled>
                    Disabled
                  </Button>
                  <Button variant="outlined" size="medium" loading>
                    Loading
                  </Button>
                </div>
              </div>

              {/* Text Buttons */}
              <div className="space-y-4">
                <h3 className="text-heading-md">Text Buttons</h3>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="text" size="small">
                    Small Button
                  </Button>
                  <Button variant="text" size="medium">
                    Medium Button
                  </Button>
                  <Button variant="text" size="large">
                    Large Button
                  </Button>
                  <Button variant="text" size="medium" leftIcon={<Settings />}>
                    With Icon
                  </Button>
                  <Button
                    variant="text"
                    size="medium"
                    rightIcon={<ArrowRight />}
                  >
                    Right Icon
                  </Button>
                  <Button variant="text" size="medium" disabled>
                    Disabled
                  </Button>
                  <Button variant="text" size="medium" loading>
                    Loading
                  </Button>
                </div>
              </div>

              {/* Elevated Buttons */}
              <div className="space-y-4">
                <h3 className="text-heading-md">Elevated Buttons</h3>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="elevated" size="small">
                    Small Button
                  </Button>
                  <Button variant="elevated" size="medium">
                    Medium Button
                  </Button>
                  <Button variant="elevated" size="large">
                    Large Button
                  </Button>
                  <Button variant="elevated" size="medium" leftIcon={<Plus />}>
                    With Icon
                  </Button>
                  <Button
                    variant="elevated"
                    size="medium"
                    rightIcon={<ArrowRight />}
                  >
                    Right Icon
                  </Button>
                  <Button variant="elevated" size="medium" disabled>
                    Disabled
                  </Button>
                  <Button variant="elevated" size="medium" loading>
                    Loading
                  </Button>
                </div>
              </div>

              {/* Icon Buttons */}
              <div className="space-y-4">
                <h3 className="text-heading-md">Icon Buttons</h3>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="filled" size="icon-sm">
                    <Plus />
                  </Button>
                  <Button variant="filled" size="icon">
                    <Plus />
                  </Button>
                  <Button variant="filled" size="icon-lg">
                    <Plus />
                  </Button>
                  <Button variant="outlined" size="icon">
                    <Download />
                  </Button>
                  <Button variant="text" size="icon">
                    <Settings />
                  </Button>
                  <Button variant="elevated" size="icon">
                    <ArrowRight />
                  </Button>
                  <Button variant="filled" size="icon" disabled>
                    <Plus />
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Typography Section */}
          <section className="space-y-8">
            <h2 className="text-heading-xl text-foreground">
              SaasAble Typography System
            </h2>

            {/* Display Typography */}
            <div className="space-y-4">
              <h3 className="text-heading-md">
                Display Typography (Archivo Font)
              </h3>
              <div className="space-y-3">
                <div className="text-display-xl">
                  Display XL - Hero Headlines
                </div>
                <div className="text-display-lg">
                  Display Large - Major Sections
                </div>
                <div className="text-display-md">
                  Display Medium - Page Headers
                </div>
                <div className="text-display-sm">
                  Display Small - Section Headers
                </div>
              </div>
            </div>

            {/* Heading Typography */}
            <div className="space-y-4">
              <h3 className="text-heading-md">
                Heading Typography (Archivo Font)
              </h3>
              <div className="space-y-3">
                <div className="text-heading-xl">Heading XL - Main Content</div>
                <div className="text-heading-lg">
                  Heading Large - Sub Sections
                </div>
                <div className="text-heading-md">
                  Heading Medium - Content Blocks
                </div>
                <div className="text-heading-sm">
                  Heading Small - Minor Sections
                </div>
                <div className="text-heading-xs">
                  Heading XS - Small Headers
                </div>
              </div>
            </div>

            {/* Body Typography */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-heading-md">
                  Paragraph Text (Figtree Font)
                </h3>
                <div className="space-y-3">
                  <p className="text-paragraph-lg">
                    Large paragraph text provides excellent readability for
                    important content and descriptions that need emphasis.
                  </p>
                  <p className="text-paragraph-md">
                    Medium paragraph text is perfect for general body content,
                    articles, and regular reading material.
                  </p>
                  <p className="text-paragraph-sm">
                    Small paragraph text works well for captions, notes, and
                    supporting information.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-heading-md">
                  Labels & Links (Figtree Font)
                </h3>
                <div className="space-y-3">
                  <div className="text-label-lg">Large Label Text</div>
                  <div className="text-label-md">Medium Label Text</div>
                  <div className="text-label-sm">Small Label Text</div>

                  <div className="space-y-2 mt-4">
                    <div className="text-link text-link-lg">
                      Large Link Text
                    </div>
                    <div className="text-link text-link-md">
                      Medium Link Text
                    </div>
                    <div className="text-link text-link-sm">
                      Small Link Text
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Responsive Typography Demo */}
            <div className="space-y-4">
              <h3 className="text-heading-md">Responsive Typography</h3>
              <div className="p-6 bg-neutral-95 dark:bg-neutral-20 rounded-lg">
                <div className="text-heading-lg mb-4">
                  This heading scales on different screen sizes
                </div>
                <p className="text-paragraph-md">
                  The typography system automatically adjusts for tablet and
                  mobile breakpoints. Try resizing your browser window to see
                  how the text scales appropriately for different devices.
                </p>
              </div>
            </div>
          </section>

          {/* Button Variants Section */}
          <section className="space-y-6">
            <h2 className="text-heading-xl text-foreground">Button Variants</h2>

            {/* Filled Buttons */}
            <div className="space-y-4">
              <h3 className="text-heading-md">Filled Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="filled" size="small">
                  Small
                </Button>
                <Button variant="filled" size="medium">
                  Medium
                </Button>
                <Button variant="filled" size="large">
                  Large
                </Button>
                <Button variant="filled" disabled>
                  Disabled
                </Button>
                <Button variant="filled" loading>
                  Loading
                </Button>
              </div>
            </div>

            {/* Outlined Buttons */}
            <div className="space-y-4">
              <h3 className="text-heading-md">Outlined Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="outlined" size="small">
                  Small
                </Button>
                <Button variant="outlined" size="medium">
                  Medium
                </Button>
                <Button variant="outlined" size="large">
                  Large
                </Button>
                <Button variant="outlined" disabled>
                  Disabled
                </Button>
                <Button variant="outlined" loading>
                  Loading
                </Button>
              </div>
            </div>

            {/* Text Buttons */}
            <div className="space-y-4">
              <h3 className="text-heading-md">Text Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="text" size="small">
                  Small
                </Button>
                <Button variant="text" size="medium">
                  Medium
                </Button>
                <Button variant="text" size="large">
                  Large
                </Button>
                <Button variant="text" disabled>
                  Disabled
                </Button>
                <Button variant="text" loading>
                  Loading
                </Button>
              </div>
            </div>

            {/* Elevated Buttons */}
            <div className="space-y-4">
              <h3 className="text-heading-md">Elevated Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="elevated" size="small">
                  Small
                </Button>
                <Button variant="elevated" size="medium">
                  Medium
                </Button>
                <Button variant="elevated" size="large">
                  Large
                </Button>
                <Button variant="elevated" disabled>
                  Disabled
                </Button>
                <Button variant="elevated" loading>
                  Loading
                </Button>
              </div>
            </div>

            {/* Icon Buttons */}
            <div className="space-y-4">
              <h3 className="text-heading-md">Icon Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="filled" leftIcon={<span>🚀</span>}>
                  With Left Icon
                </Button>
                <Button variant="outlined" rightIcon={<span>→</span>}>
                  With Right Icon
                </Button>
                <Button variant="filled" size="icon">
                  🎉
                </Button>
              </div>
            </div>
          </section>

          {/* Color Palette Section */}
          <section className="space-y-6">
            <h2 className="text-heading-xl text-foreground">
              SaasAble Color Palette
            </h2>

            {/* Primary Colors */}
            <div className="space-y-4">
              <h3 className="text-heading-md">Primary Colors</h3>
              <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                <div className="space-y-2">
                  <div
                    className="w-full h-16 rounded-lg"
                    style={{ backgroundColor: 'var(--primary-20)' }}
                  ></div>
                  <p className="text-label-sm text-center">20</p>
                </div>
                <div className="space-y-2">
                  <div
                    className="w-full h-16 rounded-lg"
                    style={{ backgroundColor: 'var(--primary-30)' }}
                  ></div>
                  <p className="text-label-sm text-center">30</p>
                </div>
                <div className="space-y-2">
                  <div
                    className="w-full h-16 rounded-lg"
                    style={{ backgroundColor: 'var(--primary-40)' }}
                  ></div>
                  <p className="text-label-sm text-center">40</p>
                </div>
                <div className="space-y-2">
                  <div
                    className="w-full h-16 rounded-lg"
                    style={{ backgroundColor: 'var(--primary-50)' }}
                  ></div>
                  <p className="text-label-sm text-center">50</p>
                </div>
                <div className="space-y-2">
                  <div
                    className="w-full h-16 rounded-lg"
                    style={{ backgroundColor: 'var(--primary-60)' }}
                  ></div>
                  <p className="text-label-sm text-center">60</p>
                </div>
                <div className="space-y-2">
                  <div
                    className="w-full h-16 rounded-lg"
                    style={{ backgroundColor: 'var(--primary-70)' }}
                  ></div>
                  <p className="text-label-sm text-center">70</p>
                </div>
                <div className="space-y-2">
                  <div
                    className="w-full h-16 rounded-lg"
                    style={{ backgroundColor: 'var(--primary-80)' }}
                  ></div>
                  <p className="text-label-sm text-center">80</p>
                </div>
                <div className="space-y-2">
                  <div
                    className="w-full h-16 rounded-lg"
                    style={{ backgroundColor: 'var(--primary-90)' }}
                  ></div>
                  <p className="text-label-sm text-center">90</p>
                </div>
                <div className="space-y-2">
                  <div
                    className="w-full h-16 rounded-lg"
                    style={{ backgroundColor: 'var(--primary-95)' }}
                  ></div>
                  <p className="text-label-sm text-center">95</p>
                </div>
                <div className="space-y-2">
                  <div
                    className="w-full h-16 rounded-lg"
                    style={{ backgroundColor: 'var(--primary-98)' }}
                  ></div>
                  <p className="text-label-sm text-center">98</p>
                </div>
              </div>
            </div>

            {/* Neutral Colors */}
            <div className="space-y-4">
              <h3 className="text-heading-md">Neutral Colors</h3>
              <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                <div className="space-y-2">
                  <div
                    className="w-full h-16 rounded-lg"
                    style={{ backgroundColor: 'var(--neutral-10)' }}
                  ></div>
                  <p className="text-label-sm text-center">10</p>
                </div>
                <div className="space-y-2">
                  <div
                    className="w-full h-16 rounded-lg"
                    style={{ backgroundColor: 'var(--neutral-20)' }}
                  ></div>
                  <p className="text-label-sm text-center">20</p>
                </div>
                <div className="space-y-2">
                  <div
                    className="w-full h-16 rounded-lg"
                    style={{ backgroundColor: 'var(--neutral-30)' }}
                  ></div>
                  <p className="text-label-sm text-center">30</p>
                </div>
                <div className="space-y-2">
                  <div
                    className="w-full h-16 rounded-lg"
                    style={{ backgroundColor: 'var(--neutral-40)' }}
                  ></div>
                  <p className="text-label-sm text-center">40</p>
                </div>
                <div className="space-y-2">
                  <div
                    className="w-full h-16 rounded-lg"
                    style={{ backgroundColor: 'var(--neutral-50)' }}
                  ></div>
                  <p className="text-label-sm text-center">50</p>
                </div>
                <div className="space-y-2">
                  <div
                    className="w-full h-16 rounded-lg"
                    style={{ backgroundColor: 'var(--neutral-60)' }}
                  ></div>
                  <p className="text-label-sm text-center">60</p>
                </div>
                <div className="space-y-2">
                  <div
                    className="w-full h-16 rounded-lg"
                    style={{ backgroundColor: 'var(--neutral-70)' }}
                  ></div>
                  <p className="text-label-sm text-center">70</p>
                </div>
                <div className="space-y-2">
                  <div
                    className="w-full h-16 rounded-lg"
                    style={{ backgroundColor: 'var(--neutral-80)' }}
                  ></div>
                  <p className="text-label-sm text-center">80</p>
                </div>
                <div className="space-y-2">
                  <div
                    className="w-full h-16 rounded-lg"
                    style={{ backgroundColor: 'var(--neutral-90)' }}
                  ></div>
                  <p className="text-label-sm text-center">90</p>
                </div>
                <div className="space-y-2">
                  <div
                    className="w-full h-16 rounded-lg"
                    style={{ backgroundColor: 'var(--neutral-95)' }}
                  ></div>
                  <p className="text-label-sm text-center">95</p>
                </div>
              </div>
            </div>

            {/* Theme Toggle */}
            <div className="space-y-4">
              <h3 className="text-heading-md">Dark Mode Support</h3>
              <Button
                variant="outlined"
                onClick={() => {
                  const html = document.documentElement;
                  html.classList.toggle('dark');
                }}
              >
                Toggle Dark Mode
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
