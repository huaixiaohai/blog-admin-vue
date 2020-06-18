<template>
  <div>
    <el-upload
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :on-success="handleImageSuccess"
      :show-file-list="false"
      action="https://www.mocky.io/v2/5185415ba171ea3a00704eed/posts/"
    >
      <i class="el-icon-plus" />
    </el-upload>
    <div class="avatar">
      <span class="demonstration">配图</span>
      <el-image :src="imageUrl" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleImageUpload4',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    imageUrl() {
      return this.value
    }
  },
  methods: {
    handleRemove(file, fileList) {
      this.emitInput('')
    },
    handlePictureCardPreview(file) {
    },
    emitInput(val) {
      this.$emit('input', val)
    },
    handleImageSuccess(res, file) {
      // console.log(this.imageUrl)
      const url = URL.createObjectURL(file.raw)
      this.emitInput(url)
    }
  }
}
</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .image-uploader {
    width: 3%;
    float: left;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 400px;
    height: 400px;
    display: block;
  }
</style>

