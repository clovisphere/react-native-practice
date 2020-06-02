export const selectPerson = (peopleID) => {
    return {
        type: 'SELECTED_PERSON',
        selectID: peopleID
    }
}

export const noneSelected = () => {
    return {
        type: 'NONE_SELECTED',
    }
}