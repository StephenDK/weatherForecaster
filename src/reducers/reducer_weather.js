// reducers are just functions
// first argument is state which we default to null
// second argument is action
export default function(state = null, action) {
    // Uncomment to see the payload from the action creator
    console.log('Action received', action);
    return state;
}
// add this reducer to the combine reducers call in index.js