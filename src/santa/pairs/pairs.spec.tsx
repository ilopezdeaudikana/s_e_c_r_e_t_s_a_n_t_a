import { mockPlayer } from '../../store/mock-player'
import { vi } from 'vitest'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { render, screen, waitFor, fireEvent} from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { Pairs } from './pairs'

describe('Pairs component', () => {
  it('should dispatch updateList', async () => {
    const mockStore = configureStore()
    const store = mockStore({
      players: { list: [mockPlayer] }
    })
    vi.mock('../store/store', () => {
      return {
        useAppDispatch: vi.fn().mockImplementation(() => vi.fn()),
        useAppSelector: vi
          .fn()
          .mockImplementation(() => ({
            list: []
          }))
      }
    })
    const dispatchSpy = vi.spyOn(store,'dispatch')
    const {container} = render(
      <Provider store={store}>
        <Pairs list={[mockPlayer]} />
      </Provider>
    )
    const submit = screen.getByRole('button')
    const listItems = container.querySelectorAll('li')
    act(() => {
      expect(listItems?.length).toBe(1)
      expect(submit).toBeInTheDocument()
    })
    fireEvent.click(submit)
    await waitFor(() => {
      expect(dispatchSpy).toHaveBeenCalledWith({
       payload: undefined,
        type: 'players/updateList',
      })
    })
  })
})
