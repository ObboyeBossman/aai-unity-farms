'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { products, Product } from '@/lib/data';
import { useCart } from '@/components/CartProvider';

export default function ShopPage() {
  const { addItem, items, updateQuantity, removeItem, totalPrice, clearCart } = useCart();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  const categories = ['All', 'Eggs', 'Poultry', 'Feeds', 'Ghanaian Foods'];
  
  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const handleCheckout = () => {
    let message = `Hello AAI Unity Farms! I'd like to order:\n\n`;
    items.forEach(item => {
      const priceStr = item.price ? `(GHS ${item.price * item.quantity})` : `(Price TBA)`;
      message += `- ${item.quantity}x ${item.name} ${priceStr}\n`;
    });
    
    message += `\nTotal: GHS ${totalPrice}\n\nPlease confirm my order.`;
    
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/233542644993?text=${encoded}`, '_blank');
    clearCart();
  };

  return (
    <div className="pt-28 pb-20 min-h-screen relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold text-[#1C1A14] mb-4">Farm Shop</h1>
          <p className="text-[#424242] font-sans text-lg">Order fresh produce directly from our farm. Checkout via WhatsApp.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Shop Area */}
          <div className="flex-1">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full font-ui text-sm font-medium transition-colors ${
                    activeCategory === cat 
                      ? 'bg-[#0D3B17] text-white'
                      : 'bg-white text-[#424242] border border-gray-200 hover:border-[#0D3B17]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-48">
                    <Image src={product.image} alt={product.name} fill className="object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-ui font-bold text-[#0D3B17]">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col h-[calc(100%-12rem)]">
                    <h3 className="font-ui font-bold text-lg text-[#1C1A14] mb-1">{product.name}</h3>
                    <div className="text-[#2E7D32] font-display font-bold text-xl mb-4 mt-auto">
                      {product.price ? `GHS ${product.price}` : 'Contact for Price'}
                      <span className="text-[#757575] font-sans text-sm font-normal ml-1">/ {product.unit}</span>
                    </div>
                    
                    <button
                      onClick={() => addItem({ id: product.id, name: product.name, price: product.price, quantity: 1 })}
                      className="w-full py-2 bg-[#F1F8E9] text-[#0D3B17] hover:bg-[#C8E6C9] font-ui font-bold rounded flex items-center justify-center gap-2 transition-colors"
                    >
                      <ShoppingBag size={18} /> Add to Order
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart Sidebar */}
          <div className="w-full lg:w-80 shrink-0">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sticky top-28">
              <h2 className="text-xl font-display font-bold text-[#1C1A14] mb-4 pb-4 border-b border-gray-100 flex items-center gap-2">
                <ShoppingBag size={20} className="text-[#D4AF37]" /> Your Order
              </h2>

              {items.length === 0 ? (
                <div className="text-center py-8 text-[#757575]">
                  <p className="font-sans mb-4">Your order is empty.</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 max-h-[40vh] overflow-y-auto mb-6 pr-2">
                    {items.map(item => (
                      <div key={item.id} className="flex justify-between items-start text-sm font-sans">
                        <div className="flex-1 pr-4">
                          <p className="font-bold text-[#1C1A14]">{item.name}</p>
                          <p className="text-[#757575]">{item.price ? `GHS ${item.price}` : 'Price TBA'}</p>
                        </div>
                        <div className="flex items-center gap-2 bg-[#F5F5F5] rounded p-1">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-6 h-6 flex items-center justify-center hover:bg-white rounded text-[#424242]">-</button>
                          <span className="w-4 text-center font-bold">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-6 h-6 flex items-center justify-center hover:bg-white rounded text-[#424242]">+</button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-gray-100 pt-4 mb-6">
                    <div className="flex justify-between items-center font-ui font-bold text-lg text-[#1C1A14]">
                      <span>Total:</span>
                      <span>GHS {totalPrice}</span>
                    </div>
                    <p className="text-xs text-[#757575] mt-1">*Excludes items without fixed pricing</p>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className="w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-ui font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    Checkout via WhatsApp
                  </button>
                  <button
                    onClick={clearCart}
                    className="w-full py-2 mt-2 text-[#757575] text-sm hover:text-[#1C1A14] transition-colors"
                  >
                    Clear Cart
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
