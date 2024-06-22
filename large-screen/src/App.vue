<template>
  <div>
    <div id="main" style="width:6rem; height: 4rem;"></div>
    <canvas ref="verify" @click="handleDraw" :width="state.width" :height="state.height"></canvas>
  </div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts';
import { reactive, ref, onMounted } from 'vue';

onMounted(() => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('main'));
  // 绘制图表
  myChart.setOption({
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  });
  window.addEventListener('resize', function () {
    myChart.resize();
  });
});

const verify = ref(null)
const state = reactive({
  pool: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
  // 声明两个变量存验证码的宽高
  width: 150,
  height: 45,
  // 验证码最终存储的位置
  imgCode: ''
})
// 初始化绘制图像验证码
onMounted(() => {
  state.imgCode = draw()

})
// 点击之后重新绘制图形验证码
const handleDraw = () => {
  state.imgCode = draw()

}
//生成随机数
const randomNum = (min:any, max:any) => {
  // parseInt(string, radix) 解析一个字符串并返回指定基数的十进制整数，radix 是 2-36 之间的整数，表示被解析字符串的基数
  return parseInt(Math.random() * (max - min) + min, 10)
}
// 随机生成颜色
const randomColor = (min:any, max:any) => {
  const r = randomNum(min, max)
  const g = randomNum(min, max)
  const b = randomNum(min, max)
  return `rgb(${r},${g},${b})`
}
// 实现验证码的绘制
const draw = () => {
  // ① 获取canvas属性
  const ctx = verify.value.getContext("2d")
  // ② 填充背景颜色
  ctx.fillStyle = randomColor(20, 256)
  ctx.fillRect(0, 0, state.width, state.height)   // ctx.fillRect(矩形起始点的x坐标，矩形起始点的y坐标,矩形的宽度，矩形的高度) fillRect()方法绘制一个填充了内容的矩形
  // fillText()  指定的坐标上绘制文本字符串，并使用当前的 fillStyle 对其进行填充
  // ③ 生成随机数，随机数旋转
  for (let i = 0; i < 4; i++) {
    const text = state.pool[randomNum(0, state.pool.length)]
    state.imgCode += text
    console.log('state.imgCode', state.imgCode)
    const fontSize = randomNum(16, 30)
    ctx.font = fontSize + "px Simhei"
    ctx.fillStyle = randomColor(0, 150) // 设置文字颜色
    ctx.textBaseline = "top"  // 述绘制文本时，当前文本基线的属性
    const deg = randomNum(-15, 15)  // 旋转的角度
    ctx.save()  // 保存当前的绘图状态
    ctx.translate((30 * i + 15), randomNum(10, 25)) // ctx.translate(x, y); x 点的水平方向、原始的 y 点垂直方向进行平移变换
    ctx.rotate((deg * Math.PI) / 180)  // Math.PI   3.14  【随机生成旋转角度】
    ctx.fillText(text, 0, 0)
    ctx.restore()  // ctx.restore() 方法后，会将绘图上下文恢复到最近一次保存的状态，也就是撤销之前的所有变换和样式设置，使得后续的绘制不受影响
    // 使用 save() 方法保存默认的状态，使用 restore() 进行恢复
  }
  // ④ 生成40个点和4条线形成干扰防止OCR
  for (let i = 0; i < 5; i++) {
    ctx.beginPath()
    ctx.strokeStyle = randomColor(30, 256)
    ctx.moveTo(randomNum(0, state.width), randomNum(0, state.height))
    ctx.lineTo(randomNum(0, state.width), randomNum(0, state.height))
    ctx.fillStyle = randomColor(0, 150)
    ctx.stroke()  // 绘制线段
  }
  for (let x = 0; x < 40; x++) {
    ctx.beginPath()
    // ctx.arc( ①圆弧中心（圆心）的 x 轴坐标 ②圆弧中心（圆心）的 y 轴坐标 ③圆弧的半径 圆弧的起始点 ④x 轴方向开始计算，单位以弧度表示  ⑤圆弧的终点，单位以弧度表示)
    ctx.arc(randomNum(0, state.width), randomNum(0, state.height), 1, 0, 2 * Math.PI)
    ctx.closePath()
    // 笔点返回到当前子路径起始点的方法。它尝试从当前点到起始点绘制一条直线。如果图形已经是封闭的或者只有一个点，那么此方法不会做任何操作
    ctx.stroke()
    ctx.fillStyle = randomColor(150, 200)
    ctx.fill()
  }
  return state.imgCode
}
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
</style>
