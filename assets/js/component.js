const frontSkill = document.querySelector("#front-skill__list");
const backSkill = document.querySelector("#back-skill__list");
const education = document.querySelector("#education");
const work = document.querySelector("#work");
const swiperWrapper = document.querySelector(".swiper-wrapper")
let workSkill = [
   {
      title: "HTML",
      rank: "90%",
      type: "frontEnd",
   },
   {
      title: "Css  &&  Scss",
      rank: "50%",
      type: "frontEnd",
   },
   {
      title: "JavaScript",
      rank: "50%",
      type: "frontEnd",
   },
   {
      title: "React",
      rank: "50%",
      type: "frontEnd",
   },
   {
      title: "Node JS",
      rank: "50%",
      type: "backEnd",
   },
   {
      title: "mongodb",
      rank: "30%",
      type: "backEnd",
   },
   {
      title: "SQLserver",
      rank: "30%",
      type: "backEnd",
   },
   {
      title: "Firebase",
      rank: "30%",
      type: "backEnd",
   },
];
let schoolExperiences = [
   {
      id: 1, 
      title: "high school",
      desc: "Nguyễn Đăng Đạo high shool",
      date: "2015 - 2018",
      type: "student",
   },
   {
      id: 2,
      title: "Computer Engineer",
      desc: "HaNoi University of civil Engineering",
      date: "2018 - 2023",
      type: "student",
   },
];
let workExperiences = [];
let projects = [
   {
      title: 'Pomodoro focus',
      desc:'website adaptable to all devices',
      link:'https://yushaku.github.io/pomodoro/',
      img:'https://user-images.githubusercontent.com/72312124/147834175-6034bf31-58f5-4610-accd-35a402e80177.png',
   },
   {
      title: 'Memory App',
      desc:'a small social media',
      link:'https://yushaku-memory-app.netlify.app',
      img:'https://user-images.githubusercontent.com/72312124/154078621-40f41620-214b-4f5c-aff2-b4a1190b954d.png',
   },


];
(function app() {
   renderFrontEndSkill(workSkill);
   renderBackEndSkill(workSkill);
   renderEducation()
   renderWork()
   renderProject()
})();

function renderFrontEndSkill(skills) {
   const html = skills.map((skill) => {
      if (skill.type === "frontEnd") {
         return `
         <div class="skill__data">
            <div class="skill__title">
               <h3 class="skill__name">${skill.title}</h3>
               <span class="skill__number">${skill.rank}</span>
            </div>
            <div class="skill__bar">
               <span class="skill__percentage percent${skill.rank.replaceAll("%", "")}"></span>
            </div>
         </div>
         `;
      }
   });
   frontSkill.innerHTML = html.join("");
}
function renderBackEndSkill(skills) {
   const html = skills.map((skill) => {
      if (skill.type === "backEnd") {
         return `
         <div class="skill__data">
            <div class="skill__title">
               <h3 class="skill__name">${skill.title}</h3>
               <span class="skill__number">${skill.rank}</span>
            </div>
            <div class="skill__bar">
               <span class="skill__percentage percent${skill.rank.replaceAll("%", "")}"></span>
            </div>
         </div>
         `;
      }
   });
   backSkill.innerHTML = html.join("");
}
function renderEducation() {
   const html = schoolExperiences.map((school) => {
      if (school.type === "student") {

         return `
         <div class="qualification__data">
         ${school.id % 2 == 0 ? '<div></div><div> <span class="qualification__router"></span> <span class="qualification__line"></span></div>' : ''}
            <div>
               <h3 class="qualification__title">${school.title}</h3>
               <span class="qualification__subtitle">${school.desc}</span>

               <div class="qualification__calendar">
                  <i class="far fa-calendar">${school.date}</i>
               </div>
            </div>
         ${school.id % 2 != 0 ? '<div> <span class="qualification__router"></span> <span class="qualification__line"></span> </div>' : ''} 
         </div>
         `;
      }
   });
   education.innerHTML = html.join("");
}
function renderWork() {
   if(workExperiences.length == 0){
      const html =`
         <div class="qualification__404">
         <img src="./assets/img/404.jpg" alt="">
         </div>
         `
         work.innerHTML = html;
   }
   else{
      const html = workExperiences.map((workExperience) => {
            return `
            <div class="qualification__data">
            ${workExperience.id % 2 == 0 ? '<div></div><div> <span class="qualification__router"></span> <span class="qualification__line"></span></div>' : ''}
               <div>
                  <h3 class="qualification__title">${workExperience.title}</h3>
                  <span class="qualification__subtitle">${workExperience.desc}</span>
   
                  <div class="qualification__calendar">
                     <i class="far fa-calendar">${workExperience.date}</i>
                  </div>
               </div>
            ${workExperience.id % 2 != 0 ? '<div> <span class="qualification__router"></span> <span class="qualification__line"></span> </div>' : ''} 
            </div>
            `;
      });
      work.innerHTML = html.join("");
   }
}
function renderProject(){
   const html = projects.map((project) => {
      return `
      <div class="portfolio__content grid swiper-slide">
      <img src="${project.img}" alt="" class="portfolio__img">

      <div class="portfolio__data">
         <h3 class="portfolio__title">${project.title}</h3>
         <p class="portfolio__description">${project.desc}</p>
         <a href="${project.link}" class="button button--flex button--small portfolio__button">
            Demo
         <i class="fas fa-chevron-right button__icon"></i>
         </a>
      </div>
      </div>
      `;
   });
   swiperWrapper.innerHTML = html.join("");
}
