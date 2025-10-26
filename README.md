# Veer UI
Veer UI is a modular React component library built with TypeScript, Tailwind CSS, and Storybook. Designed for clean previews, isolated styles, and frictionless integration into modern frontend stacks.

## 🚀 Features
- ⚛️ Built with React + TypeScript
- 🎨 Tailwind CSS for utility-first styling
- 📚 Storybook for component previews and documentation
- 🧩 Modular structure with centralized exports
- 🛠️ Optimized build output—no dev-only assets or recursive bloat

## 📦 Installation
```bash
npm install veer-ui
```

### 🔧 Usage
Import components from the central entry point:
```ts 
import { Test } from 'veer-ui'; 
```

## 🧪 Development
Build the library:
```bash
npm run tw:build 
```

Start Storybook locally:
```bash
npm run storybook 
```

## 📁 Project Structure
```bash
src/ 
├── components/ 
│ └── Example.tsx 
├── stories/ 
│ └── Example.stories.ts 
├── tailwind.css 
├── index.css 
└── index.ts 
```

## 🧰 Tooling
- **TypeScript:** Strict typing and clean interfaces
- **Storybook:** Live component previews and documentation
- **Tailwind CSS:** Utility-first styling with purge logic
- **ESLint + Prettier:** Code quality and formatting

## 🧼 Build Hygiene
- No recursive file inclusion
- Dev-only assets excluded from final package
- Clean exports via src/stories/index.ts

## 🤝 Contributing
See [CONTRIBUTING](CONTRIBUTING.md) for guidelines.