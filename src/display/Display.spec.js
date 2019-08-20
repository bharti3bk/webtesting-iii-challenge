// Test away! 
import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import Display from "./Display";  

describe("<Display />", () => {
    it("Default state set to open and unlocked", () => {
      const { getByText } = render(<Display />);
      // we will Check if unlocked and open are displayed on screen
      expect(getByText("Open"));
      expect(getByText("Unlocked"));
    });
    it("Accepting props", () => {
      // we will Check if display component receives props and changes based off received props
      const { getByText } = render(<Display locked={true} closed={true} />);
      expect(getByText("Closed"));
      expect(getByText("Locked"));
    });
  });