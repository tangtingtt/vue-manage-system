import vue from '@vitejs/plugin-vue'
import { defineConfig,loadEnv  } from 'vite'
import {resolve} from "path";

export default ({mode})=>{
    return defineConfig({
        build:{
            rollupOptions:{
                // input:{
                //     index:resolve(__dirname,"index.html"),
                //     project:resolve(__dirname,"project.html")
                // },
                //output:{
                // chunkFileNames:'static/js/[name]-[hash].js',
                    //entryFileNames:"static/js/[name]-[hash].js",
                    //assetFileNames:"static/[ext]/name-[hash].[ext]"
            }
        },
        server:{
            host:'localhost',
            open: true, //是否自动在浏览器打开
            hmr: true, // 是否开启热更新
        },
        plugins: [
            vue(),
        ],
        optimizeDeps: {
            include: ['schart.js']
        }
    })
} 
// export default {
//     base: './',
//     plugins: [vue()],
//     server:{
//         host:'127.0.0.1',
//         open: true, //是否自动在浏览器打开
//         hmr: true, // 是否开启热更新
//     },
//     optimizeDeps: {
//         include: ['schart.js']
//     }
// }