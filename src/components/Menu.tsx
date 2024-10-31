import React, { useState } from 'react';

const menuCategories = [
  { id: 'starters', name: 'Starters' },
  { id: 'mains', name: 'Main Course' },
  { id: 'desserts', name: 'Desserts' },
  { id: 'drinks', name: 'Drinks' },
];

const menuItems = {
  starters: [
    { name: 'Truffle Arancini', description: 'Crispy risotto balls with black truffle and mozzarella', price: '$16' },
    { name: 'Tuna Tartare', description: 'Fresh tuna with avocado, sesame oil, and won ton crisps', price: '$18' },
    { name: 'Burrata', description: 'Creamy burrata with heirloom tomatoes and basil pesto', price: '$15' },
  ],
  mains: [
    { name: 'Wagyu Ribeye', description: 'Grade A5 Japanese Wagyu with roasted vegetables', price: '$65' },
    { name: 'Lobster Risotto', description: 'Carnaroli rice with butter poached lobster and preserved lemon', price: '$48' },
    { name: 'Duck Breast', description: 'Pan-seared duck with cherry gastrique and root vegetables', price: '$42' },
  ],
  desserts: [
    { name: 'Chocolate Soufflé', description: 'Warm chocolate soufflé with vanilla bean ice cream', price: '$14' },
    { name: 'Crème Brûlée', description: 'Classic vanilla bean crème brûlée', price: '$12' },
    { name: 'Tiramisu', description: 'Traditional Italian tiramisu with mascarpone cream', price: '$13' },
  ],
  drinks: [
    { name: 'Signature Martini', description: 'House-infused gin with dry vermouth and olive', price: '$16' },
    { name: 'Wine Selection', description: 'Curated selection of old and new world wines', price: 'Various' },
    { name: 'Craft Cocktails', description: 'Seasonal cocktails made with premium spirits', price: '$15-18' },
  ],
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('starters');

  return (
    <section id="menu" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Our Menu</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 text-sm font-medium first:rounded-l-md last:rounded-r-md border ${
                  activeCategory === category.id
                    ? 'bg-amber-600 text-white border-amber-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {menuItems[activeCategory].map((item, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                </div>
                <span className="text-lg font-medium text-amber-600">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}