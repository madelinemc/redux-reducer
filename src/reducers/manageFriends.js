export function manageFriends(state, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            return {...state, friends: [
                ...state.friends, 
                action.friend
                ] 
            }
        case "REMOVE_FRIEND":
            let removedFriendIndex = state.friends.findIndex(friend => friend.id === action.id);
            return {...state, 
                friends: [
                    ...state.friends.slice(0, removedFriendIndex),
                    ...state.friends.slice(removedFriendIndex + 1)
                ]
            }
        default: 
            return state;
    }
}

let state = {
    friends: []
} 