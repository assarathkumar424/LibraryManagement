import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | alterbookdetails', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:alterbookdetails');
    assert.ok(route);
  });
});
