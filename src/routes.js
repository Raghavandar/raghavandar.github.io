import React from 'react';
import Loadable from 'react-loadable'
import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}

const DataViews = Loadable({
  loader: () => import('./views/DataViews'),
  loading: Loading,
});

const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/data/:view', name: 'DataViews', component: DataViews }
];

export default routes;
