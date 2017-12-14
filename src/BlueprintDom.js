import Component from 'inferno-component';
import Node from './Node.js';
import Edge from './Edge'

class BlueprintDom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: [], edges: [], currentEdge: null, // Draggable
      pageLocation: [100, 100],
    };
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);
  };

  handleMouseMove = (e) => {
    const {pageX, pageY} = e;
    if (!this.state.currentEdge) { return; }
    e.preventDefault();
    const {edge, start} = this.state.currentEdge;
    this.setState({currentEdge: {edge, start, end: [pageX, pageY]}});
  };

  handleMouseUp = () => {
    this.setState({currentEdge: null});
  };

  handleEdgeStart = (edge, e) => {
    const {pageX, pageY} = e;
    this.setState(
      {currentEdge: {edge, start: [pageX, pageY], end: [pageX, [pageY]]}});
  };

  render() {
    let draggingEdge = null;
    if (this.state.currentEdge) {
      const {currentEdge: {edge, start, end}} = this.state;
      draggingEdge = <Edge start={start} end={end}/>;
    }
    return (
      <div>
        {draggingEdge}
        <Node
        onEdgeDragStart={this.handleEdgeStart}/> <Node
        onEdgeDragStart={this.handleEdgeStart}/>
      </div>
    );
  }
}

export default BlueprintDom;
