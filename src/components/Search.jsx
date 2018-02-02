class Search extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  handleInput (bool) {
    this.props.onSubmit($('.form-control')[0].value, bool);
    if (bool) {
      $('.form-control')[0].value = '';
    }
  }
  
  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" onKeyPress={(event)=>
          this.handleInput( (event.key === 'Enter' ? true : false))
        }/>
        <button className="btn hidden-sm-down" onClick={()=>
          this.handleInput( true)
        }>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
    
  }
}
  

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
