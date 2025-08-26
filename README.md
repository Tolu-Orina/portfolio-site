# Tolulope Orina - Portfolio Website

A modern, professional portfolio website built with Next.js 15, TypeScript, Tailwind CSS v3, and ShadCN UI.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Dark/Light Mode**: Built-in support for theme switching
- **SEO Optimized**: Proper metadata and Open Graph tags
- **Fast Performance**: Built with Next.js 15 and optimized for speed
- **Interactive Elements**: Progress bars, hover effects, and smooth transitions
- **Modular Architecture**: Organized component structure for easy maintenance

## 🛠️ Tech Stack

- **Next.js 15.5.0** - React framework with App Router
- **React 18.3.1** - Stable React version for better compatibility
- **TypeScript 5.x** - Type safety and better development experience
- **Tailwind CSS v3.4.17** - Utility-first CSS framework
- **ShadCN UI** - Professional component library
- **Framer Motion 12.23.12** - Smooth animations and transitions
- **Lucide React** - Beautiful icons

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main portfolio page
├── components/
│   ├── ui/                  # ShadCN UI components
│   └── sections/            # Portfolio section components
│       ├── HeroSection.tsx
│       ├── SkillsSection.tsx
│       ├── ExperienceSection.tsx
│       ├── CertificationsSection.tsx
│       └── ContactSection.tsx
└── lib/
    └── utils.ts             # Utility functions
```

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Adding Your Profile Picture
Place your profile image in the `public/` folder as `profile.jpg`

### Updating Content
Each section is modular and can be customized independently:

- **Hero Section**: Edit `src/components/sections/HeroSection.tsx`
- **Skills Section**: Edit `src/components/sections/SkillsSection.tsx`
- **Experience Section**: Edit `src/components/sections/ExperienceSection.tsx`
- **Certifications Section**: Edit `src/components/sections/CertificationsSection.tsx`
- **Contact Section**: Edit `src/components/sections/ContactSection.tsx`

### Styling
- Colors and themes are defined in `src/app/globals.css`
- Component styles use Tailwind CSS classes
- Dark mode is automatically supported

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

## 📱 Sections

1. **Hero Section** - Introduction and call-to-action
2. **Skills & Expertise** - Technical skills with progress bars
3. **Professional Experience** - Work history with achievements
4. **Certifications** - Professional certifications and achievements
5. **Contact** - Call-to-action for connections

## 🎨 Design Features

- Gradient backgrounds
- Smooth scroll animations
- Hover effects on cards
- Professional typography
- Responsive grid layouts
- Interactive buttons and badges
- Progress bars for skill proficiency

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [ShadCN UI Documentation](https://ui.shadcn.com)
- [Framer Motion Documentation](https://www.framer.com/motion/)
