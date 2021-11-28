import { Provider } from 'react-redux';
import { store } from './store/store';
import { Santa } from './santa/santa';

function App() {
  return (
    <Provider store={store}>
      <div data-testid='app'>
        <header className='App-header'>
          <Santa />
        </header>
      </div>
    </Provider>
  );
}

export default App;
