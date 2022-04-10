import { render, screen } from '@testing-library/react';
import Header from '../Header';

// get by

it('should render same text passed into title prop', () => {
  render(<Header title='My Header' />);
  const headingElement = screen.getByText(/My Header/i);
  expect(headingElement).toBeInTheDocument();
});

it('should render same text passed into title prop', () => {
  render(<Header title='My Header' />);
  const headingElement = screen.getByRole('heading', { name: 'My Header' });
  expect(headingElement).toBeInTheDocument();
});

it('should render same text passed into title prop', () => {
  render(<Header title='My Header' />);
  const headingElement = screen.getByTitle('Header');
  expect(headingElement).toBeInTheDocument();
});

it('should render same text passed into title prop', () => {
  render(<Header title='My Header' />);
  const headingElement = screen.getByTestId('Header-4');
  expect(headingElement).toBeInTheDocument();
});

// find by

it('should render same text passed into title prop', async () => {
  render(<Header title='My Header' />);
  const headingElement = await screen.findByText(/My Header/i);
  expect(headingElement).toBeInTheDocument();
});

// query by

it('should render same text passed into title prop', async () => {
  render(<Header title='My Header' />);
  const headingElement = screen.queryByText(/dogs/i);
  expect(headingElement).not.toBeInTheDocument();
});

// all

it('should render same text passed into title prop', async () => {
  render(<Header title='My Header' />);
  const headingElements = screen.getAllByRole('heading');
  expect(headingElements.length).toBe(4);
});
