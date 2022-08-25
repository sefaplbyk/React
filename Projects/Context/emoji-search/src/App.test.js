import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Header from "./Header/Header";
import App from "./App";

describe("Test for patika.dev", () => {
  test("Başlık kısmının başarılı bir şekilde render edilmesi ", () => {
    render(<Header />);
    const head = screen.getByText("Emoji Search");
    expect(head).toBeInTheDocument();
  });
  test("Uygulama ilk açıldığında emoji listesinin başarılı bir şekilde render edilmesi ", () => {
    render(<App />);
    const items = screen.getAllByText(/Emojiyi kopyalamak için tıklayınız/i);
    const item = screen.getByText("Relaxed");
    expect(item).toBeInTheDocument();
    expect(items.length).toEqual(20);
  });
});
