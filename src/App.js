import { AboutController } from "./controllers/about_controller.js";
import { ExperiencesController } from "./controllers/experiences_controller.js";
import { EducationController } from "./controllers/education_controller.js";
import { SkillsController } from "./controllers/skills_controller.js";

const App = {
  start() {
    this.handlerNavigation()

    AboutController.render()
    ExperiencesController.render()
    EducationController.render()
    SkillsController.render()
  },

  handlerNavigation() {
    window.addEventListener('DOMContentLoaded', event => {
      // Activate Bootstrap scrollspy on the main nav element
      const sideNav = document.body.querySelector('#sideNav');
      if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
          target: '#sideNav',
          offset: 74,
        });
      };

      // Collapse responsive navbar when toggler is visible
      const navbarToggler = document.body.querySelector('.navbar-toggler');
      const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
      );
      responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
          if (window.getComputedStyle(navbarToggler).display !== 'none') {
            navbarToggler.click();
          }
        });
      });
    });
  }
}

export { App }
