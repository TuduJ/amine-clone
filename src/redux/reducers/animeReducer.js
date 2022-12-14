import { ActionTypes } from "../constants/action-types";

const initialState = {
  anime: [],
};

const initialGenreState = {
  genre: [],
}

const initialWishList = {
  wishlist: [],
}

export const animeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ANIMELIST:
      return { ...state, anime: payload };
    case ActionTypes.REMOVE_ANIMELIST:
      return {...state, anime: {}};
    default:
      return state;
  }
};

export const animeDetailReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ANIME_DETAIL:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_ANIME_DETAIL:
      return {};
    default:
      return state;
  }
};

export const genreReducer = (state = initialGenreState, {type, payload}) => {
  switch(type){
    case ActionTypes.SET_GENRELIST:
      return{...state, genre: payload};
    default: 
      return state;
  }
};

export const wishlistReducer = (state = initialWishList, {type, payload}) => {

  switch(type) {
    case ActionTypes.SET_WISHLIST:
      const wishlistCopy = state.wishlist;
      wishlistCopy.push(payload);
      return{wishlist: wishlistCopy};
    case ActionTypes.REMOVE_WISHLIST_DATA: 
      return{wishlist: payload};
    default:
      return state;
  }
}