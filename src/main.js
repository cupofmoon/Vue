// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from  'vue'
import App from './App'
import { Header} from 'mint-ui'
// import 'lib/mui/css/mui.min.css'
Vue.component(Header.name,Header)
var vm = new Vue({
  el:'#app',
  render:c =>c(App),

})





