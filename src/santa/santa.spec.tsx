import { render, cleanup, waitFor } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import * as reactRedux from 'react-redux';
import { mockPlayer } from '../store/mock-player';
import { Santa } from './santa';
afterEach(cleanup);

describe('Santa component', () => {
  let useSelectorMock: any;
  let useDispatchMock: any;
  let mockedDispatch: any;
  beforeEach(() => {
    mockedDispatch = jest.fn();
    useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
    useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    (useDispatchMock as jest.Mock).mockReturnValue(mockedDispatch);
  });

  it('should render without errors, select and dispatch', async () => {
    const mockStore = configureStore();

    const store = mockStore({
      players: { list: [mockPlayer] },
    });
    render(
      <reactRedux.Provider store={store}>
        <Santa />
      </reactRedux.Provider>
    );

    await waitFor(() => {
      expect(mockedDispatch).toHaveBeenCalledTimes(1);
      expect(useSelectorMock).toHaveBeenCalledTimes(1);
    });
  });
});
