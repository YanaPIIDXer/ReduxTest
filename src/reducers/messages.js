const initialState = {
    messages: []
}

const messages = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_MESSAGE":
        case "ADD_ERROR":

            return Object.assign([], state, {
                messages: [
                    ...state.messages,
                    {
                        text: action.text,
                        type: action.messageType
                    }
                ]
            });

        case "REMOVE_MESSAGE":
            state.messages = state.messages.splice(action.index, 1);
            return state;

        default:
            // ここでreturn stateしてもいいと思うけど、
            // 個人的には戻り値を返す関数の最終行がreturn文じゃないのは気持ちが悪いので
            break;
    }
    return state;
};

export default messages;
