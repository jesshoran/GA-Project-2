const React = require('react');
const Default = require('../components/Default.jsx');

class Edit extends React.Component {
    render() {
        const { _id, name, rank, homePlanet, engineeringAccess} = this.props.crew;
        return (
            <Default>
            <div>
                <h1>Edit Page</h1>
                <form action={`/crew/${_id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={name}/> <br/>
                    Rank: <input type="text" name="rank" defaultValue={rank}/> <br/>
                    Home Planet: <input type="text" name="homePlanet" defaultValue={homePlanet}/> <br/>
                    Engineering Access?: 
                    <input type="checkbox" name="engineeringAccess" checked={engineeringAccess? 'checked':''}/>
                    <br/>
                    <input type="submit" name="" value="Submit Changes"/>
                </form>
            </div>
        </Default>
        )
    }
}

module.exports = Edit;
