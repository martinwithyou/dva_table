import React from 'react';
import { Router } from 'dva/router';

const cached = {};
function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}

function RouterConfig({ history, app }) {
  const routes = [
    {
      path: '/',
      name: 'IndexPage',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./routes/IndexPage'));
        });
      },
    },
    {
      path: '/404',
      name: '404Page',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./routes/404Page'));
        });
      },
    },
    {
      path: '/demo',
      name: 'demo',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
        	registerModel(app, require('./models/demo'));
          cb(null, require('./routes/demo'));
        });
      },
    },
    {
      path: '/table',
      name: 'table',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
        	registerModel(app, require('./models/table'));
          cb(null, require('./routes/table'));
        });
      },
    },
    {
      path: '/users',
      name: 'UsersPage',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/users'));
          cb(null, require('./routes/Users'));
        });
      },
    },
  ];

  return <Router history={history} routes={routes} />;
}

export default RouterConfig;
