const initState = [
    'Home',
    'Work'
];

export default function playlist( state = initState, action) {
    if(action.type === 'ADD_PLAYLIST') {
        return [
            ...state,
            action.payload
        ]
    } else  if (action.type === 'DELETE_PLAYLIST') {
        return state;
    }
    return state;
}
