import { FETCH_WEATHER } from '../actions/index';

// reducers are just functions
// first argument is state which we default to null
// second argument is action
export default function(state = [], action) {
    // Uncomment to see the payload from the action creator
    // console.log('Action received', action);
    switch (action.type) {
    case FETCH_WEATHER:
        // return state.concat([action.payload.data]);
        // Or ES6 version
        return [ action.payload.data, ...state ];
    }
    return state;
}
// add this reducer to the combine reducers call in index.js