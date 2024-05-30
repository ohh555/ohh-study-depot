<template>
  <div class="home">
    <input id="file" type="file" @input="fileChange">
  </div>
</template>

<script lang="ts" setup>

interface Options {
  file: File, // 类型
  quailty?: number, // 质量：0.1 - 1
  success?: (base64: string) => void
}

class fileClass {
  options: Options // 
  fileReader = new FileReader()
  constructor(options: Options) {
    this.options = options
    this.createBase64()
  }

  createBase64() {
    this.fileReader.onload = (e: any) => {
      this.canvasImg(e.target.result)
    }
    this.fileReader.readAsDataURL(this.options.file) // file对象传进去就会返回base64
  }
  canvasImg(url: string) {
    const canvas = document.createElement('canvas');
    const cxt = canvas.getContext('2d');
    const img = new Image()
    img.src = url
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      cxt?.drawImage(img,0,0,300,300, 0, 0, img.width, img.height)
      let canvasBase64 = canvas.toDataURL(this.options.file.type, this.options.quailty)
      this.options.success?.(canvasBase64)
    }
  }
}
const fileChange: any = function (e: any) {
  const fileObj = e.target.files[0]
  if (fileObj) {
    new fileClass({
      file: fileObj,
      quailty: 0.1,
      success: (baseData) => {
        console.log(baseData);
        document.body.innerHTML = `<img src=${baseData}>`
      }
    })
  }
}

</script>
