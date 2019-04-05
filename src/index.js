import Fluxible from 'fluxible';
import { createElementWithContext } from 'fluxible-addons-react';
import ReactDOM from 'react-dom';
// import { RouteStore } from 'fluxible-router';

// import routes from './config/routes';
import TodoStore from './stores/TodoStore';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const FluxibleApp = new Fluxible({ component: App });
// const routeStore = RouteStore.withStaticRoutes(routes);

FluxibleApp.registerStore(TodoStore);
// FluxibleApp.registerStore(routeStore);

var context = FluxibleApp.createContext();

ReactDOM.render(createElementWithContext(context), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
