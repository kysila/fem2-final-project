// eslint-disable-next-line
import raf from './tempPolyfills';
import Enzyme, {
  configure, shallow, render, mount,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import toJson from 'enzyme-to-json'

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;
// global.toJson = toJson;
window.matchMedia = window.matchMedia
    || function () {
      return {
        matches: false,
        addListener() {},
        removeListener() {},
      };
    };
// Fail tests on any warning
console.error = (message) => {
  throw new Error(message);
};
