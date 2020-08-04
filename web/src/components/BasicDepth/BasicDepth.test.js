import { render } from '@redwoodjs/testing'

import BasicDepth from './BasicDepth'

describe('BasicDepth', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BasicDepth />)
    }).not.toThrow()
  })
})
