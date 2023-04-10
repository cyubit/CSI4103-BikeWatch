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

test('Correct color is being rendered', () => {
  expect(MapContainer.colour(500)).toBe("#FF0000");
  expect(MapContainer.colour(400)).toBe("#ff5349");
  expect(MapContainer.colour(250)).toBe("#ffa500");
  expect(MapContainer.colour(100)).toBe("#FFAE42");
  expect(MapContainer.colour(50)).toBe("#FFFF00");
  expect(MapContainer.colour(25)).toBe("#ADFF2F");
  expect(MapContainer.colour(0)).toBe("#00FF00");
});
