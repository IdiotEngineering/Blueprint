import Component from 'inferno-component';
import './Anchor.css'
import './Flex.css'

export default class Anchor extends Component {
  constructor(props) {
    super(props);
  }

  handleMouseDown = (e) => {
    e.stopPropagation();
    this.props.onEdgeDragStart(this, e);
  };

  render() {
    const {input} = this.props;
    return (
      <div class={'anchor ' + (input ? 'input' : 'output')}
        onMouseDown={this.handleMouseDown}>
        <div class='edge-mark'/>
        <div class='card'>
          <div>Long Input Name</div>
          <div class='value'>True</div>
        </div>
      </div>
    );
  }
}
