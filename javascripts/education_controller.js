$.get('/api/courses.json', function (response) {
  new Vue({ el: '#education', data: { education: response } });
});
