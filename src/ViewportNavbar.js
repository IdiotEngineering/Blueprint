import Component from 'inferno-component';
import './ViewportNavbar.css';

class Viewport extends Component {
  constructor() {
    super();
    this.state = {
      zoom: 0
    };
  }

  render() {
    return (
      <div class='viewport-navbar'>
        <div class='viewport-navbar-item'>
          Zoom { this.state.zoom === 0 ? '1 : 1' : -(this.state.zoom + 1) }
        </div>
      </div>
    );
  }
}

export default Viewport;
