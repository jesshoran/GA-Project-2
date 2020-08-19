const React = require('react');

class Default extends React.Component {
    render() {
        return(
            <html>
                <head>
                    {/* <link rel="stylesheet" href="/css/style.css"/> */}
                    
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
                    <link rel="stylesheet" href="/css/style.css"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"></link>
                    
                        <title></title>
                </head>
                <body style= {{
                    textAlign: 'center',
                    }}>
                    <h1 className="text-center" ></h1>
                    <ul className="nav justify-content-center">
                        <li className="nav-item"></li>
                            <a className="nav-link" href="/">Home</a>
                        <li className="nav-item"></li>
                            <a className="nav-link" href="/logs">Check out Logs</a>
                        <li className="nav-item"></li>
                            <a className="nav-link" href="/logs/new">Create a new Log</a>
                        <li className="nav-item"></li>
                            <a className="nav-link" href="/crew">Check out Da Crew</a>
                        <li className="nav-item"></li>
                            <a className="nav-link" href="/crew/new">Create a new Crew Member</a>
                    </ul>
                    {this.props.children}
                    <footer>

                    </footer>
                </body>
            </html>
        )
    }
}
module.exports = Default;