//function initialRouteListState(){
//  let routeList;
//  routeApi.fetchList().then(json => routeList = json);
//  return routeList;
//};

//const initialRouteStopsState = {
//  routeStops: routeApi.fetchStops(),
//};

//const initialStopPredicationState = {
//  stopPredication: routeApi.fetchPredication(),
//};

//function routeListReducer(state = initialRouteListState(), action = {}) {
//  return state;
//}

//function routeStopsReducer(state = initialRouteStopsState, action = {}) {
//  return state;
//}

//function stopPredicationReducer(state = initialStopPredicationState, action = {}) {
//  return state;
//}

//export const reducer = Redux.combineReducers({
//  routeList: routeListReducer,
//  routeStops: routeStopsReducer,
//  stopPredication: stopPredicationReducer
//});





//// threadsReducer() function, in full:
//function threadsReducer(state, action) {
//  if (action.type === 'ADD_MESSAGE') {
//    const newMessage = {
//      text: action.text,
//      timestamp: Date.now(),
//      id: uuid.v4(),
//    };
//    const threadIndex = state.findIndex(
//      (t) => t.id === action.threadId
//    );
//    const oldThread = state[threadIndex];
//    const newThread = {
//      ...oldThread,
//      messages: oldThread.messages.concat(newMessage),
//    };

//    return [
//      ...state.slice(0, threadIndex),
//      newThread,
//      ...state.slice(
//        threadIndex + 1, state.length
//      ),
//    ];

//  } else if (action.type === 'DELETE_MESSAGE') {
//    const threadIndex = state.findIndex(
//      (t) => t.messages.find((m) => (
//        m.id === action.id
//      ))
//    );
//    const oldThread = state[threadIndex];
//    const messageIndex = oldThread.messages.findIndex(
//      (m) => m.id === action.id
//    );
//    const messages = [
//      ...oldThread.messages.slice(0, messageIndex),
//      ...oldThread.messages.slice(
//        messageIndex + 1, oldThread.messages.length
//      ),
//    ];
//    const newThread = {
//      ...oldThread,
//      messages: messages,
//    };

//    return [
//      ...state.slice(0, threadIndex),
//      newThread,
//      ...state.slice(
//        threadIndex + 1, state.length
//      ),
//    ];
//  } else {
//    return state;
//  }
//}

//function messagesReducer(state, action) {
//  if (action.type === 'ADD_MESSAGE') {
//    const newMessage = {
//      text: action.text,
//      timestamp: Date.now(),
//      id: uuid.v4(),
//    };
//    return state.concat(newMessage);
//  } else {
//    return state;
//  }
//}


//function findThreadIndex(threads, action) {
//  switch (action.type) {
//    case 'ADD_MESSAGE': {
//      return threads.findIndex(
//        (t) => t.id === action.threadId
//      );

//    }
//    case 'DELETE_MESSAGE': {
//      return threads.findIndex(
//        (t) => t.messages.find((m) => (
//          m.id === action.id
//        ))
//      );

//    }

//  }
//}

//function threadsReducer(state, action) {
//  switch (action.type) {
//    case 'ADD_MESSAGE':
//    case 'DELETE_MESSAGE': {
//      const threadIndex = findThreadIndex(state, action);
//      const oldThread = state[threadIndex];
//      const newThread = {
//        ...oldThread,
//        messages: messagesReducer(oldThread.messages, action),
//      };

//      return [
//        ...state.slice(0, threadIndex),
//        newThread,
//        ...state.slice(
//          threadIndex + 1, state.length
//        ),
//      ];
//    }
//    default: {
//      return state;
//    }
//  }
//}



/*


 export function reducer(state = initialState, action) {
   switch (action.type) {
     case FETCH_PEOPLE_REQUEST:
       return Object.assign({}, state, {
         isLoading: true
       });
     case FETCH_PEOPLE_SUCCESS:
       return Object.assign({}, state, {
         people: action.people,
         isLoading: false
       });
     case SAVE_PEOPLE_REQUEST:
       return Object.assign({}, state, {
         saveStatus: 'SAVING'
       });
     case SAVE_PEOPLE_FAILURE:
       return Object.assign({}, state, {
         saveStatus: 'ERROR'
       });
     case SAVE_PEOPLE_SUCCESS:
       return Object.assign({}, state, {
         people: action.people,
         person: {},
         saveStatus: 'SUCCESS'
       });
     default:
       return state;
   }
   return state;
}
*/
