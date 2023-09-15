import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import AcademicCap from 'ember-static-heroicons/components/solid-20/academic-cap';

module('Integration | Component | icon', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(
      <template>
        <AcademicCap />
      </template>
    );

    assert.dom('svg').exists();
  });
});
