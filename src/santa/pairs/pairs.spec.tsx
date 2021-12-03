import { render, cleanup, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as reactRedux from 'react-redux';
import { mockPlayer } from '../../store/mock-player';
import { UpdateList } from '../../store/actions/actions';
import { Pairs } from './pairs';
import { Action } from '../../models/models';

afterEach(cleanup);

describe('Pairs component', () => {

  let useDispatchMock: any;
  let mockedDispatch: any;
  beforeEach(() => {
    mockedDispatch = jest.fn();
    useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
    (useDispatchMock as jest.Mock).mockReturnValue(mockedDispatch);
  });

  it('should dispatch UpdateList', async () => {
    const {getByRole} = render(<Pairs list={[mockPlayer]} />);
    const submit = getByRole('button');
    const action: Action = UpdateList();
    userEvent.click(submit);
    await waitFor(() => expect(mockedDispatch).toHaveBeenCalledWith(action));
  });
});
