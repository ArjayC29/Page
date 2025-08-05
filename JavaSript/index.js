import {skill} from "../Data/skill.js";
import {skillCoding} from "../Data/skils-coding.js";
import { blogs } from "../Data/blog.js";     

let skillHtml  = '';
skill.forEach(skills => {
    let Html  = `<div class="card card-display-flex">
                    <img src="${skills.images}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${skills.title}</h5>
                    <p class="card-text">${skills.description}</p>
                    <p class="card-text"><small class="text-body-secondary">${skills.lastMin}</small></p>
                    </div>
                </div>`;
    skillHtml += Html;
});
document.querySelector('.js-skills').innerHTML = skillHtml;

let skillCodingHtml = '';
skillCoding.forEach(skills => {
    let Html = `<div class="col-md-2 ">
                        <img src="${skills.img}" alt="${skills.alt}" class="img-fluid">
                        <h3>${skills.title}</h3>
                    </div>`;
    skillCodingHtml += Html;
});
document.querySelector('.js-skills-coding').innerHTML = skillCodingHtml;

let blogHtml = '';
blogs.forEach(blog => {
    let Html = `<div class="card mb-3">
                    <div class="card-body">
                    <h5 class="card-title">${blog.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${blog.date}</h6>
                    <p class="card-text">
                        ${blog.description}
                    </p>
                    <a href="#" class="card-link">Read More</a>
                    </div>
                </div>`;
    blogHtml += Html;
});
document.querySelector('.blogs-js').innerHTML = blogHtml;