import { combineReducers } from "redux";
import { monumentReducer } from "./monument";
import { monumentsReducer } from "./monuments";
import { imageUrlReducer } from "./imageUrl";
import { describeReducer } from "./describe";

export const reducers = combineReducers({
    monument: monumentReducer,
    imageUrl: imageUrlReducer,
    describe: describeReducer,
    monuments: monumentsReducer
})