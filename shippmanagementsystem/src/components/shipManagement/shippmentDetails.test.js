import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import ShippmentDetails from './shippmentDetails';

const mockStore = configureStore([]);
describe("Connected ShippmentDetails Component", () => {
    let store;
  let component;
  beforeEach(() => {
    store = mockStore({
    });
    component = renderer.create(
      <Provider store={store}>
        <ShippmentDetails />
      </Provider>
    );
  });
  it("should render ShippmentDetails component", () => {
    expect(component).toMatchSnapshot();
  });
});