import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';
import NoticeBar from '@/components/NoticeBar';

export const metadata = {
  title: 'My Digital Agency',
  description: 'We create stunning websites and digital experiences.',
}

export default function RootLayout({ children }) {
  return(
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
      </html>
  )
}