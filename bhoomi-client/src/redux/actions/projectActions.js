import {
  ALL_PROJECT_FAIL,
  ALL_PROJECT_REQUEST,
  ALL_PROJECT_SUCCESS,
  CREATE_PROJECT_FAIL,
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_SUCCESS,
  PROJECT_DETAILS_FAIL,
  PROJECT_DETAILS_REQUEST,
  PROJECT_DETAILS_SUCCESS,
} from "../constants/projectConstants";
import axios from "axios";

export const createProject = (projectData) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_PROJECT_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `/api/v1/create/new`,
      projectData,
      config
    );

    dispatch({
      type: CREATE_PROJECT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_PROJECT_FAIL,
      payload: error.response.data.error,
    });
  }
};

export const getAllProjects = () => async (dispatch) => {
  try {
    dispatch({
      type: ALL_PROJECT_REQUEST,
    });

    const { data } = await axios.get(`/api/v1/projects`);
    dispatch({
      type: ALL_PROJECT_SUCCESS,
      payload: data.allProjects,
    });
  } catch (error) {
    dispatch({
      type: ALL_PROJECT_FAIL,
      payload: error.response.data.error,
    });
  }
};

export const getSingleProject = (id) => async (dispatch) => {
  try {
    dispatch({
      type: PROJECT_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`/api/v1/project/${id}`);
    dispatch({
      type: PROJECT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROJECT_DETAILS_FAIL,
      payload: error.response.data.error,
    });
  }
};
