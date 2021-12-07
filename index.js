
const welcome = (<h1>Hello World</h1>)
var page = (<div>
    <h1 className="header"> This is JSX</h1>
    <p>This is a paragraph</p>
</div>)

ReactDOM.render(page, document.getElementById('root'))
//ReactDOM.render(welcome, document.getElementById('root'))


//console.log(element.props)


//creating a fun facts about React
function reactStat() {
    return (
        <div>
            <img src="react-logo.png" style={{ width: 50 }}></img>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on Github</li>
                <li>is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>

        </div>
    )

}


ReactDOM.render(reactStat(), document.getElementById('root'))