class 内容 extends React.Component {

    render() {
        console.log(this.props);
        const { 名字, 性别, 年龄 } = this.props
        let html = (
            <ul className="内容">
                <li>姓名:{名字}</li>
                <li>性别:{性别}</li>
                <li>年龄:{年龄 + 1}</li>
            </ul>
        )
        return html
    }

}

function Fun(人物) {
    let html = (
        <ul className="内容">
            <li>姓名:{人物.名字}</li>
            <li>性别:{人物.性别}</li>
            <li>年龄:{人物.年龄 + 1}</li>
        </ul>
    )
    return html
}

class 事件 extends React.Component {
    state = { 标题: '这是默认的标题' }
    render() {
        return (
            <div>
                <input ref={节点 => this.输入框 = 节点} type="text" placeholder={this.state.标题} />
                <button onClick={this.弹窗1}>点击弹窗</button>
                <input type='text' placeholder="失去焦点时更新标题" onBlur={(节点) => {
                    alert(节点.target.value)
                }} />
                <h1>{this.state.标题}</h1>
            </div>
        );
    }

    弹窗1 = () => {
        alert(this.输入框.value)
        console.log(this);
    }
}

class 搜集 extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <span>用户名:</span>
                <input type="text" ref={用户名 => this.用户名 = 用户名} />
                <span>密码:</span>
                <input type="password" ref={密码 => this.密码 = 密码} />
                <button onClick={() => {
                    alert(`用户名是：${this.用户名.value},密码是：${this.密码.value}`)
                }}>登录</button>
            </div>
        );
    }
}

class 表单 extends React.Component {
    state = { 用户名: null, 密码: null }

    render() {
        return (
            <form action="https://www.baidu.com/" target="_bland" onSubmit={this.表单}>
                用户名：<input onChange={this.保存} type="text" name="用户名" />
                密码：<input onChange={this.保存} type="password" name="密码" />
                <button>登录</button>
            </form>
        );
    }

    表单 = (内容) => {
        内容.preventDefault()
        console.log(this.state);
        let { 用户名, 密码 } = this.state
        alert(`用户名是：${用户名}\n密码是：${密码}`)
    }

    保存 = (a) => {
        let { name, value } = a.target
        this.setState({ [name]: value })
    }
}

class 透明 extends React.Component {
    state = { 透明度: 1 }

    componentDidMount() {
        this.定时器 = setInterval(this.透明度设置, 200)
    }

    componentWillUnmount() {
        clearInterval(this.定时器)
    }

    render() {
        return (
            <div id="组件">
                <h1 style={{ opacity: this.state.透明度 }}>这是一个标题捏捏捏</h1>
                <button onClick={this.删除页面}>点击就没啦！</button>
            </div>
        );
    }

    删除页面 = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    透明度设置 = () => {
        let i = this.state.透明度
        if (i <= 0) {
            this.setState({ 透明度: 1 })
        }
        else {
            this.setState({ 透明度: i - 0.1 })
        }
    }
}

class 周期 extends React.Component {
    state = { 数字: 0 }

    componentWillMount() {
        console.log('即将挂载');
    }

    componentDidMount() {
        console.log('挂载完毕后');
    }

    shouldComponentUpdate() {
        return true
    }

    componentWillUpdate() {
        console.log('即将更新');
    }

    componentDidUpdate() {
        console.log('更新完了');
    }

    render() {
        let { 数字 } = this.state
        console.log('挂载');
        return (
            <div>
                <h1>{数字}</h1>
                <button onClick={() => { this.setState({ 数字: 数字 + 1 }) }} style={{ marginRight: '5px' }}>点我+1</button>
                <button onClick={() => { this.setState({ 数字: 0 }) }}>清零</button>
                <button onClick={() => { this.forceUpdate() }}>强制更新</button>
            </div>
        );
    }
}

class 继承_主 extends React.Component {
    state = { 名字: '桑塔纳' }
    render() {
        return (
            <div>
                <h1>我是A组件</h1>
                <button onClick={() => { this.setState({ 名字: '奥迪' }) }}>换车</button>
                <继承_子 {...this.state} />
            </div>
        );
    }
}

class 继承_子 extends React.Component {
    UNSAFE_componentWillReceiveProps() {
        console.log('即将接受外部参数');
    }

    render() {
        console.log('修改完毕');
        return (
            <div>
                <h1>这辆车的名字是{this.props.名字}</h1>
            </div>
        );
    }
}

class 快照 extends React.Component {
    state = { 新闻: [] }

    componentDidMount() {
        setInterval(this.生成新闻, 1000)
    }

    render() {
        let { 新闻 } = this.state
        return (
            <div className="外框">
                {新闻}
            </div>
        );
    }

    生成新闻 = () => {
        let { 新闻 } = this.state
        let Nnew = 新闻.length + 1
        let 内容 = <div key={Nnew} className="内容框" >{'新闻' + (Nnew)}</div>
        this.setState({ 新闻: [内容, ...新闻] })
    }
}

class 时间 extends React.Component {
    state = { 当前时间:new Date }
    
    componentDidMount(){
        setInterval(() => { 
            this.setState({当前时间:new Date})
         },1000)
    }
    
    render() { 
        return (
            <div>
                <h3>当前的时间是：{this.state.当前时间.toTimeString()}</h3>
            </div>
        );
    }
}
 

ReactDOM.render(<时间 />, document.getElementById('root'))