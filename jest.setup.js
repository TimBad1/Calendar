const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
};