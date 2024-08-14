
import { Component } from "react";


class ClassBasedComponent extends Component {

    state = {
        showText: false,
        changeColor: false,
        count: 0, // Add this line
        changeCountStyle: false
    }

    handleClick = () => {
        console.log("Button clicked");

        const { showText,changeColor } = this.state;

        this.setState({showText: !showText});
        // this.setState({showText: !showText});
    };

    //ComponentDidMount()
    // ComponentDidUpdate
    // componentDidUnmount

    componentDidMount(){
        console.log('this is for the first time on page load');

        this.setState({
            showText: !this.state.showText,
            changeColor:!this.state.changeColor,
        });
        
    }

    handleCount = () => {
        this.setState({
            ...this.state,
            count: this.state.count + 1
        });
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps,prevState)
        if(prevState && prevState.count !== this.state.count && this.state.count == 10){
            this.setState({
                ...this.state,
                changeCountStyle:  true
            });
        }
    }

    componentWillUnmount() { 
       console.log("ComponentWillUnmount is working");
        
    }

    render() {

        const { showText ,changeColor,count,changeCountStyle } = this.state;
        console.log(changeCountStyle);
        
        return <div>
            {
                showText ?
                <><h2 style={{ color: changeColor? 'red' : 'yellow' }}>Hello, I'm a class-based component!</h2><h3>My name is Adil</h3></> 
            : null
            }
            <button onClick={this.handleClick}>Toggle Text</button>
            <button onClick={this.handleCount}>Increase Count value</button>
            <h3 style={{ color: changeCountStyle ? 'blue' : 'green', fontSize: changeCountStyle ? '30px' : '20px' }}>Count is :{count}</h3>
        </div>
    }
}

export default ClassBasedComponent;