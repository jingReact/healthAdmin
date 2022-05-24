import React, { PureComponent } from 'react';


let NameContext = React.createContext()

class Car extends PureComponent {
    //错误边界 父组件 
    state = { name: 'userNmae' }
    render() {
        return (
            <div>
                我是父组件
                <NameContext.Provider value={this.state.name}>
                    {/* <Beike>
                        <Xueful></Xueful>
                    </Beike> */}
                    <Beike render={(name)=><Xueful name={name} />}></Beike>
                </NameContext.Provider>

            </div>
        );
    }
}
class Beike extends PureComponent {
    static context = NameContext
    state={name:12334}
    render() {
        console.log(this.props, '@render')
        return (
            <div>
                我是子组件Beike
                {/* <NameContext.Consumer>
                    {
                        value => {
                            return value
                        }
                    }
                </NameContext.Consumer> */}
                {this.props.render(this.state.name)}
                {/* {this.props.children} */}
            </div>
        );
    }
}
class Xueful extends PureComponent {
    static context = NameContext
    render() {
        return (
            <div>
                我是子组件Xueful111
                {this.props.name}
            </div>
        );
    }
}


export default Car