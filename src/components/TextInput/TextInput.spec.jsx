import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextInput } from '.';

describe('<TextInput />', () => {
  // isto. deve ter um valor de searchValue
  it('should have a value of searchValue', () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue={'testando'} />);

    const input = screen.getByPlaceholderText(/search by title/i);
    expect(input.value).toBe('testando');
  });

  // isto. deve chamar a função handleChange em cada tecla pressionada
  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue={'o valor'} />);

    const input = screen.getByPlaceholderText(/search by title/i);

    const value = 'o valor';

    userEvent.type(input, value);

    expect(input.value).toBe(value);
    expect(fn).toHaveBeenCalledTimes(value.length);
  });
  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<TextInput handleChange={fn} searchValue={''} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
