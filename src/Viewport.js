import BlueprintDom from './BlueprintDom.js';
import Component from 'inferno-component';
import ViewportNavbar from './ViewportNavbar.js';
import './Viewport.css';

class Viewport extends Component {
  render() {
    return (
      <div class='viewport'>
        <ViewportNavbar />
        <div class='orthographic-camera'>
          <BlueprintDom />
        </div>
      </div>
    );
  }
}

export default Viewport;
