import { render } from '@redwoodjs/testing'

import Blogpost from './Blogpost'

describe('Blogpost', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Blogpost />)
    }).not.toThrow()
  })
})
