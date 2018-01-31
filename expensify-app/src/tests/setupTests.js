import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DotEnv from 'dotenv';

Enzyme.configure({
  adapter: new Adapter()
})

// loading the test environment variable on test runs
DotEnv.config({ path: '.env.test' });
