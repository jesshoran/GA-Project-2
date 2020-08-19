const React = require('react');
const Default = require('../components/Default.jsx');

class Index extends React.Component {
    render() {

        return (
            <Default>
            <div>
                <h1>Crew Members Index Page</h1>
                <nav>
                    <a href="/crew/new">Create a New Crew Member</a>
                </nav>
                <ul>
                    {
                        this.props.daCrew.map((crew) => {
                            return (
                                <li key={crew._id}>
                                    <h3>{crew.name}</h3>
                                    <a href={`/crew/${crew._id}`}>See all about {crew.name}</a> <br/>
                                    {/* <p>Rank: {crew.rank}</p>
                                    <p>Home Planet: {crew.homePlanet}</p>
                                    {crew.engineeringAccess ? `This member is allowed access fasho!` : `Nah, they can't be trusted`} */}
                                    {/* delete */}
                                    <form action={`/crew/${crew._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="delete"/>
                                    </form>
                                    <a href={`/crew/${crew._id}/edit`}>Edit</a> 
                        
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            </Default>
        )
    }
}

module.exports = Index;