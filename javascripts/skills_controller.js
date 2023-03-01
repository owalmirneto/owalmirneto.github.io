$.get('/api/skills.json', (response) => {
  new Vue({ el: '#skills', data: { skills: response.skills } });
}).done(() => {
  $('.image-skills img').tooltip()
});
