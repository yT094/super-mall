/*
 * @Author: ycs 1748780248@qq.com
 * @Date: 2022-05-01 10:25:43
 * @LastEditors: ycs 1748780248@qq.com
 * @LastEditTime: 2022-06-12 15:24:55
 * @FilePath: \super-mall\src\network\home.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { request  } from "./request"

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}