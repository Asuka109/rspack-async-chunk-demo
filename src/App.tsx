import { Suspense } from 'react';
import { Lazy } from './Lazy';

const lazyComponent = import('./Title').then(({ Title }) => Title);

export default function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Lazy component={lazyComponent} />
    </Suspense>
  );
}
