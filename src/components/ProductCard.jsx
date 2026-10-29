import { Star } from 'lucide-react'

const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

function getDiscountedPrice(price, discountPercentage) {
  return Math.round(price * (1 - discountPercentage / 100) * 100) / 100
}

function RatingStars({ rating }) {
  const rounded = Math.round(rating)
  const displayRating = rating.toFixed(1)

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex text-amber-500" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={14}
            className={star <= rounded ? 'fill-current' : 'text-stone-300'}
          />
        ))}
      </div>
      <span className="text-sm font-medium text-stone-700">
        <span aria-hidden="true">{displayRating}</span>
        <span className="sr-only">Rated {displayRating} out of 5</span>
      </span>
    </div>
  )
}

/**
 * Shows one product as a card.
 *
 * @param {Object} props
 * @param {import('../../types/product.js').Product} props.product  The product to show
 * @param {(id: number) => void} props.onAddToCart  Called with the product's id when "Add to cart" is clicked
 * @param {string} [props.variant]  "default" or "compact"; "default" if not given
 */
export function ProductCard({ product, onAddToCart }) {
  const { id, title, brand, category, price, discountPercentage, rating, stock, thumbnail } = product
  const hasDiscount = discountPercentage > 0
  const isOutOfStock = stock === 0
  const discountedPrice = getDiscountedPrice(price, discountPercentage)

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border-2 border-black bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden bg-stone-100">
        <img
          src={thumbnail}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {hasDiscount && (
          <span className="absolute right-3 top-3 rounded-full bg-rose-700 px-2.5 py-1 text-xs font-semibold text-white">
            DEAL! -{Math.round(discountPercentage)}%
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-col gap-1">
          {brand && (
            <p className="text-xs font-semibold uppercase tracking-wide text-stone-600">{brand}</p>
          )}
          <h3 className="line-clamp-2 min-h-[2.75rem] text-base font-semibold leading-snug text-stone-900">
            <a
              href={`#product-${id}`}
              className="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
            >
              {title}
            </a>
          </h3>
          <p className="text-sm capitalize text-stone-600">{category}</p>
        </div>

        <RatingStars rating={rating} />

        <div className="mt-auto flex items-end gap-2 pt-1">
          {hasDiscount ? (
            <>
              <p className="text-xl font-bold text-emerald-800">
                <span className="sr-only">Now </span>
                {priceFormatter.format(discountedPrice)}
              </p>
              <p className="pb-0.5 text-sm text-stone-500 line-through">
                <span className="sr-only">Was </span>
                {priceFormatter.format(price)}
              </p>
            </>
          ) : (
            <p className="text-xl font-bold text-stone-900">{priceFormatter.format(price)}</p>
          )}
        </div>

        <button
          type="button"
          onClick={() => onAddToCart(id)}
          disabled={isOutOfStock}
          className="mt-2 w-full rounded-lg bg-stone-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-stone-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700 disabled:cursor-not-allowed disabled:bg-stone-200 disabled:text-stone-600"
        >
          {isOutOfStock ? 'Out of stock' : 'Add to cart'}
        </button>
      </div>
    </article>
  )
}
