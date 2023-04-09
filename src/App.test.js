import { render, screen } from '@testing-library/react';
import App from './App';

test('App component is being rendered without crashing', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('app-component')).toBeInTheDocument();
});


test('Header component is being rendered', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('header-component')).toBeInTheDocument();
});

test('MapContainer component is being rendered', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('map-container-component')).toBeInTheDocument();
});

test('DisqusBoard component is being rendered', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('disqus-board-component')).toBeInTheDocument();
});

test('Help Icon Opens Modal', () => {
  const setOpen = jest.fn();
  act (() => {
    render(<Header open={false} setOpen={setOpen} />);
  });
  act (() => {
    setOpen(true);
  });
  expect(setOpen).toBeCalled();
});