import { runSaga } from 'redux-saga'
import { vi } from 'vitest'
import { fetchPlayers } from './players.saga'
import * as api from '../../api/api'
import { mockPlayer as player } from '../mock-player'

describe('fetchPlayers', () => {
  it('should call players api and dispatch success action', async () => {
    const requestPlayers = vi
      .spyOn(api, 'getPlayers')
      .mockImplementation(async () => {
        return new Promise((resolve) => resolve([player]))
      })

    const dispatched: any = []

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      fetchPlayers as any
    ).toPromise()
    expect(requestPlayers).toHaveBeenCalledTimes(1)
    expect(dispatched).toEqual([
      {
        payload: [player],
        type: 'players/setPlayers'
      }
    ])
    requestPlayers.mockClear()
  })

  it('should call api and dispatch error action', async () => {
    const error = { message: 'ERROR' }
    const requestPlayers = vi
      .spyOn(api, 'getPlayers')
      .mockImplementation(() => {
        throw new Error(error.message)
      })
    const dispatched: any = []
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      fetchPlayers as any
    )

    expect(requestPlayers).toHaveBeenCalledTimes(1)
    expect(dispatched).toEqual([{ type: 'players/setPlayers', payload: [] }])
    requestPlayers.mockClear()
  })
})
