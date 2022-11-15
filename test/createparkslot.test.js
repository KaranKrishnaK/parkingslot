let expect = require('chai').expect;
let parkingLot = require('../parkingLot');

describe('create 6', async function () {
 
    it('should create 6 parking slots', async function () {
      var preResult = 'Creates parking lot of size 6';
      var result = await parkingLot.createParkingLot(6);
      console.log(result);
      expect(result).to.be.equal(preResult);
  
    });
});
  

  
