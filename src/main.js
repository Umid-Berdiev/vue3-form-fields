import { createApp } from "vue";
import App from "./App.vue";

// bootstrap 5
// import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// lodash
import * as _ from "lodash";

const app = createApp(App);

// const requireComponent = require.context(
//   "./components",
//   false,
//   /Base[A-Z]\w+\.(vue|js)$/
// );

// requireComponent.keys().forEach((fileName) => {
//   const componentConfig = requireComponent(fileName);

//   const componentName = _.upperFirst(
//     _.camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
//   );

//   app.component(componentName, componentConfig.default || componentConfig);
// });

app.mount("#app");
