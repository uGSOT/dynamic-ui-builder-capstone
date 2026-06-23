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
})
