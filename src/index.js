import dva from "dva";
import "./index.css";
import "antd/dist/antd.css";
import model from "./model";
import { createBrowserHistory as createHistory } from "history";
const app = dva({
  history: createHistory()
});
app.router(require("./router").default);
app.model(model);
app.start("#root");
