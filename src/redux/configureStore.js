import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
export default function configureStore(initialState) {
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //ADD SUPPORT FOR REDUX DEV TOOLS

	return createStore(
		rootReducer,
		initialState,
		composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
	);
}
