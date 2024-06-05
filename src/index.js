import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import loding from './images/loading.gif';
const AppLoad = lazy(() => import('./App'));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<img src={loding} alt="Loading..." />}>
      <AppLoad />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
