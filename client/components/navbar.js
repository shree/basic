import React from 'react';

export default class Navbar extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){

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
        </div>
        <div id='navbar' className='navbar-collapse collapse'>
          <ul className='nav navbar-nav'>
            <li><a>Stream</a></li>
            <li><a href="/auth/google">Login with Google</a></li>
            <li><a href="/logout">Logout</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}
