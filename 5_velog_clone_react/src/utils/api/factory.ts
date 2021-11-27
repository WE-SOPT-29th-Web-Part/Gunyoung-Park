import { MockApiService } from "./mock";
import { RealApiService } from "./real";
import { ApiService } from "./types";

export function getAPI(): ApiService {
  if (process.env.NODE_ENV === "development") {
    console.log("Using REACT_APP_API_MODE=" + process.env.REACT_APP_API_MODE);
  }
  if (process.env.REACT_APP_API_MODE === "REAL_SERVER") {
    return new RealApiService();
  } else {
    return new MockApiService();
  }
}
