import React, {Component} from "react";
import { connect } from 'react-redux';

// const store = Redux.createStore(itemReducer)

const ADD = 'ADD';

const addItemToList = (item) => {
  return {
    type: ADD,
    item
  }
};

const itemReducer = (state = [], action) => {
  switch (action.type) {
    case ADD: return [...state, action.item];
    default: return state;
  }
};

const mapStateToProps = (state) => {
    return {items: state}
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      submitNewMessage: (item) => {
        dispatch(addItemToList(item))
      }
    }
  };
  

class AppReduxTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            value:  e.target.value
        })
    }
    addItem = () => {
        this.props.submitNewValue(this.state.value);
        this.setState({
            value: ""
        })    
    }
    render() {
        const {value} = this.state;
        const {items} = this.props;

        const list = items.map((element, index) => {
            return <li key={index}>{element}</li>
        })
        return (
            <div className="wrapper" style={{marginLeft: 30}}>
                <h2>"AddToList" app</h2>
                <input type="text"
                       value={value}
                       onChange={this.handleChange}
                />
                <button onClick={this.addItem}>Add to list</button>
                <ol>
                    {list}
                </ol>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AppReduxTask);