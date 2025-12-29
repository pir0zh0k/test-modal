import {
  defineNuxtModule,
  createResolver,
  addComponent,
  addComponentsDir,
  addImports,
  addImportsDir,
  addPlugin,
} from "@nuxt/kit";

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "TestModals",
    configKey: "testModals",
  },
  defaults: {},
  setup(_options, _nuxt) {
    const { resolve } = createResolver(import.meta.url);

    addComponentsDir({
      path: resolve("./runtime/components"),
    });

    addImportsDir(resolve("./runtime/composables"));
  },
});
