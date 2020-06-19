<template>
  <div>
    <!-- <el-upload
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :on-success="handleImageSuccess"
      :show-file-list="false"
      :auto-upload="false"
      action="#"
    >
      <i class="el-icon-plus" />
    </el-upload> -->

    <el-upload
      class="upload-demo"
      action="#"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :on-success="handleImageSuccess"
      :show-file-list="false"
      :on-change="handleChange"
      :auto-upload="false"
    >
      <el-button slot="trigger" size="small" type="primary">选取配图</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>

    <div class="avatar">
      <!-- <span class="demonstration">配图</span> -->
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
      console.log('aaaa')
      console.log(this.value)
      return this.value
    }
  },
  methods: {
    handleRemove(file, fileList) {
      this.emitInput('')
    },
    handlePreview(file) {
    },
    emitInput(val) {
      this.$emit('input', val)
    },
    handleImageSuccess(res, file) {
      // console.log('handleImageSuccess')
      const url = URL.createObjectURL(file.raw)
      this.emitInput(url)
    },
    handleChange(file, fileList) {
      const url = URL.createObjectURL(file.raw)
      this.emitInput(url)
      // console.log('handleChange')
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

