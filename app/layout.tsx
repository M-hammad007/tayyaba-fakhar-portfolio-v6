import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from './components/SmoothScroll';

export const metadata: Metadata = {
  title: 'Tayyaba Fakhar — Lead Product & UI/UX Designer',
  description: 'Lead Product & UI/UX Designer crafting intelligent digital products, design systems and visual experiences.',
  openGraph: { title: 'Tayyaba Fakhar — Lead Product & UI/UX Designer', description: 'AI-enabled product, visual and graphics design for multinational teams.' }
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><SmoothScroll />{children}</body></html>}
