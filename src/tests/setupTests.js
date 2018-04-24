import Enzyme from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';
import DotEnv from 'dotemv';

Enzyme.configure({
    adapter: new Adapter()
});


require('dotenv').config({path: '.env.test'});