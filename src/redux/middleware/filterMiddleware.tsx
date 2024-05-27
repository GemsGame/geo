import { Middleware, Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Query } from "../../services/Query";

const filterAction: Middleware<{}, RootState, Dispatch<UnknownAction>> =
  () => (next) => (action: any) => {
    if (action.type === "filters/add") {
      new Query().updateQueryStringParameter({
        [action.payload.name]: action.payload.value,
      });
    }

    return next(action);
  };

export default filterAction;
