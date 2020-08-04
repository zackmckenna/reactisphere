import { render } from '@redwoodjs/testing'

import ActionDepth from './ActionDepth'

describe('ActionDepth', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ActionDepth />)
    }).not.toThrow()
  })
})
