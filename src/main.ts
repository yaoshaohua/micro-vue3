import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import routes from "./router";

let router = null;
let instance:any = null;
function render(props:any = {}) {
  const { container } = props;
  const router = createRouter({
    history: createWebHistory((window as any).__POWERED_BY_QIANKUN__ ? '/micro-vue3/' : '/'),
    routes,
  });

  instance = createApp(App)
  instance.use(router).mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props:any) {
  console.log('[vue] props from main framework', props);
  render(props);
}
export async function unmount() {
  instance.unmount()
  instance._container.innerHTML = ''
  instance = null;
  router = null;
}