import { Provider } from 'react-redux';
import { store } from '../state';

Provider;

const App = () => {
  return (
    <Provider store={store}>
      <div className="">
        <h1>Search For a Package</h1>
      </div>
    </Provider>
  );
};

export default App;
