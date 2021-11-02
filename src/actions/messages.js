const MESSAGE = 0
const ERROR = 1;
export { MESSAGE, ERROR };

export const addMessage = (text) => {
    return {
        type: "ADD_MESSAGE",
        text,
        messageType: MESSAGE
    }
}

export const addError = (text) => {
    return {
        type: "ADD_ERROR",
        text,
        messageType: ERROR
    }
}

export const removeMessage = (index) => {
    return {
        type: "REMOVE_MESSAGE",
        index
    }
}
