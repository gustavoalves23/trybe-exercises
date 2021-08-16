import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe("Testa se os Inputs de name e email estão presentes na página", () => {
  test("Verifica o input de Name", () => {
    const { getByTestId } = render(<App />);
    const nameInput = getByTestId('input-nome');
    expect(nameInput).toBeInTheDocument;
    expect(nameInput.name).toBe("nome");
    expect(nameInput).toHaveValue("");
    fireEvent.change(nameInput, { target: { value: "gustavo" } })
    expect(nameInput.value).toBe("gustavo")
  })

  test("Verifica o input do e-mail", () => {
    const { getByTestId } = render(<App />);
    const emailInput = getByTestId('input-email');
    expect(emailInput).toBeInTheDocument;
    expect(emailInput.name).toBe("email");
    expect(emailInput).toHaveValue("");
    fireEvent.change(emailInput, { target: { value: "gustavo.alves388@gmail.com" } })
    expect(emailInput.value).toBe("gustavo.alves388@gmail.com")
  })
})
