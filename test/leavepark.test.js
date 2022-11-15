
let expect = require('chai').expect;
let parkingLot = require('../parkingLot');

describe('leave KA-01-HH-1234', async function () {
  it('should free slot no 4', async function () {
    var preResult = 'leave KA-01-BB-0001 6';
    var result = await parkingLot.leave(4);
    console.log(result);
    expect(result).to.be.equal(preResult);
  });
});

