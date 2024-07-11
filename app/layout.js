// components/layout.js
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Developer Links',
  description: 'This is a link sharing app for developers',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-800 text-white`}>
        {children}
      </body>
    </html>
  );
}
