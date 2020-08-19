const React = require('react');
const Default = require('./components/Default.jsx');

class Homepage extends React.Component {
    render() {
      return (
        <Default>
          <div>
              <h1>Welcome to the homepage!</h1>
            <a href="/logs">Check out all the Logs!</a><br/>
            <a href="/crew">Check out all the Crew members!</a>
          </div>
          </Default>)
          ;
    }
  }
  
  module.exports = Homepage;