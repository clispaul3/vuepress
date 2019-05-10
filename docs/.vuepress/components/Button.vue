<template>
  <div class="btn-top">
    <button @click="scrollToTop" v-show="isTop">{{top ? '回到顶部' : '回到顶部'}}</button>
  </div>
</template>
<script>
export default {
  name: "Totop",
  data() {
    return {
      top:true,
      isTop:false
    };
  },
  methods: {
    scrollToTop() {
      this.top = !this.top
      let timer = window.setInterval(function() {
        var pos = window.pageYOffset;
        if (pos > 0) {
          window.scrollTo(0, pos - 20);
        } else {
          window.clearInterval(timer);
        }
      }, 16)
    }
  },
  mounted(){
    window.onscroll = ()=>{
      if(window.pageYOffset>0){
        this.isTop = true
      }else{
        this.isTop = false
      }
    }
  }
};
</script>
<style>
.btn-top {
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 50px;
  /* height: 30px; */
}
button {
  padding: 6px 8px;
  border-radius:3px;
  background: #e96900;
  border: 0 none;
  outline: none;
  color: #fff;
  cursor: pointer;
}
</style>


