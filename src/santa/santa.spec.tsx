import 'whatwg-fetch'
import { vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { mockPlayer } from '../store/mock-player'
import { Santa } from './santa'

describe('Santa component', () => {

  it('should render without errors, select and dispatch', async () => {
    const mockStore = configureStore()
    const store = mockStore({
      players: { list: [mockPlayer] },
    })
    vi.mock('../store/store', () => {
      return {
        useAppDispatch: vi.fn().mockImplementation(() => vi.fn()),
        useAppSelector: vi.fn().mockImplementation(() => ({ list: [mockPlayer, {...mockPlayer, phone: '123' }] })),
      }
    })
    vi.mock('../store/queries/players.query', () => {
      return {
        useGetPlayersQuery: vi.fn().mockImplementation(() => ({ list: [mockPlayer, {...mockPlayer, phone: '123' }] })),
      }
    })
    vi.mock('@reduxjs/toolkit/query/react', () => {
      return {
        fetchBaseQuery: vi.fn().mockImplementation(() => vi.fn())
      }
    })
    render(
      <Provider store={store}>
        <Santa />
      </Provider>
    )

    await act(async () => {
      const header = screen.findAllByText('Below is a list of the secret santa pairings.')
      expect(header).toBeDefined()
    })
  })
})
