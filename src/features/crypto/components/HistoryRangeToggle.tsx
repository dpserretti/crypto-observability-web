interface Props {
    value: 7 | 30 | 90
    onChange: (days: 7 | 30 | 90) => void
  }

  const options: Array<7 | 30 | 90> = [7, 30, 90]

  export function DaysToggle({ value, onChange }: Props) {
    return (
      <div className="flex gap-2">
        {options.map((days) => {
          const active = value === days

          return (
            <button
              key={days}
              onClick={() => onChange(days)}
              className={[
                'rounded px-3 py-1 text-sm font-medium transition',
                active
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700',
              ].join(' ')}
            >
              {days}D
            </button>
          )
        })}
      </div>
    )
  }
