import { render } from '@redwoodjs/testing'

import StartDepth from './StartDepth'

describe('StartDepth', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartDepth />)
    }).not.toThrow()
  })
})
