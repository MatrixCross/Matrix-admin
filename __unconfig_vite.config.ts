
let __unconfig_data;
let __unconfig_stub = function (data = {}) { __unconfig_data = data };
__unconfig_stub.default = (data = {}) => { __unconfig_data = data };
import { defineConfig } from 'vite';
import path from 'path';
import presets from './presets/presets';

const resolve = (dir) => path.resolve(__dirname, dir);

// https://vitejs.dev/config/
const __unconfig_default =  defineConfig({
    plugins: [...presets],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: resolve('./src')
            }
        ]
    }
});

if (typeof __unconfig_default === "function") __unconfig_default(...[{"command":"serve","mode":"development"}]);export default __unconfig_data;