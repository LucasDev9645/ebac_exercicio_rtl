import { fireEvent, render, screen } from "@testing-library/react";

import PostComment from ".";

describe("Teste para o componente PostComment", () => {
  test("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument(); //botao
  });

  test("Adicionar 2 comentários de teste", () => {
    render(<PostComment />);
    fireEvent.change(screen.getByTestId("comment-field"), {
      target: {
        value: "Comentário de teste 1",
      },
    });
    fireEvent.click(screen.getByTestId("comment-button"));

    fireEvent.change(screen.getByTestId("comment-field"), {
      target: {
        value: "Comentario de teste 2",
      },
    });
    fireEvent.click(screen.getByTestId("comment-button"));
    expect(screen.getAllByTestId("comment")).toHaveLength(2);
  });
});
