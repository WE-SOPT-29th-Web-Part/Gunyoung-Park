import { JSONServerApiService } from "./jsonServer";
import { MockApiService } from "./mock";
import { ApiService } from "./types";

export function getAPI(): ApiService {
  if (process.env.NODE_ENV === "development") {
    console.log("Using REACT_APP_API_MODE=" + process.env.REACT_APP_API_MODE);
  }
  if (process.env.REACT_APP_API_MODE === "JSON_SERVER") {
    return new JSONServerApiService();
  } else {
    return new MockApiService();
  }
}
