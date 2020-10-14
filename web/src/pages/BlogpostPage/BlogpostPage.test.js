import { render } from '@redwoodjs/testing'

import BlogpostPage from './BlogpostPage'

describe('BlogpostPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BlogpostPage />)
    }).not.toThrow()
  })
})
