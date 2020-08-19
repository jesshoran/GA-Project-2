const React = require('react');
const Default = require('../components/Default.jsx');

class Show extends React.Component {
    render() {
        const { name, rank, homePlanet, engineeringAccess } = this.props.crew;
        return (
            <Default>
            <div>
                <h1>{name} Show Page</h1>
                <p>Rank: {rank} </p>
                <p>Home Planet: {homePlanet}</p>
                {engineeringAccess ? `Let her access any and all important data!` : `Nah, can't be trusted`}
            </div>
            </Default>
        )
    }
}

module.exports = Show;