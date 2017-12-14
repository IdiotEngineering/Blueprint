import Component from 'inferno-component';

export default class Edge extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {start: [sX, sY], end: [eX, eY]} = this.props;
    const b = this.props.buffer || 10;
    const left = Math.min(sX, eX);
    const top = Math.min(sY, eY);
    const width = Math.max(sX, eX) - left;
    const height = Math.max(sY, eY) - top;
    const svgStyle = {
      position: 'absolute',
      left: (left - b) + 'px',
      top: (top - b) + 'px',
      width: (width + b + b) + 'px',
      height: (height + b + b) + 'px'
    };
    const pathStyle = {
      fill: 'none', stroke: '#700038', 'stroke-width': '6'
    };
    // Transform points for SVG rendering
    const sXt = sX - left + b;
    const sYt = sY - top + b;
    const eXt = eX - left + b;
    const eYt = eY - top + b;
    let pathData = null;
    return (
      <svg style={svgStyle} shape-rendering="geometricPrecision">
        <path d={`M${sXt},${sYt} C ${eXt},${sYt} ${sXt},${eYt} ${eXt},${eYt}`}
          style={pathStyle}/>
      </svg>
    );
  }
}
