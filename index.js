const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const ADD_NUMBER = "addNumber";
const ADD_N = "addN";

const ADD_ACTIVE_USER = "addActiveUser";

const add = () => {
	return { type: ADD_NUMBER };
};
const addN = (num = 1) => {
	return { type: ADD_N, payload: num };
};

const addActiveUsers = () => {
	return { type: ADD_ACTIVE_USER, payload: 1 };
};

const initialCounterState = {
	counter: 0,
};

const initialActiveUsersState = {
	activeUsers: 0,
};

const counterReducer = (state = initialCounterState, action) => {
	switch (action.type) {
		case ADD_NUMBER:
			return { counter: state.counter + 1 };
		case ADD_N:
			return { ...state, counter: state.counter + action.payload };
		default:
			return state;
	}
};

const activeUsersReducer = (state = initialActiveUsersState, action) => {
	switch (action.type) {
		case ADD_ACTIVE_USER:
			return {
				...state,
				activeUsers: state.activeUsers + action.payload,
			};
		default:
			return state;
	}
};

const reducers = combineReducers({ counterReducer, activeUsersReducer });

const store = createStore(reducers);
const unsub = store.subscribe(() => {
	console.log("state updated", store.getState());
});

store.dispatch(add());
store.dispatch(addN(10));
store.dispatch(addActiveUsers());
console.log(store.getState());
unsub();
