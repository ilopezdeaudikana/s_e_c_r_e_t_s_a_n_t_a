import { render, cleanup } from '@testing-library/react';
import { mockPlayer } from '../../store/mock-player';
import { Card } from './card';
afterEach(cleanup);

describe('Card component', () => {

  it('should render without errors', async () => {
    const tree = render(
      <Card pair={{ from: mockPlayer, to: mockPlayer }} />
    );
    expect(tree).toMatchSnapshot();
  });
});
