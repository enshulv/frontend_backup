class Content extends React.Component {

    render() {
        console.log(this.props);
        const { name, gender, age } = this.props
        let html = (
            <ul className="content">
                <li>Name: {name}</li>
                <li>Gender: {gender}</li>
                <li>Age: {age + 1}</li>
            </ul>
        )
        return html
    }

}

function Fun(person) {
    let html = (
        <ul className="content">
            <li>Name: {person.name}</li>
            <li>Gender: {person.gender}</li>
            <li>Age: {person.age + 1}</li>
        </ul>
    )
    return html
}

class Event extends React.Component {
    state = { title: 'This is the default title' }
    render() {
        return (
            <div>
                <input ref={node => this.inputBox = node} type="text" placeholder={this.state.title} />
                <button onClick={this.showAlert}>Click to show alert</button>
                <input type='text' placeholder="Update title on blur" onBlur={(node) => {
                    alert(node.target.value)
                }} />
                <h1>{this.state.title}</h1>
            </div>
        );
    }

    showAlert = () => {
        alert(this.inputBox.value)
        console.log(this);
    }
}

class Collect extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <span>Username:</span>
                <input type="text" ref={username => this.username = username} />
                <span>Password:</span>
                <input type="password" ref={password => this.password = password} />
                <button onClick={() => {
                    alert(`Username: ${this.username.value}, Password: ${this.password.value}`)
                }}>Log in</button>
            </div>
        );
    }
}

class Form extends React.Component {
    state = { username: null, password: null }

    render() {
        return (
            <form action="https://www.baidu.com/" target="_blank" onSubmit={this.handleSubmit}>
                Username: <input onChange={this.save} type="text" name="username" />
                Password: <input onChange={this.save} type="password" name="password" />
                <button>Log in</button>
            </form>
        );
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state);
        let { username, password } = this.state
        alert(`Username: ${username}\nPassword: ${password}`)
    }

    save = (event) => {
        let { name, value } = event.target
        this.setState({ [name]: value })
    }
}

class Transparency extends React.Component {
    state = { opacity: 1 }

    componentDidMount() {
        this.timer = setInterval(this.adjustOpacity, 200)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        return (
            <div id="component">
                <h1 style={{ opacity: this.state.opacity }}>This is a title</h1>
                <button onClick={this.removeComponent}>Click to remove!</button>
            </div>
        );
    }

    removeComponent = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    adjustOpacity = () => {
        let i = this.state.opacity
        if (i <= 0) {
            this.setState({ opacity: 1 })
        }
        else {
            this.setState({ opacity: i - 0.1 })
        }
    }
}

class Lifecycle extends React.Component {
    state = { number: 0 }

    componentWillMount() {
        console.log('Will mount');
    }

    componentDidMount() {
        console.log('Mounted');
    }

    shouldComponentUpdate() {
        return true
    }

    componentWillUpdate() {
        console.log('Will update');
    }

    componentDidUpdate() {
        console.log('Updated');
    }

    render() {
        let { number } = this.state
        console.log('Mounting');
        return (
            <div>
                <h1>{number}</h1>
                <button onClick={() => { this.setState({ number: number + 1 }) }} style={{ marginRight: '5px' }}>Increment</button>
                <button onClick={() => { this.setState({ number: 0 }) }}>Reset</button>
                <button onClick={() => { this.forceUpdate() }}>Force update</button>
            </div>
        );
    }
}

class InheritanceMain extends React.Component {
    state = { name: 'Santana' }
    render() {
        return (
            <div>
                <h1>I am component A</h1>
                <button onClick={() => { this.setState({ name: 'Audi' }) }}>Change car</button>
                <InheritanceChild {...this.state} />
            </div>
        );
    }
}

class InheritanceChild extends React.Component {
    UNSAFE_componentWillReceiveProps() {
        console.log('Will receive props');
    }

    render() {
        console.log('Props updated');
        return (
            <div>
                <h1>This car's name is {this.props.name}</h1>
            </div>
        );
    }
}

class Snapshot extends React.Component {
    state = { news: [] }

    componentDidMount() {
        setInterval(this.generateNews, 1000)
    }

    render() {
        let { news } = this.state
        return (
            <div className="frame">
                {news}
            </div>
        );
    }

    generateNews = () => {
        let { news } = this.state
        let newNews = news.length + 1
        let content = <div key={newNews} className="content-box">{'News ' + (newNews)}</div>
        this.setState({ news: [content, ...news] })
    }
}

class Time extends React.Component {
    state = { currentTime: new Date }
    
    componentDidMount(){
        setInterval(() => { 
            this.setState({currentTime: new Date})
         },1000)
    }
    
    render() { 
        return (
            <div>
                <h3>Current time is: {this.state.currentTime.toTimeString()}</h3>
            </div>
        );
    }
}
 

ReactDOM.render(<Time />, document.getElementById('root'))
