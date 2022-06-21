import React from 'react';
import Adapter17 from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';
// @ts-ignore
import rmwcTestPolyfill from './base/test-polyfill';
import '@testing-library/jest-dom/extend-expect';

const Adapter = Adapter17;

Enzyme.configure({ adapter: new Adapter() });
rmwcTestPolyfill();

const consoleError = console.error;
beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation((...args) => {
    if (
      !(
        typeof args[0] === 'string' &&
        args[0].includes(
          'Warning: An update to %s inside a test was not wrapped in act'
        )
      )
    ) {
      consoleError(...args);
    }
  });
});
