import { useTailwind } from 'tailwind-rn'

export const HelloWorld = () => {
  const tw = useTailwind()
  return (
      <div style={tw('bg-dark-secondary-100')}>
        <p style={tw('text-sm font-bold text-dark-primary-100')}>Hello web!</p>
      </div>
  )
}
