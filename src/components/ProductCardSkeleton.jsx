export function ProductCardSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="flex animate-pulse flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm"
    >
      <div className="aspect-square bg-stone-200" />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-col gap-2">
          <div className="h-3 w-1/3 rounded bg-stone-200" />
          <div className="h-4 w-11/12 rounded bg-stone-200" />
          <div className="h-4 w-2/3 rounded bg-stone-200" />
          <div className="h-3 w-1/4 rounded bg-stone-200" />
        </div>
        <div className="h-4 w-1/2 rounded bg-stone-200" />
        <div className="mt-auto h-6 w-1/3 rounded bg-stone-200 pt-1" />
        <div className="mt-2 h-10 w-full rounded-lg bg-stone-200" />
      </div>
    </div>
  )
}
