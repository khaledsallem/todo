import React, { Component } from 'react'
import { connect } from 'react-redux'

class Input extends Component {
    state = {}

    render() {
        return (
            <div>
                <input type='text' onChange={(e) => { this.props.handleChange(e.target) }} />
                <button onClick={() => { this.props.add(this.props.input) }} >Ajouter</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (target) => {
            dispatch({ type: 'SET_INPUT', value: target.value })
        },
        add: (input) => {
            let objects = {}
            let inputValue = input
            let id = Math.floor(Math.random() * 1000)
            objects = { inputValue, id }
            dispatch
                ({
                    type: 'ADD_INPUT',
                    value: objects
                })
        }
    }
}
const mapStateToProps = (state) => {
    return {
        input: state.input
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Input)