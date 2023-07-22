import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, BrowserRouter as Router } from 'react-router-dom';
import CryptoDashboard from '../routes/CryptoDashboard';
import '@testing-library/jest-dom/extend-expect';
import store from '../redux/store';

test('renders the CryptoDashboard component', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <CryptoDashboard />
      </MemoryRouter>
    </Provider>,
  );

  // Assert that the component is rendered
  const titleElement = screen.getByText(/Welcome to CCTA/i);
  expect(titleElement).toBeInTheDocument();
});

test('search input updates desiredCurrency state', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <CryptoDashboard />
      </MemoryRouter>
    </Provider>,
  );

  // Simulate user input in the search input field
  const searchInput = screen.getByPlaceholderText(/search for a crypto currency/i);
  fireEvent.change(searchInput, { target: { value: 'bitcoin' } });

  // Assert that the desiredCurrency state is updated
  expect(searchInput.value).toBe('bitcoin');
});

describe('CryptoDashboard page testinfg', () => {
  test('Renders CryptoDashboard page correctly', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <CryptoDashboard />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
