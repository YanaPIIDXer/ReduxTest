import todo from './todo';
import messages from './messages';

const reducer = (state = {}, action) => {
    return {
        todo: todo(state.todoes, action),
        messages: messages(state.messages, action)
    }
}

export default reducer;
