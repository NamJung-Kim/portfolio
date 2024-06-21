'use strict';

const sectionIds = ["#home", "#about", "#skills", "#work", "#testimonial", "#contact"];
const sections = sectionIds.map(id => document.querySelector(id));
const navItem = sectionIds.map(id => document.querySelector(`a[href="${id}"]`));
// console.log(navItem);

const visibleSections = sectionIds.map(() => false);

const options = {};
const observer = new IntersectionObserver(observerCallback, options);
sections.forEach(section => observer.observe(section));

function observerCallback(entries) {
  let selectLastOne; // flag
  entries.forEach((entry) => {
    const index = sectionIds.indexOf(`#${entry.target.id}`);
    visibleSections[index] = entry.isIntersecting;
    selectLastOne = 
    index === sectionIds.length - 1 &&
    entry.isIntersecting &&
    entry.intersectionRatio >= 0.99;
  });

  const navIndex = selectLastOne 
  ? sectionIds.length - 1 
  : findFirstIntersecting(visibleSections);
}

function findFirstIntersecting(intersections) {
  const index = intersections.indexOf(true);
  return index >= 0 ? index : 0;
}