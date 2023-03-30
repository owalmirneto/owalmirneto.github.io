const SkillsController = {
  render() {
    $.get('/api/skills.json', (response) => {
      new Vue({ el: '#skills', data: { skills: response.skills } });
    }).done(() => {
      $('.image-skills img').tooltip()
    });
  }
}

export { SkillsController }
