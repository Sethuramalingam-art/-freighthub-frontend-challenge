import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import ShippmentDetailView from './shippmentDetailView';

const mockStore = configureStore([]);
describe("Connected ShippmentDetailView Component", () => {
    let store;
  let component;
  beforeEach(() => {
    store = mockStore({
    });
    component = renderer.create(
      <Provider store={store}>
        <ShippmentDetailView />
      </Provider>
    );
  });
  it("should render ShippmentDetailView component", () => {
    expect(component).toMatchSnapshot();
  });
});