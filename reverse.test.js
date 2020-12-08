const {reverseString}  = require('./reverse');


test('reverse hello', () => {
    expect(reverseString()).toBe('olleh');
  })

