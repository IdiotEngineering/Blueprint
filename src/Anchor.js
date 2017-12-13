import Component from 'inferno-component';
import './Anchor.css'
import './Flex.css'

export default class Anchor extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class='anchor' onMouseDown={e => e.stopPropagation()}>
        <div class='edge-mark'/>
        <div class='card'>
          <div>Long Input Name</div>
          <div class='value'>True</div>
        </div>
      </div>
    );
  }
}
