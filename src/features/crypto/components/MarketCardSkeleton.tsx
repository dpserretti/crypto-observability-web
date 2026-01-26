export function MarketCardSkeleton() {
    return (
      <div className="rounded-lg bg-slate-900 p-6 shadow animate-pulse space-y-4">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="h-5 w-24 rounded bg-slate-700" />
          <div className="h-4 w-12 rounded bg-slate-700" />
        </div>

        {/* Price */}
        <div className="h-10 w-48 rounded bg-slate-700" />

        {/* Market cap */}
        <div className="h-4 w-64 rounded bg-slate-700" />

        {/* Volume */}
        <div className="h-4 w-56 rounded bg-slate-700" />
      </div>
    )
  }
