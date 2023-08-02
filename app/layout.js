import './globals.css';

export const metadata = {
  title: 'Mokx',
  description: 'Created using Next.js & Tailwind CSS',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
      )
}
