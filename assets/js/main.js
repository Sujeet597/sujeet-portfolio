// ================ MENU SHOW Y HIDDEN ==================
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')



// ========== MENU SHOW ==========
// validate if constant exist
if(navToggle){
   navToggle.addEventListener('click', ()=>{
      navMenu.classList.add('show-menu')
   })
}


// =========== MENU HIDDEN ===========

if(navClose){
   navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
   })

}


// =============== REMOVE MENU MOBILE =============


const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
   const navMenu = document.getElementById('nav-menu')
   //when we click on each link, we remove the show menu close
   navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// ================= ACCORDIAN SKILLS ===================

const skillsContent = document.getElementsByClassName('skills_content');
const skillsHeader = document.querySelectorAll('.skills_header');

function toggleSkills() {
   let itemClass = this.parentNode.className; // Change ClassName to className

   for (let i = 0; i < skillsContent.length; i++) { // Add 'let' before i
      skillsContent[i].className = 'skills_content skills_close';
   }

   if (itemClass === 'skills_content skills_close') {
      this.parentNode.className = 'skills_content skills_open';
   }
}

// Convert NodeList to array and then use forEach
Array.from(skillsHeader).forEach((el) => {
   el.addEventListener('click', toggleSkills);
});
