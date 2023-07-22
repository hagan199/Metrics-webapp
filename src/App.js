import { Routes, Route } from 'react-router';
import { Provider } from 'react-redux';
import CryptoDashboard from './routes/CryptoDashboard';
import CryptoDetails from './routes/DetailsPage';
import store from './redux/store';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Provider store={store}>
        <Navigation />
        <Routes>
          <Route path="/" element={<CryptoDashboard />} />
          <Route path="/details/:currencyID" element={<CryptoDetails />} />
        </Routes>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
