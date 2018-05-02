import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DotEnv from 'dotenv';

Enzyme.configure({
    adapter: new Adapter()
});

// import DotEnv from 'dotenv'
// DotEnv = require('dotenv')
DotEnv.config({path: '.env.test'});