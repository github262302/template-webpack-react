import App from "./App";

import dva, { connect } from "dva";

import { initModel } from "./model/init";

// 创建应用
const app = dva();

// 模型
app.model(initModel);

// 注册视图
app.router(() => <App />);

// 启动应用
app.start("#app");
