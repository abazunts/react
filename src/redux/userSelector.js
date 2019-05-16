
export let getUserSelector = (state) => {
    return state.usersPage.users;
}

export let getPageNumberSelector = (state) => {
    return state.usersPage.pageNumber;
}

export let getStatusSelector = (state) => {
    return state.usersPage.status;
}