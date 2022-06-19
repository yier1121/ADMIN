import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//路由重复点击会报错，重写push方法，捕获异常
//保存路由原始的push方法
const originalPush = Router.prototype.push
Router.prototype.push = function push(location,resolve,reject) {
  if(resolve||reject) {
    //如果外界传入了resolve或reject回调，那么就用外界传入的
    return originalPush.call(this,location,resolve,reject)
  }
  //异常捕获
  return originalPush.call(this,location).catch(err => err)

}



export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
