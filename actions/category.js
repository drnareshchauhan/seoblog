//auth related methods in here
import fetch from "isomorphic-fetch";

//bring in API from our config
import { API } from "../config";

import { handleResponse } from "./auth";

//refer to backend/routes/category.js
export const create = async (category, token) => {
  // console.log(`token ${token}`)
  // console.log(category)
  try {
    const response = await fetch(`${API}/category`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify(category),
    });
    handleResponse(response);
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const getCategories = async () => {
  try {
    const response = await fetch(`${API}/categories`, {
      method: "GET",
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const singleCategory = async (slug) => {
  try {
    const response = await fetch(`${API}/category/${slug}`, {
      method: "GET",
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const removeCategory = async (slug, token) => {
  //console.log(`token ${token}`)
  //console.log(slug)
  try {
    const response = await fetch(`${API}/category/${slug}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    });
    handleResponse(response);
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};
