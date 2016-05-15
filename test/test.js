import test from 'ava';
import 'babel-core/register';

import Registry from '../src/index';

test('2 services, should proceed correctly', t => {
  const registry = new Registry('services');

  const A = registry.define('A', {
    getSum() {
      return 5;
    }
  });

  const B = registry.define('B', {
    getSum() {
      return this.services.A.getSum();
    }
  });

  t.truthy(registry.services.B.getSum() === 5);
});

test('1 service calling other undefined service, should fail', t => {
  const registry = new Registry('services');

  const B = registry.define('B', {
    getSum() {
      return this.services.A.getSum();
    }
  });

  t.throws(() => registry.services.B.getSum());
});
