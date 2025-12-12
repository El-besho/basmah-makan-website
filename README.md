# Basmah Makan Website

![Project Status](https://img.shields.io/badge/status-active%20development-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Version](https://img.shields.io/badge/version-1.0.0-orange)

A modern, semantically optimized multi-page website for Basmah Makan decoration business, built with React, Next.js SSG, and Firebase. Designed with advanced SEO principles including semantic entity mapping, visual semantics, and SERP Triad positioning.

## Features

### Core Features
- **Multi-Page Architecture**: 8 service categories + product pages, blog, portfolio
- **Semantic SEO**: Structured data (Schema.org), entity mapping, SERP optimization
- **Visual Semantics**: Consistent design system, meaningful imagery, responsive layouts
- **Firebase Integration**: Firestore CMS, authentication, real-time updates
- **Static Site Generation**: Next.js SSG for optimal performance and SEO
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **Content Management**: Firestore-based CMS for dynamic content

### SEO Features
- Semantic entity mapping (Services, Products, Organization)
- Content pillar & cluster strategy (SERP Triad)
- Internal linking architecture
- Meta optimization (titles, descriptions)
- JSON-LD structured data
- Visual content optimization
- Breadcrumb navigation
- Open Graph & Twitter Cards

### Technical Features
- **Next.js 14+**: React framework with SSG support
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Firebase**: Backend, database, storage, authentication
- **ESLint & Prettier**: Code quality and formatting
- **Lighthouse**: Performance monitoring

## Tech Stack

```
Frontend:     React 18+, Next.js 14+, TypeScript
Styling:      Tailwind CSS, CSS Modules
Backend:      Firebase (Firestore, Storage, Auth)
Deployment:   Vercel
Tools:        ESLint, Prettier, Lighthouse
```

## Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm or yarn
- Firebase project
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/El-besho/basmah-makan-website
cd basmah-makan-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
```bash
cp .env.example .env.local
```

4. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
basmah-makan-website/
├── public/                 # Static files
├── src/
│   ├── pages/             # Next.js pages
│   ├── components/        # Reusable components
│   ├── styles/            # Global styles
│   ├── lib/               # Utility functions
│   ├── types/             # TypeScript types
│   └── data/              # Content data
├── SITE_ARCHITECTURE.md   # SEO & architecture doc
├── IMPLEMENTATION_GUIDE.md # Implementation details
└── README.md              # This file
```

## Available Scripts

```bash
npm run dev              # Start development server
npm run build            # Build for production
npm start                # Start production server
npm run lint             # Run ESLint
npm run format           # Format code with Prettier
```

## Documentation

- **[SITE_ARCHITECTURE.md](./SITE_ARCHITECTURE.md)** - Complete site architecture and SEO strategy
- **[IMPLEMENTATION_GUIDE.md](./IMPLEMENTATION_GUIDE.md)** - Step-by-step implementation guide

## License

MIT License - See LICENSE file for details

## Support

For support, email support@basmah-makan.com

---

**Built with love by Basmah Makan Development Team**

**Status**: Active Development
