import { useState } from 'react';
import { Button } from '~/components/ui/button';
import { Settings, Menu, X, ChevronDown, HelpCircle } from 'lucide-react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-neutral-95 dark:bg-neutral-10 border-b border-neutral-90 dark:border-neutral-20">
      {/* Mobile Header */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center gap-1.5 py-1">
            <div className="relative">
              {/* Logo Icon - Simplified representation */}
              <div className="w-5 h-6 bg-primary rounded-sm relative">
                <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-neutral-95 rounded-full"></div>
              </div>
            </div>
            <span className="text-display-sm font-bold text-primary">
              SaasAble
            </span>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="outlined"
              size="medium"
              leftIcon={<Settings className="w-4 h-4" />}
              className="text-label-sm"
            >
              Sign in
            </Button>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg bg-neutral-95 hover:bg-neutral-90 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-neutral-10" />
              ) : (
                <Menu className="w-6 h-6 text-neutral-10" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 top-[64px] bg-background/95 backdrop-blur-sm z-50">
            <nav className="p-6 space-y-6">
              <div className="space-y-4">
                <button className="block text-heading-md text-foreground hover:text-primary transition-colors text-left w-full">
                  Home
                </button>
                <div className="space-y-2">
                  <button className="flex items-center gap-2 text-heading-md text-foreground hover:text-primary transition-colors">
                    Landings
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
                <button className="block text-heading-md text-foreground hover:text-primary transition-colors text-left w-full">
                  Components
                </button>
                <div className="space-y-2">
                  <button className="flex items-center gap-2 text-heading-md text-foreground hover:text-primary transition-colors">
                    Pages
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-2">
                  <button className="flex items-center gap-2 text-heading-md text-foreground hover:text-primary transition-colors">
                    Docs
                    <HelpCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-80 space-y-3">
                <Button
                  variant="outlined"
                  size="large"
                  leftIcon={<Settings className="w-4 h-4" />}
                  className="w-full"
                >
                  Preview Pro
                </Button>
                <Button variant="outlined" size="large" className="w-full">
                  Try Free Version
                </Button>
                <Button variant="filled" size="large" className="w-full">
                  Buy Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Tablet Header */}
      <div className="hidden lg:flex xl:hidden">
        <div className="flex items-center justify-between w-full px-8 py-4">
          {/* Logo */}
          <div className="flex items-center gap-1.5 py-1">
            <div className="relative">
              {/* Logo Icon */}
              <div className="w-6 h-6 bg-primary rounded-sm relative">
                <div className="absolute top-1 right-1 w-2 h-2 bg-neutral-95 rounded-full"></div>
              </div>
            </div>
            <span className="text-heading-lg font-bold text-primary">
              SaasAble
            </span>
          </div>

          {/* Tablet Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="outlined"
              size="medium"
              leftIcon={<Settings className="w-4 h-4" />}
            >
              Preview Pro
            </Button>
            <Button variant="outlined" size="medium">
              Try Free Version
            </Button>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg bg-neutral-90 hover:bg-neutral-80 transition-colors ml-2"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="w-6 h-6 text-neutral-10" />
            </button>
          </div>
        </div>

        {/* Tablet Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-neutral-80 shadow-lg z-50">
            <nav className="px-8 py-6">
              <div className="flex flex-wrap gap-6">
                <button className="text-label-md text-foreground hover:text-primary transition-colors">
                  Home
                </button>
                <button className="flex items-center gap-1 text-label-md text-foreground hover:text-primary transition-colors">
                  Landings
                  <ChevronDown className="w-4 h-4" />
                </button>
                <button className="text-label-md text-foreground hover:text-primary transition-colors">
                  Components
                </button>
                <button className="flex items-center gap-1 text-label-md text-foreground hover:text-primary transition-colors">
                  Pages
                  <ChevronDown className="w-4 h-4" />
                </button>
                <button className="flex items-center gap-1 text-label-md text-foreground hover:text-primary transition-colors">
                  Docs
                  <HelpCircle className="w-4 h-4" />
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Desktop Header */}
      <div className="hidden xl:block">
        <div className="flex items-center justify-between px-32 py-4">
          {/* Logo */}
          <div className="flex items-center gap-1.5 py-1">
            <div className="relative">
              {/* Logo Icon */}
              <div className="w-6 h-7 bg-primary rounded-sm relative">
                <div className="absolute top-1 right-1 w-2 h-2 bg-neutral-95 rounded-full"></div>
              </div>
            </div>
            <span className="text-display-sm font-bold text-primary">
              SaasAble
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="flex items-center bg-neutral-90 dark:bg-neutral-20 rounded-full p-1">
            <button className="px-4 py-3 text-label-md text-neutral-30 hover:text-primary transition-colors rounded-full hover:bg-background/50">
              Home
            </button>
            <button className="flex items-center gap-1.5 px-4 py-3 text-label-md text-neutral-30 hover:text-primary transition-colors rounded-full hover:bg-background/50">
              Landings
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="px-4 py-3 text-label-md text-neutral-30 hover:text-primary transition-colors rounded-full hover:bg-background/50">
              Components
            </button>
            <button className="flex items-center gap-1.5 px-4 py-3 text-label-md text-neutral-30 hover:text-primary transition-colors rounded-full hover:bg-background/50">
              Pages
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-1.5 px-4 py-3 text-label-md text-neutral-30 hover:text-primary transition-colors rounded-full hover:bg-background/50">
              Docs
              <HelpCircle className="w-4 h-4" />
            </button>
          </nav>

          {/* Desktop Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="outlined"
              size="small"
              leftIcon={<Settings className="w-4 h-4" />}
            >
              Preview Pro
            </Button>
            <Button variant="outlined" size="small">
              Try Free Version
            </Button>
            <Button variant="filled" size="small">
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
