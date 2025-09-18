import mountComponent from '@xylem-js/xylem-js/dom/mountComponent.js';
import { createContext } from '@xylem-js/xylem-js/dom/context.js';
import { App } from './App.jsx';

const app = new App();
app.setContext(createContext(null, { $$DEBUG: import.meta.env.DEV }));
mountComponent(app, document.getElementById('app-container'));
