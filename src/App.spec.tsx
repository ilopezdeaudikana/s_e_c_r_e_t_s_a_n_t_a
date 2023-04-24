import { render, screen } from '@testing-library/react'
import App from './App'
import { act } from 'react-dom/test-utils'

describe('Main component', () => {
  it('App should be there', async() => {
    render(<App />)
    await act(() => {
      const wrapper = screen.getByTestId('app')
      expect(wrapper).toBeInTheDocument()
    })
  })
})
