import axios from "axios";
import {
  SEND_PDF_FAIL,
  SEND_PDF_REQUEST,
  SEND_PDF_SUCCESS,
} from "../constants/fileConstants";

export const submitFile = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: SEND_PDF_REQUEST,
    });
    const config = { headers: { "content-type": "multipart/form-data" } };

    const { data } = await axios.post(
      "/api/v1/sendAttachment",
      formData,
      config
    );

    dispatch({
      type: SEND_PDF_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: SEND_PDF_FAIL,
      payload: e.response.data.error,
    });
  }
};
