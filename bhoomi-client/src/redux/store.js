import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";
import {
  projectDetailsReducer,
  projectsReducer,
} from "./reducers/productReducer";

const reducer = combineReducers({
  allProjects: projectsReducer,
  singleProject: projectDetailsReducer,
});
const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevToolsDevelopmentOnly(applyMiddleware(...middleware))
);

export default store;
