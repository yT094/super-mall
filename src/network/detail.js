/*
 * @Author: ycs 1748780248@qq.com
 * @Date: 2022-05-15 09:52:31
 * @LastEditors: ycs 1748780248@qq.com
 * @LastEditTime: 2022-05-15 09:54:08
 * @FilePath: \super-mall\src\network\detail.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { request } from "./request";

export function getDetailData(iid) {
  return request({
    url: "/detail",
    params: {
      iid,
    },
  });
}
