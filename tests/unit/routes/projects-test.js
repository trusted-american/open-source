import { module, test } from 'qunit';
import { setupTest } from 'open-source/tests/helpers';

module('Unit | Route | projects', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:projects');
    assert.ok(route);
  });
});
