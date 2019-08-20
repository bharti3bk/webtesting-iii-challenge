// Test away 
import React from 'react';
import renderer from 'react-test-renderer';
import Dashboard from './Dashboard'  
import {render , fireEvent} from '@testing-library/react';

describe('<Dashboard/>', () => {
    it('should match snapshot', () => {
      const tree = renderer.create(<Dashboard />).toJSON();
  
      expect(tree).toMatchSnapshot();
    });
  });    

  describe("<Dashboard />", () => {
    it("Default state set to unlocked and open", () => {
      const { getByText } = render(<Dashboard />);
    });

 describe("will Check all text being rendered based on button clicks", () => {
      const { queryByText, getByText } = render(<Dashboard />);

      // Target Close Button(Arrange)
      const closeButton = queryByText("Clos Gate");
      expect(closeButton);
  
      // Click close button(Act)
      fireEvent.click(closeButton);
  
      // Checks new state after close button is clicked(Assert)
      expect(getByText("Lock Gate"));
      expect(getByText("Open Gate"));
      expect(getByText("Unlocked"));
      expect(getByText("Closed"));
  
      // Tests for Lock Button
      const lockButton = queryByText("Lock Gate");
      expect(lockButton);
  
      // Click lock button
      fireEvent.click(lockButton);
  
      // Checks new state after lock button button is clicked
      expect(getByText("Unlock Gate"));
      expect(getByText("Open Gate"));
      expect(getByText("Locked"));
      expect(getByText("Closed"));
  
      // Tests for Unlock Button     
      const unlockButton = queryByText("Unlock Gate");
      expect(unlockButton);
  
      // Click unlock button
      fireEvent.click(unlockButton);
  
      // Checks new state after unlock button button is clicked
      expect(getByText("Lock Gate"));
      expect(getByText("Open Gate"));
      expect(getByText("Unlocked"));
      expect(getByText("Closed"));
  
      // Tests For Open Button
      const openButton = queryByText("Open Gate");
      expect(openButton);
  
      // Click open button
      fireEvent.click(openButton);
  
      // Checks new state after open button button is clicked
      expect(getByText("Lock Gate"));
      expect(getByText("Close Gate"));
      expect(getByText("Unlocked"));
      expect(getByText("Open"));
    });
  });
    
