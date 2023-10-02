import { linkBikes, linkCars, linkContact, linkFormData, linkHome, linkServices, linkTestimonials } from "./linkData.js";

const navigationData = [
  {
    text: 'Home',
    to: linkHome,
  },
  {
    text: 'Cars',
    to: linkCars,
  },
  {
    text: 'Bikes',
    to: linkBikes,
  },
  {
    text: 'Services',
    to: linkServices,
  },
  {
    text: 'Testimonials',
    to: linkTestimonials,
  },
  {
    text: 'Contact',
    to: linkContact,
  },
  {
    text: 'Form Data',
    to: linkFormData,
  }
];

export default navigationData;
