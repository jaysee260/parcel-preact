import { h, Component } from 'preact';
import Clock from './components/Clock'

export default class App extends Component {
  render(props) {
    return (
      <div id='main'>
        <h3>Hello {props.name}</h3>
        <h4>I'm a very single web application that uses <a target='blank' href='https://preactjs.com/guide/getting-started' >{props.framework}</a> and <a target='_blank' href='https://parceljs.org/getting_started.html' >{props.bundler}</a></h4>

        <h4 id='fyi'> -- FYI -- </h4>
        <p>Preact is a fast 3kB alternative to React with the same modern API.</p>
        <p>Parcel is a blazing fast, zero configuration web application bundler</p>
        <p>Be sure to check them out!</p>
        <Clock />
      </div>
    )
  }
}