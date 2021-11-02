import { Component } from 'react';
import { connect } from 'react-redux';
import { MESSAGE, ERROR , removeMessage } from '../actions/messages';

class Messages extends Component {
    render() {
        const { dispatch, messages } = this.props;
        return (
            <div>
                {messages.map((msg, index) => {
                    var classes = "alert ";
                    switch (msg.type) {
                        case MESSAGE:
                            classes += "alert-success";
                            break;

                        case ERROR:
                            classes += "alert-danger";
                            break;
                        
                        default: break;
                    }
                    return <div class={classes} onClick={() => dispatch(removeMessage(index))}>{msg.text}</div>
                })}
            </div>
        );
    }
}
const list = (state) => {
    return { messages: state.messages.messages };
  }
export default connect(list)(Messages);
