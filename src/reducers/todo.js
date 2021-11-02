const initialState = {
    todoes: []
}

export default (state = initialState, action) => {
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
    }
    return state;
};
