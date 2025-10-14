import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {/* The Outlet component renders the matched route's component */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;