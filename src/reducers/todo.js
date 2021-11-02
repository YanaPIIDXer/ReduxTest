const initialState = {
    todoes: []
}

const todo = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":

            return Object.assign([], state, {
                todoes: [
                    ...state.todoes,
                    {
                        text: action.text,
                        done: false
                    }
                ]
            });

        default:
            // ここでreturn stateしてもいいと思うけど、
            // 個人的には戻り値を返す関数の最終行がreturn文じゃないのは気持ちが悪いので
            break;
    }
    return state;
};

export default todo;
