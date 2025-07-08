import { Button } from '~/components/ui/button';
import { Sparkles } from 'lucide-react';

// Technology badge data
const techBadges = [
  { name: 'TypeScript', icon: 'TS', color: 'bg-blue-600' },
  { name: 'Next.js', icon: '▲', color: 'bg-black' },
  { name: 'JWT', icon: 'JWT', color: 'bg-pink-500' },
  { name: 'Code Splitting', icon: '⚛', color: 'bg-cyan-400' },
  { name: 'Figma', icon: 'F', color: 'bg-orange-500' },
];

export function HeroSection() {
  return (
    <section className="relative bg-neutral-96 dark:bg-neutral-10">
      {/* Background pattern - simplified version */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23006397' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative">
        {/* Main hero content */}
        <div className="container mx-auto px-4 pt-10 pb-16 lg:px-39 lg:pt-10 lg:pb-16">
          <div className="flex flex-col items-center text-center space-y-3 lg:space-y-6">
            {/* Announcement Badge */}
            <div className="inline-flex items-center gap-1 rounded-full border border-neutral-80 dark:border-neutral-30 bg-white/50 dark:bg-neutral-15/50 px-3 py-1 lg:px-4 lg:py-1">
              <span className="text-xs lg:text-sm font-semibold text-neutral-40 dark:text-neutral-60">
                One Kit, Endless
              </span>
              <div className="inline-flex items-center gap-1 rounded-full bg-primary-90 dark:bg-primary-20 px-2 py-0.5">
                <Sparkles className="w-3 h-3 text-primary-40 dark:text-primary-60" />
                <span className="text-xs lg:text-sm font-semibold text-primary-40 dark:text-primary-60">
                  Possibilities
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="max-w-2xl lg:max-w-4xl">
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-normal leading-tight text-neutral-10 dark:text-neutral-98">
                <span className="block lg:inline">
                  Build Beautiful SaaS App
                </span>{' '}
                <span className="block lg:inline">Faster with SaasAble</span>
              </h1>
            </div>

            {/* Decorative line */}
            <div className="w-24 lg:w-30 h-px bg-primary-50 dark:bg-primary-60 opacity-40 rounded-full" />

            {/* Subtitle */}
            <div className="max-w-md lg:max-w-lg">
              <p className="text-base lg:text-xl xl:text-2xl text-neutral-40 dark:text-neutral-60 leading-relaxed">
                Design front-end marketing pages and powerful admin dashboards
                with ease using our UI Kit
              </p>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col items-center space-y-4 lg:space-y-6 pt-4 lg:pt-6">
              {/* Primary CTA Button */}
              <Button
                variant="filled"
                size="large"
                leftIcon={<Sparkles className="w-4 h-4" />}
                className="px-6 py-3 lg:px-8 lg:py-4 text-sm lg:text-base font-semibold bg-primary-50 hover:bg-primary-40 text-white dark:bg-primary-60 dark:hover:bg-primary-70"
                aria-label="Explore SaasAble components and features"
              >
                Explore Components
              </Button>

              {/* Technology Badges */}
              <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-3 max-w-sm lg:max-w-none">
                {techBadges.map((tech) => (
                  <div
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 lg:gap-2 rounded-full border border-neutral-87 dark:border-neutral-25 bg-white/80 dark:bg-neutral-15/80 px-3 py-1.5 lg:px-4 lg:py-2 backdrop-blur-sm"
                  >
                    <div
                      className={`flex items-center justify-center w-3 h-3 lg:w-4 lg:h-4 rounded-sm text-white text-xs font-bold ${tech.color}`}
                      aria-hidden="true"
                    >
                      {tech.icon === 'TS' && (
                        <svg
                          viewBox="0 0 24 24"
                          className="w-full h-full fill-current"
                        >
                          <path d="M1.5 6.5V18h21V6.5H1.5zm8.03 8.96c-.5.33-1.25.54-2.01.54C6.72 16 6 15.33 6 14.38c0-.94.72-1.63 1.52-1.63.76 0 1.51.21 2.01.54v1.67zm3.22-1.39c-.18-.86-.97-1.5-1.88-1.5c-.9 0-1.69.64-1.88 1.5h3.76z" />
                        </svg>
                      )}
                      {tech.icon === '▲' && tech.icon}
                      {tech.icon === 'JWT' && (
                        <span className="text-[8px] lg:text-[10px] font-bold">
                          {tech.icon}
                        </span>
                      )}
                      {tech.icon === '⚛' && tech.icon}
                      {tech.icon === 'F' && tech.icon}
                    </div>
                    <span className="text-xs lg:text-sm font-semibold text-neutral-40 dark:text-neutral-60">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="container mx-auto px-4 lg:px-8 -mt-8 lg:-mt-24">
          <div className="relative mx-auto max-w-xs md:max-w-2xl lg:max-w-5xl">
            {/* Hero dashboard image from Figma */}
            <div className="relative aspect-[16/9] lg:aspect-[16/10] rounded-2xl lg:rounded-3xl overflow-hidden border-4 lg:border-6 border-neutral-94 dark:border-neutral-25 shadow-xl">
              {/* Responsive images based on breakpoints */}
              <picture>
                <source
                  media="(min-width: 1024px)"
                  srcSet="/images/hero-dashboard-desktop.png"
                  type="image/png"
                />
                <source
                  media="(min-width: 768px)"
                  srcSet="/images/hero-dashboard-tablet.png"
                  type="image/png"
                />
                <img
                  src="/images/hero-dashboard-mobile.png"
                  alt="SaasAble dashboard interface showcasing beautiful UI components and design system features"
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
