import React, { useState, useMemo } from 'react';
import { Product, CategoryFilter, SortOption } from '../types';
import { PRODUCTS, CATEGORIES, CATEGORY_DESCRIPTIONS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Search, SlidersHorizontal, ArrowUpDown, X, Sparkles } from 'lucide-react';

interface StorePageProps {
  initialCategory?: CategoryFilter;
  initialSearch?: string;
  onSelectProduct: (slug: string) => void;
}

export const StorePage: React.FC<StorePageProps> = ({
  initialCategory = 'All',
  initialSearch = '',
  onSelectProduct
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);
  const [sortBy, setSortBy] = useState<SortOption>('featured');

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Category filter
    if (selectedCategory !== 'All') {
      if (selectedCategory === 'Career & Learning') {
        result = result.filter(
          (p) => p.category === 'Career & Learning' || p.category === 'Learning'
        );
      } else {
        result = result.filter((p) => p.category === selectedCategory);
      }
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    // Sorting
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'featured':
      default:
        // Featured products first, then others
        result.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        });
        break;
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      
      {/* Store Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-blue-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          Full Digital Resource Catalog
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Explore the Collection
        </h1>
        <p className="text-base sm:text-lg text-white/70 leading-relaxed font-normal">
          Browse practical digital products for AI, productivity, careers, research and entrepreneurship.
        </p>
      </div>

      {/* Search Bar, Filters & Sorting Controls */}
      <div className="bg-white/[0.04] backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl p-4 sm:p-6 space-y-5">
        
        {/* Search and Sort row */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          
          {/* Search Bar */}
          <div className="relative flex-1 w-full">
            <Search className="w-5 h-5 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="store-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-11 pr-10 py-3 rounded-xl border border-white/15 bg-white/5 text-white placeholder-white/40 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/10 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-white/40 hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <span className="text-xs font-bold text-white/60 uppercase tracking-wider flex items-center gap-1.5 whitespace-nowrap">
              <ArrowUpDown className="w-3.5 h-3.5 text-white/40" />
              Sort:
            </span>
            <select
              id="store-sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="w-full md:w-48 py-2.5 px-3 rounded-xl border border-white/15 bg-slate-900/90 text-white text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="featured" className="bg-slate-900 text-white">Featured</option>
              <option value="price-asc" className="bg-slate-900 text-white">Price: Low to High</option>
              <option value="price-desc" className="bg-slate-900 text-white">Price: High to Low</option>
            </select>
          </div>

        </div>

        {/* Category Pill Filters */}
        <div className="pt-2 border-t border-white/10 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category;
            const count = category === 'All' 
              ? PRODUCTS.length 
              : category === 'Career & Learning'
              ? PRODUCTS.filter(p => p.category === 'Career & Learning' || p.category === 'Learning').length
              : PRODUCTS.filter(p => p.category === category).length;

            return (
              <button
                key={category}
                id={`filter-cat-${category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-150 flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 border border-blue-400/30'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                <span>{category === 'Business & Founder Resources' ? 'Business' : category}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-white/10 text-white/60'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Context Banner */}
        <div className="text-xs text-white/60 pt-1">
          {CATEGORY_DESCRIPTIONS[selectedCategory]}
        </div>

      </div>

      {/* Results Count & Active Filter Indicator */}
      <div className="flex items-center justify-between text-xs sm:text-sm text-white/60 px-1">
        <div>
          Showing <span className="font-bold text-white">{filteredProducts.length}</span> of {PRODUCTS.length} digital products
          {searchQuery && <span> for "<span className="font-bold text-white">{searchQuery}</span>"</span>}
        </div>

        {(selectedCategory !== 'All' || searchQuery) && (
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="font-bold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
          >
            <X className="w-3.5 h-3.5" /> Reset Filters
          </button>
        )}
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-white/[0.04] backdrop-blur-2xl rounded-3xl border border-white/10 p-8 space-y-4 shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-white/10 text-white/60 flex items-center justify-center mx-auto border border-white/10">
            <Search className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-black text-white">No products match your search</h3>
          <p className="text-sm text-white/60 max-w-sm mx-auto">
            Try adjusting your search query or selecting a different category filter.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-sm hover:from-blue-400 hover:to-indigo-500 border border-white/20 shadow-lg shadow-blue-500/25 transition-all"
          >
            View All 11 Products
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewProduct={onSelectProduct}
            />
          ))}
        </div>
      )}

    </div>
  );
};
