import { Header } from '~/components/ui/header';

export function meta() {
  return [
    { title: 'Header Component - SaasAble Design System' },
    {
      name: 'description',
      content: 'Header component demonstration with responsive design',
    },
  ];
}

export default function HeaderDemo() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Demo Content */}
      <main className="p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-display-lg text-foreground">
              Header Component Demo
            </h1>
            <p className="text-paragraph-lg text-muted-foreground max-w-2xl mx-auto">
              This demonstrates the responsive header component following the
              SaasAble design system. Try resizing your browser to see how it
              adapts to different screen sizes.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-heading-xl text-foreground">Features</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-neutral-95 dark:bg-neutral-20 rounded-lg">
                <h3 className="text-heading-md mb-3">Mobile First</h3>
                <p className="text-paragraph-sm text-muted-foreground">
                  Designed mobile-first with a collapsible menu and optimized
                  touch targets.
                </p>
              </div>

              <div className="p-6 bg-neutral-95 dark:bg-neutral-20 rounded-lg">
                <h3 className="text-heading-md mb-3">Responsive Design</h3>
                <p className="text-paragraph-sm text-muted-foreground">
                  Adapts seamlessly from mobile to tablet to desktop layouts.
                </p>
              </div>

              <div className="p-6 bg-neutral-95 dark:bg-neutral-20 rounded-lg">
                <h3 className="text-heading-md mb-3">Accessibility</h3>
                <p className="text-paragraph-sm text-muted-foreground">
                  WCAG 2.1 AA compliant with proper ARIA attributes and keyboard
                  navigation.
                </p>
              </div>

              <div className="p-6 bg-neutral-95 dark:bg-neutral-20 rounded-lg">
                <h3 className="text-heading-md mb-3">Design Tokens</h3>
                <p className="text-paragraph-sm text-muted-foreground">
                  Uses consistent spacing, colors, and typography from the
                  design system.
                </p>
              </div>

              <div className="p-6 bg-neutral-95 dark:bg-neutral-20 rounded-lg">
                <h3 className="text-heading-md mb-3">Interactive Elements</h3>
                <p className="text-paragraph-sm text-muted-foreground">
                  Dropdown menus, mobile overlay, and hover states with smooth
                  transitions.
                </p>
              </div>

              <div className="p-6 bg-neutral-95 dark:bg-neutral-20 rounded-lg">
                <h3 className="text-heading-md mb-3">Brand Consistency</h3>
                <p className="text-paragraph-sm text-muted-foreground">
                  SaasAble logo and branding elements integrated throughout.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-heading-xl text-foreground">
              Responsive Breakpoints
            </h2>

            <div className="space-y-4">
              <div className="p-4 border border-neutral-80 rounded-lg">
                <h3 className="text-heading-sm mb-2">Mobile (&lt; 1024px)</h3>
                <p className="text-paragraph-sm text-muted-foreground">
                  Logo + Sign in button + Hamburger menu with full-screen
                  overlay navigation
                </p>
              </div>

              <div className="p-4 border border-neutral-80 rounded-lg">
                <h3 className="text-heading-sm mb-2">
                  Tablet (1024px - 1279px)
                </h3>
                <p className="text-paragraph-sm text-muted-foreground">
                  Logo + Preview Pro + Try Free Version buttons + Hamburger menu
                </p>
              </div>

              <div className="p-4 border border-neutral-80 rounded-lg">
                <h3 className="text-heading-sm mb-2">Desktop (≥ 1280px)</h3>
                <p className="text-paragraph-sm text-muted-foreground">
                  Full navigation with logo, horizontal menu, and all action
                  buttons
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
