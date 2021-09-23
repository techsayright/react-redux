import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <div>
        {this.props.isShow && <h1>{this.props.counter}</h1>}
        <button onClick={()=> this.props.increment()}>
          Increment
        </button>
        &nbsp;
        <button onClick={()=> this.props.decrement()}>
          Decrement
        </button>
        <br />
        <br />
        <button onClick ={()=> this.props.toggle()}>Toggle</button>
      </div>
    );
  }

}

// it is same as useSelector in functional components
const mapStateToProps = (state)=>{
    return{
        counter: state.counter,
        isShow: state.isShow
    }
}

// it is same as useDispatch in functional components
const mapDispatchToProps = (Dispatch)=>{
    return{
        increment:()=> Dispatch({type: 'increment'}),
        decrement:()=> Dispatch({type: 'decrement'}),
        toggle:()=> Dispatch({type: 'toggle'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)