// vite.config.ts
import { defineConfig } from "file:///C:/Users/32784/Desktop/%E6%96%B0%E5%BB%BA%E6%96%87%E4%BB%B6%E5%A4%B9/ohh-study-depot/home/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/32784/Desktop/%E6%96%B0%E5%BB%BA%E6%96%87%E4%BB%B6%E5%A4%B9/ohh-study-depot/home/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "path";
import AutoImport from "file:///C:/Users/32784/Desktop/%E6%96%B0%E5%BB%BA%E6%96%87%E4%BB%B6%E5%A4%B9/ohh-study-depot/home/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///C:/Users/32784/Desktop/%E6%96%B0%E5%BB%BA%E6%96%87%E4%BB%B6%E5%A4%B9/ohh-study-depot/home/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///C:/Users/32784/Desktop/%E6%96%B0%E5%BB%BA%E6%96%87%E4%BB%B6%E5%A4%B9/ohh-study-depot/home/node_modules/unplugin-vue-components/dist/resolvers.js";
var __vite_injected_original_dirname = "C:\\Users\\32784\\Desktop\\\u65B0\u5EFA\u6587\u4EF6\u5939\\ohh-study-depot\\home";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  //解决“vite use `--host` to expose”
  base: "./",
  server: {
    host: "0.0.0.0",
    // port: 8080,      
    open: true
  },
  resolve: {
    //别名配置，引用src路径下的东西可以通过@如：import Layout from '@/layout/index.vue'
    alias: [
      {
        find: "@",
        replacement: resolve(__vite_injected_original_dirname, "src")
      }
    ]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFwzMjc4NFxcXFxEZXNrdG9wXFxcXFx1NjVCMFx1NUVGQVx1NjU4N1x1NEVGNlx1NTkzOVxcXFxvaGgtc3R1ZHktZGVwb3RcXFxcaG9tZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcMzI3ODRcXFxcRGVza3RvcFxcXFxcdTY1QjBcdTVFRkFcdTY1ODdcdTRFRjZcdTU5MzlcXFxcb2hoLXN0dWR5LWRlcG90XFxcXGhvbWVcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzLzMyNzg0L0Rlc2t0b3AvJUU2JTk2JUIwJUU1JUJCJUJBJUU2JTk2JTg3JUU0JUJCJUI2JUU1JUE0JUI5L29oaC1zdHVkeS1kZXBvdC9ob21lL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSc7XG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJztcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldLFxuICAgIH0pLFxuICAgIENvbXBvbmVudHMoe1xuICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSxcbiAgICB9KSxcbiAgXSxcbiAgLy9cdTg5RTNcdTUxQjNcdTIwMUN2aXRlIHVzZSBgLS1ob3N0YCB0byBleHBvc2VcdTIwMURcbiAgYmFzZTogJy4vJyxcbiAgc2VydmVyOiB7XG4gICAgaG9zdDogJzAuMC4wLjAnLFxuICAgIC8vIHBvcnQ6IDgwODAsICAgICAgXG4gICAgb3BlbjogdHJ1ZVxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgLy9cdTUyMkJcdTU0MERcdTkxNERcdTdGNkVcdUZGMENcdTVGMTVcdTc1MjhzcmNcdThERUZcdTVGODRcdTRFMEJcdTc2ODRcdTRFMUNcdTg5N0ZcdTUzRUZcdTRFRTVcdTkwMUFcdThGQzdAXHU1OTgyXHVGRjFBaW1wb3J0IExheW91dCBmcm9tICdAL2xheW91dC9pbmRleC52dWUnXG4gICAgYWxpYXM6IFtcbiAgICAgIHtcbiAgICAgICAgZmluZDogJ0AnLFxuICAgICAgICByZXBsYWNlbWVudDogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKVxuICAgICAgfVxuICAgIF1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMlgsU0FBUyxvQkFBb0I7QUFDeFosT0FBTyxTQUFTO0FBQ2hCLFNBQVMsZUFBZTtBQUN4QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDJCQUEyQjtBQUxwQyxJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixXQUFXO0FBQUEsTUFDVCxXQUFXLENBQUMsb0JBQW9CLENBQUM7QUFBQSxJQUNuQyxDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVCxXQUFXLENBQUMsb0JBQW9CLENBQUM7QUFBQSxJQUNuQyxDQUFDO0FBQUEsRUFDSDtBQUFBO0FBQUEsRUFFQSxNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQSxJQUVOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUE7QUFBQSxJQUVQLE9BQU87QUFBQSxNQUNMO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhLFFBQVEsa0NBQVcsS0FBSztBQUFBLE1BQ3ZDO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
