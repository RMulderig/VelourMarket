import { useEffect, useState } from 'react'
import productsData from './data/products.sample.json'
import { ProductGrid } from './components/ProductGrid.jsx'

const SIMULATED_LOAD_MS = 800

export function App() {
  const [isLoading, setIsLoading] = useState(true)
  const products = productsData.products

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), SIMULATED_LOAD_MS)
    return () => clearTimeout(timer)
  }, [])

  const handleAddToCart = (id) => {
    console.info('Add to cart:', id)
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-800">
            Curated everyday luxury
          </p>
          <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-stone-900 sm:text-4xl">
            Velour Market
          </h1>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="sr-only">Products</h2>
        <ProductGrid products={products} isLoading={isLoading} onAddToCart={handleAddToCart} />
      </main>
    </div>
  )
}
