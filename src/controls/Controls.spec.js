// Test away! 
import React from "react";
import { render, fireEvent } from "react-testing-library";
import Controls from "./Controls";  
 
describe("<Controls />", () => {
    it("Default state set to unlocked and open", () => {
      const { getByText } = render(<Controls />);
    }) 
})  
 
