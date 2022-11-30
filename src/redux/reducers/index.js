import { combineReducers } from "redux";
import { animeDetailReducer, animeReducer, genreReducer, wishlistReducer } from "./animeReducer";

const reducers = combineReducers({
    allAnime: animeReducer,
    animeDetail: animeDetailReducer,
    allGenre: genreReducer,
    allWishlist: wishlistReducer,
});

export default reducers;