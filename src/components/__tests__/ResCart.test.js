import { fireEvent, render, screen } from "@testing-library/react"; // Added `screen` import
import RestarauntMenu from "../RestarauntMenu.js";
import MOCK_DATA from "../mocks/MockResMenu.json";
import { act } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore.js";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should load the restaurant menu component", async () => { // Fixed typo "should"
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestarauntMenu />
      </Provider>
    )
  );


  const accordionHeader = await screen.findByText("Recommended (20)");
  fireEvent.click(accordionHeader);


  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(20);
});
