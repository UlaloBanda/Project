import { render, screen } from '@testing-library/react';
import MeetingStart from './MeetingStart';

test('renders learn react link', () => {
  render(<MeetingStart />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
