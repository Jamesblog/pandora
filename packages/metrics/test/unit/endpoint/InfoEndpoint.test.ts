import {expect} from 'chai';
import {InfoEndPoint} from '../../../src/endpoint/impl/InfoEndPoint';
import {NodeIndicator} from '../../../src/indicator/impl/NodeIndicator';
import {BaseInfoIndicator} from '../../../src/indicator/impl/BaseInfoIndicator';

describe('/test/unit/endpoint/InfoEndpoint.test.ts', () => {

  it('invoke node endpoint', async () => {
    let endpoint = new InfoEndPoint();
    endpoint.initialize();

    let indicator = new NodeIndicator();
    indicator.initialize();

    let indicator1 = new BaseInfoIndicator();
    indicator1.initialize();

    let results: Array<any> = <any> await new Promise((resolve) => {
      setTimeout(async () => {
        resolve(endpoint.invoke());
      }, 100);
    });
    expect(results['DEFAULT_APP'].length).to.be.equal(2);
  });

});
