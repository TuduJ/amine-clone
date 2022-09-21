import { ActionTypes } from "../constants/action-types"

export const setAnimeList = (animeList) => {
    return {
        type: ActionTypes.SET_ANIMELIST,
        payload: animeList,
    };
};

export const removeAnimeList = () => {
    return {
        type: ActionTypes.REMOVE_ANIMELIST,
    };
};

export const setAnimeDetail = (animeDetail) => {
    return {
        type: ActionTypes.SET_ANIME_DETAIL,
        payload: animeDetail,
    };
};

export const removeAnimeDetail = () => {
    return {
        type: ActionTypes.REMOVE_ANIME_DETAIL,
    };
};

export const setGenreList = (genreList) => {
    return {
        type: ActionTypes.SET_GENRELIST,
        payload: genreList,
    };
};