import { render } from '@redwoodjs/testing'

import ZoneDepth from './ZoneDepth'

describe('ZoneDepth', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ZoneDepth />)
    }).not.toThrow()
  })
})
