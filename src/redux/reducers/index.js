import { combineReducers } from "redux";
import { animeDetailReducer, animeReducer, genreReducer } from "./animeReducer";

const reducers = combineReducers({
    allAnime: animeReducer,
    animeDetail: animeDetailReducer,
    allGenre: genreReducer,
});

export default reducers;