import { h, render } from 'preact';
import App from './App';
import './styles/index.scss';

const root = document.getElementById('root');

// render an instance of Clock into <div id="root">:
render(
  <App
    framework='Preact'
    bundler='parcel-bundler'
    name='Viewer'
  />,
  root, root.lastChild
);