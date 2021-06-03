/*
 * @Author: your name
 * @Date: 2021-06-03 11:17:06
 * @LastEditTime: 2021-06-03 13:10:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \the_ground\src\util\linkmenus.js
 */
const LinkMenus = [
  {
    name: "城市一张图",
    path: "/Home/CityMap",
    children: [
      {
        name: "自由操控",
        path: "/Home/CityMap/Freedom",
      },
      {
        name: "能耗信息",
        path: "/Home/CityMap/Energy",
      },
      {
        name: "国土概况",
        path: "/Home/CityMap/general",
      },
      {
        name: "人口信息",
        path: "/Home/CityMap/population",
      },
      {
        name: "交通信息",
        path: "/Home/CityMap/traffic",
      },
    ],
  },
];
export default LinkMenus;
