import Vue from 'vue';
// 全局注册 指令
Vue.directive('splitX',{
  bind(el,bindings,vnode){
    // console.log('el,bindings,vnode',el,bindings,vnode)
    //el 当前dom bindings申明指令的参数 vnode.context上下文
    let ctx = vnode.context;
    el.addEventListener('input',(e)=>{
      let val = e.target.value.slice(0,3);//输入框中的内容 
      ctx[bindings.expression] = val //将输入的值复制给当前的msg
      el.value = val
    })
    el.value = ctx[bindings.expression].slice(0,3)
  }
})
