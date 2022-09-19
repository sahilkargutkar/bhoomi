import {
  CLEAR_ERRORS,
  SEND_PDF_FAIL,
  SEND_PDF_REQUEST,
  SEND_PDF_SUCCESS,
} from "../constants/fileConstants";

export const pdfFileReducer = (state = { file: {} }, action) => {
  switch (action.type) {
    case SEND_PDF_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case SEND_PDF_SUCCESS:
      return {
        loading: false,
        file: action.payload,
      };
    case SEND_PDF_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
