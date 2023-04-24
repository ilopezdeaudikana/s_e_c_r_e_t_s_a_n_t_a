import { act } from 'react-dom/test-utils'
import { vi } from 'vitest'
import { getPlayersTest } from './api'
import {mockPlayer} from '../store/mock-player'

it('fetches fake players', async () => {
  global.fetch = vi.fn().mockImplementation(() => {
    return {
      json: () => new Promise(resolve => resolve([mockPlayer]))
    }
  })
  await act(async () => {
    const scans = await getPlayersTest();
    expect(scans).toEqual([mockPlayer]);
    expect(global.fetch).toHaveBeenCalled();
  });
});
