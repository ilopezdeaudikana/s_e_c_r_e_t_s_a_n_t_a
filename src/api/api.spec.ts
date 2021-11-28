import { act } from 'react-dom/test-utils';
import { getPlayers } from './api';
import {mockPlayer} from '../store/mock-player';

/* 
import config from '../config';

const santaApi = config.api; 

*/

const santaApi = 'https://tech-challenge-c81ff.web.app/secret-santa'; 


it('fetches fake players', async () => {

  const fetchSpy = jest.spyOn(global, 'fetch')
  fetchSpy.mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve([mockPlayer]),
    }) as Promise<Response>
  );

  await act(async () => {
    const scans = await getPlayers();
    expect(scans).toEqual([mockPlayer]);
    expect(global.fetch).toHaveBeenCalledWith(
        santaApi
    );
  });
  fetchSpy.mockRestore();
});
