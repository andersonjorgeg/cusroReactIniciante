import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '.';

describe('<Button />', () => {
  //isto. deve renderizar o botão com o texto
  it('should render the button with the text "Load more"', () => {
    const fn = jest.fn();
    render(<Button text="Load more" disabled={false} onClick={fn} />);
    expect.assertions(1);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
  });
  //isto. deve chamar a função ao clicar no botão
  it('should call function on button click', () => {
    const fn = jest.fn();
    render(<Button text="Load more" disabled={false} onClick={fn} />);

    const button = screen.getByRole('button', { name: /Load more/i });

    userEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });
  // isto. deve ser desabilitado quando desabilitado for verdadeiro
  it('should be disabled when disabled is true', () => {
    const fn = jest.fn();
    render(<Button text="Load more" disabled={true} onClick={fn} />);
    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeDisabled();
  });
  //isto. deve ser habilitado quando desabilitado é falso
  it('should be enables when disabled is false', () => {
    const fn = jest.fn();
    render(<Button text="Load more" disabled={false} onClick={fn} />);
    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeEnabled();
  });
  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<Button text="Load more" disabled={false} onClick={fn} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
