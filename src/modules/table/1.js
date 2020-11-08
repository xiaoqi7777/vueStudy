let abc=[{value: 111, name: "我是1"}, {value: 222, name: "我是2"}];
// {111: "我是1",222: "我是2"}
function fn(i){
  if (!Array.isArray(i))return
  return i.reduce((a,b)=>{
    a[b.value] = b.name
    return a
  },{})
}

let rs = fn(abc)
console.log(rs)