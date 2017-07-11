import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Users from './users'

export default class Test extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
  }

  render() {
    return (
      <Router>
        <div>
          <h2>Accounts</h2>
          <ul>
            <li><Link to="/netflix">Netflix</Link></li>
            <li><Link to="/zillow-group">Zillow Group</Link></li>
            <li><Link to="/yahoo">Yahoo</Link></li>
            <li><Link to="/modus-create">Modus Create</Link></li>
          </ul>

          <Route path="/about" component={About} />
          <Route path="/:id" component={Child}/>
        </div>
      </Router>
    );
  }
}

const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
)

const About = () => (
  <div>
    <h3>About us</h3>
  </div>
)
