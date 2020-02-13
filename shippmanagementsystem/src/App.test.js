import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
describe("AppComponent", () => {
  it("should render app component", () => {
    const wrapper = shallow(<App />);
  });
});
