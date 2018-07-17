/**
 * COLORS
 */
export const COLOR_TRANSPARENT = "transparent";
export const COLOR_WHITE = "#FFFFFF";
export const COLOR_LIGHT_GRAY = "#dfe5eb";
export const COLOR_GRAY = "#9A9A9A";
export const COLOR_BLACK_TRANSPARENT = "#80000000";

/**
 * API
 */
export const GET_FLOWERS = "https://flowrspot-api.herokuapp.com/api/v1/flowers";
export const SEARCH_FLOWERS = "https://flowrspot-api.herokuapp.com/api/v1/flowers/search?query=";
export const AUTHORIZATION = {
  method: "GET",
  headers: {
    Accept: "application/json",
    Authorization:
      "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3LCJleHAiOjE1MTUyNDQzNDd9.Mgzr6aP36YhV1XoN7j-mM4NJzJwMeSwlkgAvZVZJauY"
  }
};
