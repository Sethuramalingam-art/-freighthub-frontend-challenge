import React from 'react';
import { shallow } from 'enzyme';
import UserRegistration from './userRegistration';
describe("UserRegistration Component", () => {
  it("should render userRegistration component", () => {
    const wrapper = shallow(<UserRegistration />);
  });
});