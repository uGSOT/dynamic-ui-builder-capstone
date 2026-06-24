import React from 'react'

function Centered({
  headline = 'Ship faster. Grow smarter.',
  subtext = 'The all-in-one platform for modern teams to plan, build, and scale software that drives real impact.',
  primaryAction = { label: 'Start free trial', href: '#' },
  secondaryAction = { label: 'Book a demo', href: '#' },
  imageUrl,
  badge = 'No credit card required • Cancel anytime',
}) {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white text-center py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900">{headline}</h1>
          <p className="mt-4 text-gray-500">{subtext}</p>

          <div className="mt-6 flex justify-center gap-3">
            <a href={primaryAction.href} className="px-5 py-2.5 rounded-md bg-blue-600 text-white font-medium">
              {primaryAction.label}
            </a>
            <a href={secondaryAction.href} className="px-5 py-2.5 rounded-md border border-gray-300 text-gray-800 font-medium">
              {secondaryAction.label}
            </a>
          </div>

          {badge && <p className="mt-4 text-sm text-gray-400">{badge}</p>}

          {image && <img src={image} alt="" className="mt-10 mx-auto max-w-full" />}
        </div>
      </div>
    </section>
  )
}

export default Centered