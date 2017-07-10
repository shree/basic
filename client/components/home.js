import React from 'react';

export default class Home extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){

  }

  render() {
    return (
      <div className="container">
        <div>
          <iframe
          src="http://player.twitch.tv/?channel=savjz&muted=true"
          height="480"
          width="854"
          frameBorder="0"
          scrolling="no"
          allowFullScreen />
        </div>
        <div>
        </div>
      </div>
    );
  }
}
