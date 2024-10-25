import { fireEvent, render } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import appStore from "../../utils/appStore";

describe(" should test the header component ", () => {
  it("should load the header component button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button");

    expect(loginButton).toBeInTheDocument();
  });
  it("should render the cart items on the header component ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cartItems = screen.getByText(/Contact/);

    expect(cartItems).toBeInTheDocument();
  });
  it("should be the login button and the logout button", ()=> {
    render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
          </Provider>
        </BrowserRouter>
      );
      const loginButton = screen.getByRole("button", { name: "Login" });
      fireEvent.click(loginButton);
    
      
      const logoutButton = screen.getByRole("button", { name: "Logout" });
    
      expect(logoutButton).toBeInTheDocument();
    
  });
});
