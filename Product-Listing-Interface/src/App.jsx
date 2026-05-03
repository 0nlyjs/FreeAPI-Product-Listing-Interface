import React, { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';
import LoadingSkeleton from './components/LoadingSkeleton';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const result = await response.json();
        
        if (result.success) {
          setProducts(result.data.data);
        } else {
          throw new Error(result.message || 'Error fetching products');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/20 blur-[120px]" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/10 bg-slate-950/50 backdrop-blur-md sticky top-0">
        <div className="container mx-auto px-4 py-4 md:py-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-white shadow-lg shadow-primary/20">
              F
            </div>
            <h1 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              FreeAPI Store
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
            <a href="#" className="text-white hover:text-primary transition-colors">Discover</a>
            <a href="#" className="hover:text-primary transition-colors">Categories</a>
            <a href="#" className="hover:text-primary transition-colors">Deals</a>
            <a href="#" className="hover:text-primary transition-colors">About</a>
          </nav>

          <button className="relative p-2 text-slate-300 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-slate-900"></span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-8 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-2 tracking-tight">Trending Products</h2>
            <p className="text-slate-400">Discover our curated selection of premium items.</p>
          </div>
        </div>

        {error ? (
          <div className="bg-rose-500/10 border border-rose-500/20 text-rose-400 p-6 rounded-2xl flex flex-col items-center justify-center text-center space-y-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <h3 className="text-lg font-bold">Oops! Something went wrong</h3>
              <p className="text-sm opacity-80">{error}</p>
            </div>
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 rounded-xl transition-colors font-medium text-sm"
            >
              Try Again
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {loading ? (
              Array.from({ length: 10 }).map((_, i) => (
                <LoadingSkeleton key={i} />
              ))
            ) : (
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-slate-950/80 mt-12">
        <div className="container mx-auto px-4 py-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} FreeAPI Store. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
