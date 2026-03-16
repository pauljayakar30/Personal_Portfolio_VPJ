# Vasu Paul Jayakar | Personal Portfolio

A modern, sleek, and highly interactive personal portfolio built with Next.js 15, React 19, Tailwind CSS v4, and Framer Motion. Designed with an Apple-inspired glassmorphism aesthetic.

## Features

- **Next.js 15 App Router:** Leveraging the latest React features and server components.
- **Glassmorphism UI:** Beautiful frosted glass effects, subtle blurs, and monochromatic background orbs.
- **Smooth Scrolling:** Integrated with Lenis for a buttery smooth scrolling experience.
- **Custom Cursor:** A custom animated cursor that interacts with hoverable elements.
- **Framer Motion Animations:** Fluid page transitions, scroll reveal animations, and interactive hover states.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop viewing.
- **Google Analytics:** Pre-configured for GA4 tracking.
- **Custom Error Pages:** Beautifully designed 404, 500, and global error boundaries.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://motion.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** [Google Fonts (Inter)](https://fonts.google.com/specimen/Inter)

## Getting Started

### Prerequisites

- Node.js 18.17 or later

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/vasu-paul-jayakar-portfolio.git
   cd vasu-paul-jayakar-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Copy the `.env.example` file to `.env.local` and fill in your details:
   ```bash
   cp .env.example .env.local
   ```
   *Note: Add your Google Analytics Measurement ID to `NEXT_PUBLIC_GA_MEASUREMENT_ID` if you want to enable tracking.*

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

This project is configured for easy deployment on Vercel or any platform that supports Next.js. It includes the `output: 'standalone'` configuration in `next.config.ts` for Docker/Cloud Run deployments.

### Vercel Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a GitHub repository.
2. Import the project into Vercel.
3. Add your environment variables (`NEXT_PUBLIC_GA_MEASUREMENT_ID`).
4. Deploy!

## License

This project is open-source and available under the [MIT License](LICENSE).
