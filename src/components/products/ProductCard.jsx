import { useCart } from '../../context/CartContext'

export function ProductCard({ product, showSpecs = false }) {
  const { addToCart } = useCart()

  return (
    <div className="bg-white border border-gray-200 rounded-none overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative group h-full">
      {/* Sale Badge */}
      <div className="absolute top-2.5 left-2.5 z-10">
        {product.isSale && (
          <span className="bg-[#5cb85c] text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wide shadow-2xs">
            SALE
          </span>
        )}
      </div>

      {/* Product Image / Specs */}
      <div className="p-6 flex items-center justify-center bg-white h-[280px] sm:h-[300px] shrink-0">
        {showSpecs && product.specifications ? (
          <div className="w-full text-left space-y-2 text-xs p-3 bg-gray-50 border border-gray-100 rounded">
            <p><strong className="text-gray-900">Brand:</strong> {product.specifications.brand}</p>
            <p><strong className="text-gray-900">Origin:</strong> {product.specifications.origin}</p>
            <p><strong className="text-gray-900">Volume:</strong> {product.specifications.volume}</p>
            <p><strong className="text-gray-900">Usage:</strong> {product.specifications.usage}</p>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            className="h-[210px] sm:h-[230px] max-h-[235px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </div>

      {/* Info & Price Area */}
      <div className="p-5 pt-3 text-center flex-1 flex flex-col justify-between bg-[#f8f9fa] border-t border-gray-100">
        <div>
          <p className="text-[11px] font-semibold tracking-widest text-gray-400 uppercase mb-1.5">
            {product.category}
          </p>

          <h3 className="text-sm sm:text-[15px] font-semibold text-gray-800 mb-2 hover:text-[#551760] transition-colors">
            {product.name}
          </h3>

          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-base sm:text-[17px] font-bold text-[#f39c12]">
              ${product.price.toFixed(2)}
            </span>

            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          type="button"
          onClick={() => addToCart(product)}
          className="w-full bg-[#551760] hover:bg-[#481352] text-white text-xs font-semibold py-2.5 px-4 transition-colors uppercase tracking-wider cursor-pointer active:scale-98 shadow-xs"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}