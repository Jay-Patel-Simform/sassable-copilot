import type { Route } from './+types/hero';

import { HeroSection } from '~/components/ui/hero-section';
import { Header } from '~/components/ui/header';

export function meta(_: Route.MetaArgs) {
  return [
    { title: 'Hero Section - SaasAble Design System' },
    {
      name: 'description',
      content:
        'Responsive hero section with TailwindCSS and accessibility features',
    },
  ];
}

export default function Hero() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
    </div>
  );
}
