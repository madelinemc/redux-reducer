export function managePresents(state, action){
    switch (action.type) {
        case 'INCREASE':
            return {numberOfPresents: state.numberOfPresents + 1}
        default: 
            return state;
    }
}

let state = {numberOfPresents: 0}
let action = {type: 'INCREASE'}
