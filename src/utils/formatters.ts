export function formatUSD(value?: number | null): string {
    if (typeof value !== 'number') return '-'

    return `$${value.toLocaleString('en-US', {
      maximumFractionDigits: 2,
    })}`
  }

  export function formatCompactUSD(value?: number | null): string {
    if (typeof value !== 'number') return '-'

    return `$${value.toLocaleString('en-US', {
      notation: 'compact',
      maximumFractionDigits: 2,
    })}`
  }

  export function formatShortDate(value?: number | null): string {
    if (typeof value !== 'number') return ''

    return new Date(value).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
    })
  }

  export function formatPercentage(value?: number | null): string {
    if (typeof value !== 'number') return '-'

    const sign = value > 0 ? '+' : ''
    return `${sign}${value.toFixed(2)}%`
  }
