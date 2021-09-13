$.get('/api/courses.json', function (response) {
  console.log(response);
  new Vue({ el: '#education', data: { education: response } });
});
