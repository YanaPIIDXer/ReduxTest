export const addTodo = (text) => {
    return {
        type: "ADD_TODO",
        text
    };
}

export const setDone = (index, done) => {
    return {
        type: "SET_DONE",
        index,
        done
    }
}
