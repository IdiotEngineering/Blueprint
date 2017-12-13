import Component from 'inferno-component';
import './registerServiceWorker';
import './App.css';
import Viewport from './Viewport.js';

class App extends Component {
  render() {
    return (
      <div style={{width: '100%', height: '100%'}}>
        <Viewport />
      </div>
    );
  }
}

export default App;
