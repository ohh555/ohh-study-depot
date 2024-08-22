// 使用 Mock
import Mock from 'mockjs'
import express from 'express'
const app = express();
export function dataList() {
  let data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|20': [{
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1,
      title:"@ctitle(15,25)",
      image:"@natural(0,15)",
      reads:"@natural(0,999999)",
      from:"@ctitle(3,10)",
      date:"@date('yyyy-MM-dd')"
    }]
  })
  let List = JSON.stringify(data, null, 4)
  // 输出结果
  return {
    List
  }
}