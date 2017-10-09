// https://codepen.io/SpiritusSancti5/pen/zdorZG

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      markdown: ''
    };
  }
  
  handleChange(event){
    this.setState({markdown: event.target.value});
  }
  
  render() {
    return(
      <div className='row' id='main'>
        <div className='col-md-6'>
          <h1>Markdown</h1>
          <textarea onChange={this.handleChange.bind(this)} value={this.state.markdown} rows='10' style={{width: '300'}}/>
        </div>
        <div className='col-md-6'>
          <h1>Preview</h1>
          <div dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}}></div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.render-target'));