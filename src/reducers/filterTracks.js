
const initState = '';

export default function filterTracks( state = initState, action) {
    if(action.type === 'FIND_TRACK') {
        return action.payload;
    }
    return state;
}
