const req = fetch('http://localhost:8080/wp-json/wp/v2/posts').then(response => {
  response.json().then(posts => {
    console.log(posts,'post')
    return posts;
  });
});

var app = new Vue({
  el: '#app',
  data: {
    myRequest: req
  }
}) 

console.log(req.resolve(),'req');
