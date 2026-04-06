import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { WaitlistProvider } from '../context/WaitlistContext';
import WaitlistModal from './WaitlistModal';

export default function Layout() {
  return (
    <WaitlistProvider>
      <div className="min-h-screen flex flex-col selection:bg-primary/30 selection:text-primary-fixed">
        <Navbar />
        <div className="flex-1 flex flex-col">
          <Outlet />
        </div>
        <Footer />
      </div>
      <WaitlistModal />
    </WaitlistProvider>
  );
}
