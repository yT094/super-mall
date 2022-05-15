/*
 * @Author: ycs 1748780248@qq.com
 * @Date: 2022-04-30 18:58:33
 * @LastEditors: ycs 1748780248@qq.com
 * @LastEditTime: 2022-05-15 08:31:44
 * @FilePath: \super-mall\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("../views/home/Home");
const Category = () => import("../views/category/Category");
const Profile = () => import("../views/profile/Profile");
const Cart = () => import("../views/cart/Cart");
const Detail = () => import("../views/detail/Detail");

// 1.安装插件
Vue.use(VueRouter);

// 2.创建路由对象
const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/category",
    component: Category,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/detail/:iid",
    component: Detail,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

// 3.导出router
export default router;
