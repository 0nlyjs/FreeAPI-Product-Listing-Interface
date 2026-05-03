import React from 'react';

const ProductCard = ({ product }) => {
  const {
    thumbnail,
    title,
    description,
    price,
    discountPercentage,
    rating,
    brand,
  } = product;

  // Calculate original price based on discount
  const originalPrice = (price / (1 - discountPercentage / 100)).toFixed(2);

  return (
    <div className="group relative rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-white/20 flex flex-col h-full">
      {/* Discount Badge */}
      <div className="absolute top-3 right-3 z-10 bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
        -{discountPercentage}%
      </div>

      {/* Image Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-white">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider truncate mr-2">
            {brand}
          </span>
          <div className="flex items-center space-x-1 bg-white/10 px-2 py-0.5 rounded text-xs font-medium text-yellow-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>{rating}</span>
          </div>
        </div>

        <h3 className="text-lg font-bold text-slate-100 mb-1 line-clamp-1 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-slate-400 mb-4 line-clamp-2 flex-grow">
          {description}
        </p>

        <div className="mt-auto">
          <div className="flex items-end space-x-2 mb-4">
            <span className="text-2xl font-black text-white">${price}</span>
            <span className="text-sm text-slate-500 line-through mb-1">${originalPrice}</span>
          </div>

          <button className="w-full py-2.5 px-4 bg-primary hover:bg-primary/90 text-white font-medium rounded-xl transition-all active:scale-95 flex items-center justify-center space-x-2 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
