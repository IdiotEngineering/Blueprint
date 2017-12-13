import Component from 'inferno-component';
import Anchor from './Anchor';
import './Flex.css'
import './Node.css';

export default class Node extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Test Function',
      description: 'A long test description or something',
      inputs: [],
      outputs: [],
      // Draggable
      mouseDelta: [0, 0],
      pageLocation: [100, 100],
      button: 0,
      isPressed: false,
    };
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);
  };

  handleMouseDown = (e) => {
    const {pageX, pageY} = e;
    const {button, pageLocation: [pressX, pressY]} = this.state;
    if (e.button !== button) {return;}
    e.preventDefault();
    this.setState({
      isPressed: true, mouseDelta: [pageX - pressX, pageY - pressY]
    });
  };

  handleMouseMove = (e) => {
    const {pageX, pageY} = e;
    const {isPressed, mouseDelta: [dx, dy]} = this.state;
    if (isPressed) {
      e.preventDefault();
      const pageLocation = [pageX - dx, pageY - dy];
      this.setState({pageLocation});
    }
  };

  handleMouseUp = () => {
    this.setState({isPressed: false, mouseDelta: [0, 0]});
  };

  render() {
    const {isPressed, pageLocation: [x, y]} = this.state;
    return (
      <div style={{
        'display': 'inline-block',
        'position': 'absolute',
        'transform': `translate3d(${x}px, ${y}px, 0) scale(${1.0})`,
        'z-index': isPressed ? '10' : 'auto'
      }} onMouseDown={this.handleMouseDown}>
        <div class={`node ${isPressed ? 'dragging' : ''}`}>
          <div class='header'>
            <div class='title'>
              <span class='icon'>&#402;</span>
              {this.state.name}
            </div>
            {this.state.description}
          </div>
          <div class='layout-row'>

            <div class='flex-grow layout-column'>
              <Anchor/>
              <Anchor/>
              <Anchor/>
            </div>

            <div style='min-width: 30px;'></div>

            <div class='flex-grow layout-column'>
              <div>Out Thing</div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
