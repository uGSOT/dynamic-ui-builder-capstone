import React from 'react'
import { render, screen } from '@testing-library/react'
import Centered from './Centered.jsx'

describe('Centered', () => {
  it('renders the headline and actions', () => {
    render(<Centered />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Ship faster. Grow smarter.')
    expect(screen.getByRole('link', { name: /Start free trial/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Book a demo/i })).toBeInTheDocument()
  })

  it('renders default subtext and badge when no props are passed', () => {
    render(<Centered />)

    expect(
      screen.getByText('The all-in-one platform for modern teams to plan, build, and scale software that drives real impact.')
    ).toBeInTheDocument()
    expect(screen.getByText('No credit card required • Cancel anytime')).toBeInTheDocument()
  })

  it('does not render an image when imageUrl is not passed', () => {
    render(<Centered />)
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })

  it('renders a custom headline when passed', () => {
    render(<Centered headline="Build faster. Launch sooner." />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Build faster. Launch sooner.')
  })

  it('renders custom subtext when passed', () => {
    render(<Centered subtext="A faster way to ship your product." />)
    expect(screen.getByText('A faster way to ship your product.')).toBeInTheDocument()
  })

  it('renders a custom primaryAction label and href', () => {
    render(<Centered primaryAction={{ label: 'Get started', href: '/signup' }} />)
    const link = screen.getByRole('link', { name: 'Get started' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/signup')
  })

  it('renders a custom secondaryAction label and href', () => {
    render(<Centered secondaryAction={{ label: 'Learn more', href: '/about' }} />)
    const link = screen.getByRole('link', { name: 'Learn more' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/about')
  })

  it('renders an image when imageUrl is passed', () => {
    render(<Centered imageUrl="/assets/screenshot.png" />)
    const img = screen.getByRole('img')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', '/assets/screenshot.png')
  })

  it('renders a custom badge when passed', () => {
    render(<Centered badge="14-day free trial" />)
    expect(screen.getByText('14-day free trial')).toBeInTheDocument()
  })

  it('does not render a badge when badge is explicitly empty', () => {
    render(<Centered badge="" />)
    expect(screen.queryByText('No credit card required • Cancel anytime')).not.toBeInTheDocument()
  })
})