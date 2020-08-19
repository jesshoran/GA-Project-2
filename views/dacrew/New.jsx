const React = require('react');
const Default = require('../components/Default.jsx');

class New extends React.Component {
    render() {
      return (
          <Default>
            <div>
                <h1>New Crew Member Page</h1>
                <form action="/crew" method="POST">
                    Name: <input type="text" name="name"/><br/>
                    Rank: <input type="text" name="rank"/><br/>
                    Home Planet: <input type="text" name="homePlanet"/><br/>
                    Engineering Access?: <input type="checkbox" name="engineeringAccess"/><br/>
                    <input type="submit" name="" value="Create New Log"/><br/>
                </form>
            </div>
            </Default>);
        }
    }

  
  module.exports = New;