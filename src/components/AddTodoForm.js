import { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todo';
import { addMessage, addError } from '../actions/messages';

class AddTodoForm extends Component {
    constructor() {
        super();
    
        this.elements = null;
        this.onSubmitTodo = this.onSubmitTodo.bind(this);
    }
    
    onSubmitTodo(event) {
        event.preventDefault();

        const text = this.elements["todo"].value;
        if (text === "") {
        this.props.dispatch(addError("TODOを入力してください。"));
        return;
        }
        
        this.props.dispatch(addTodo(text));
        this.elements["todo"].value = "";
        this.props.dispatch(addMessage("TODOを追加しました。"));
    }

    render() {
        return (
            <form onSubmit={this.onSubmitTodo} ref={elem => this.elements = elem}>
            <input type="text" name="todo" placeholder="TODOを入力" /><br />
            <input type="submit" value="追加" />
          </form>
        );
    }
}

export default connect()(AddTodoForm);
