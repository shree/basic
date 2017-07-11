import React from 'react';

export default class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: this.props.user,
      searchQuery: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){

  }

  componentWillReceiveProps(nextProps){
    this.setState({
      user: nextProps.user
    });
  }

  handleChange(){
    this.setState({searchQuery: event.target.value});
  }

  handleSubmit(){

  }

  render() {
    return (
      <nav className='navbar navbar-default navbar-static-top'>
        <div className='navbar-header'>
          <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar'>
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
          <div className='navbar-brand' style={brandStyle}><strong>Stream</strong></div>
        </div>

        <div id='navbar' className='navbar-collapse collapse' style={loginStyle}>
            {!this.state.user.name ?
            <ul className='nav navbar-nav'>
              <li><a href="/auth/google"><strong>Login with Google</strong></a></li>
            </ul> :
            (<ul className='nav navbar-nav'>
              <li>
              <form ref='searchForm' className='navbar-form navbar-left animated' onSubmit={this.handleSubmit}>
                <div className='input-group'>
                  <input type='text' className='form-control' placeholder='Username' value={this.state.searchQuery} onChange={this.handleChange} />
                  <span className='input-group-btn'>
                    <input className="btn btn-primary" type="submit" value="Search" />
                  </span>
                </div>
              </form>
            </li>
            <li>
              <a href="/logout"><strong>Logout</strong></a>
            </li>
            </ul>)}
        </div>
      </nav>
    );
  }
}

var brandStyle = {
  fontSize:"24px",
  paddingLeft:"50px"
};

var loginStyle = {
  float:"right",
  fontSize:"16px",
  paddingRight:"30px"
};
