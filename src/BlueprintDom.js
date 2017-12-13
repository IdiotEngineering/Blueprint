import Component from 'inferno-component';
import Node from './Node.js';

class BlueprintDom extends Component {
  render() {
    return (
      <div>
        <Node />
        <Node />
      </div>
    );
  }
}

export default BlueprintDom;
