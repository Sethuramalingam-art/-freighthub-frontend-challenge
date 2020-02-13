import React from 'react';
import { shallow } from 'enzyme';
import UserLogin from './userLogin';
describe("UserLogin Component", () => {
  it("should render UserLogin component", () => {
    const wrapper = shallow(<UserLogin />);
  });
});