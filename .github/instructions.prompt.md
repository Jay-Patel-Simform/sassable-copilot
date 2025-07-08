# Project Setup and Implementation Guide

1. Environment Setup
   1.1 Dependencies Installation

```
# Install React Router
npx create-react-router@latest .

# Install Shadcn UI Library
npx shadcn@latest init

# Install Eslint and Prettier
npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser

# Install Husky for Git hooks
npm install --save-dev husky lint-staged
npx husky install
npx husky add .husky/pre-commit "npx lint-staged"
```

1.2 Configuration Files

- [Eslint Config File] (https://github.com/alan2207/bulletproof-react/blob/master/apps/react-vite/.eslintrc.cjs)
- [Prettier Config File] (https://github.com/alan2207/bulletproof-react/blob/master/apps/react-vite/.prettierrc)
- Add to package.json:

```json
"lint-staged": {
  "*.{ts,tsx,js,jsx}": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.{json,css,md}": [
    "prettier --write"
  ]
}
```

1.3 Create a .vscode folder in the root directory and add the following mcp.json file:

```json
{
  "servers": {
    "Framelink Figma MCP": {
      "command": "bash",
      "args": [
        "-c",
        "source .env.example && npx -y figma-developer-mcp --figma-api-key=\"$FIGMA_ACCESS_TOKEN\" --stdio"
      ]
    }
  }
}
```

2. Design System Implementation

- Follow this Tailwind CSS Documentation add these colors and typography variables into `app/app.css` file: (https://tailwindcss.com/docs/theme)

- Fonts Config
- Add this in `app/root.tsx` file:
- Get the border radius from the figma link: [Border Radius](https://www.figma.com/design/SOOB5xE3Jk0qq6bNYahL55/SaasAble-%E2%80%93-FREE-Figma-UI-kit-and-design-system--Community-?node-id=12089-40799&t=zkisXQPBMVrRJSZV-4)
- Get the spacing from the figma link: [Spacing](https://www.figma.com/design/SOOB5xE3Jk0qq6bNYahL55/SaasAble-%E2%80%93-FREE-Figma-UI-kit-and-design-system--Community-?node-id=12089-40668&t=zkisXQPBMVrRJSZV-4)

```
export const links: Route.LinksFunction = () => [
 { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
 {
   rel: 'preconnect',
   href: 'https://fonts.gstatic.com',
   crossOrigin: 'anonymous',
 },
 {
   rel: 'stylesheet',
   href: 'https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap',
 },
  {
   rel: 'stylesheet',
   href: 'https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&display=swap',
 },
];
```

2.1 Colors
Extract and Implement color tokens from:

- [Primary / Secondary / Neutral / Neutral Variant] (https://www.figma.com/design/SOOB5xE3Jk0qq6bNYahL55/SaasAble-%E2%80%93-FREE-Figma-UI-kit-and-design-system--Community-?node-id=53-1191&t=eWNtAceAHhFTiRdh-4)

  2.2 Typography

- Desktop
  - [Headings](https://www.figma.com/design/SOOB5xE3Jk0qq6bNYahL55/SaasAble-%E2%80%93-FREE-Figma-UI-kit-and-design-system--Community-?node-id=12024-131698&t=eWNtAceAHhFTiRdh-4)
  - [Display](https://www.figma.com/design/SOOB5xE3Jk0qq6bNYahL55/SaasAble-%E2%80%93-FREE-Figma-UI-kit-and-design-system--Community-?node-id=12024-131706&t=eWNtAceAHhFTiRdh-4)
  - [Paragraph](https://www.figma.com/design/SOOB5xE3Jk0qq6bNYahL55/SaasAble-%E2%80%93-FREE-Figma-UI-kit-and-design-system--Community-?node-id=12024-131714&t=eWNtAceAHhFTiRdh-4)
  - [Label](https://www.figma.com/design/SOOB5xE3Jk0qq6bNYahL55/SaasAble-%E2%80%93-FREE-Figma-UI-kit-and-design-system--Community-?node-id=12024-131722&t=eWNtAceAHhFTiRdh-4)
  - [Hyperlink](https://www.figma.com/design/SOOB5xE3Jk0qq6bNYahL55/SaasAble-%E2%80%93-FREE-Figma-UI-kit-and-design-system--Community-?node-id=12024-131730&t=eWNtAceAHhFTiRdh-4)

- Tablet
  - [Headings](https://www.figma.com/design/SOOB5xE3Jk0qq6bNYahL55/SaasAble-%E2%80%93-FREE-Figma-UI-kit-and-design-system--Community-?node-id=12024-131647&t=eWNtAceAHhFTiRdh-4)
  - [Display](https://www.figma.com/design/SOOB5xE3Jk0qq6bNYahL55/SaasAble-%E2%80%93-FREE-Figma-UI-kit-and-design-system--Community-?node-id=12024-131656&t=eWNtAceAHhFTiRdh-4)
  - [Paragraph](https://www.figma.com/design/SOOB5xE3Jk0qq6bNYahL55/SaasAble-%E2%80%93-FREE-Figma-UI-kit-and-design-system--Community-?node-id=12024-131664&t=eWNtAceAHhFTiRdh-4)
  - [Label](https://www.figma.com/design/SOOB5xE3Jk0qq6bNYahL55/SaasAble-%E2%80%93-FREE-Figma-UI-kit-and-design-system--Community-?node-id=12024-131672&t=eWNtAceAHhFTiRdh-4)
  - [Hyperlink](https://www.figma.com/design/SOOB5xE3Jk0qq6bNYahL55/SaasAble-%E2%80%93-FREE-Figma-UI-kit-and-design-system--Community-?node-id=12024-131680&t=eWNtAceAHhFTiRdh-4)

- Mobile
  - [Headings](https://www.figma.com/design/SOOB5xE3Jk0qq6bNYahL55/SaasAble-%E2%80%93-FREE-Figma-UI-kit-and-design-system--Community-?node-id=12024-131739&t=eWNtAceAHhFTiRdh-4)
  - [Display](https://www.figma.com/design/SOOB5xE3Jk0qq6bNYahL55/SaasAble-%E2%80%93-FREE-Figma-UI-kit-and-design-system--Community-?node-id=12024-131747&t=eWNtAceAHhFTiRdh-4)
  - [Paragraph](https://www.figma.com/design/SOOB5xE3Jk0qq6bNYahL55/SaasAble-%E2%80%93-FREE-Figma-UI-kit-and-design-system--Community-?node-id=12024-131755&t=eWNtAceAHhFTiRdh-4)
  - [Label](https://www.figma.com/design/SOOB5xE3Jk0qq6bNYahL55/SaasAble-%E2%80%93-FREE-Figma-UI-kit-and-design-system--Community-?node-id=12024-131763&t=eWNtAceAHhFTiRdh-4)
  - [Hyperlink](https://www.figma.com/design/SOOB5xE3Jk0qq6bNYahL55/SaasAble-%E2%80%93-FREE-Figma-UI-kit-and-design-system--Community-?node-id=12024-131771&t=eWNtAceAHhFTiRdh-4)

3. Component Implementation

- Implement the following components using Shadcn UI library:
  - [Button](https://ui.shadcn.com/docs/components/button)

    3.1 Button Component
    Location: `app/components/ui/button.tsx`

  - Design reference: [Button Variants](https://www.figma.com/design/SOOB5xE3Jk0qq6bNYahL55/SaasAble-%E2%80%93-FREE-Figma-UI-kit-and-design-system--Community-?node-id=3647-93187&t=eWNtAceAHhFTiRdh-4)
  - Requirements:
    - Variants: Filed, Outlined, Text, Elevated
    - States: Hover, Focus, Active, Disabled
    - Sizes: Small, Medium, Large
    - Icon Support
    - Loading States
    - Accessibility Features
    - Please follow the colors and typography from the `app/app.css` file

4. Quality Assurance
   4.1 Accessibility:
   - WCAG 2.1 AA compliance
   - ARIA attributes
   - Keyboard navigation
     4.2 Performance:

- Minimal Layout Shifts (CLS)

5. Implementation Notes:

- Use Tailwind CSS utility classes as much as possible
- Follow mobile-first approach
- Maintain consistent spacing using the container system
- All components should use design tokens from `app/app.css`
