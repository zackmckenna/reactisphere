import { render } from '@redwoodjs/testing'

import HUD from './HUD'

describe('HUD', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HUD />)
    }).not.toThrow()
  })
})
