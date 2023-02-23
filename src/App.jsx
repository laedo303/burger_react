import { Provider } from 'react-redux';
import { Catalog } from './components/Catalog/Catalog.jsx';
import { Container } from './components/Container/Container.jsx';
import { Header } from './components/Header/Header.jsx';
import { Navigation } from './components/Navigation/Navigation.jsx';
import { store } from './store/index.js';


export const App = () => {

  return (
    <Provider store={store}>
      <Container />
      <Header />
      <main>
        <Navigation />
        <Catalog />
      </main>
      <footer></footer>
    </Provider>
  )
}
