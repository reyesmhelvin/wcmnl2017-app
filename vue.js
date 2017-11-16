const wpRequestPosts = [];

fetch('http://192.168.99.100:8080/wp-json/acf/v3/posts')
.then(response => response.json())
.then((data)=>{
  return data.map((item)=>{
    wpRequestPosts.push(item)
  })
});

var app = new Vue({
  el: '#app',
  data:{ 
    posts: wpRequestPosts
  }
}) 
