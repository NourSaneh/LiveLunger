import slide1 from '../assets/slider/slide-1.jpg';
import slide2 from '../assets/slider/slide-2.jpg';
import slide3 from '../assets/slider/slide-3.jpg';
import goodLungs from '../assets/good lungs.png';
import badLungs from '../assets/bad lungs.png';

// Sample slide data for gallery
export const slides = [
  {
    id: 1,
    image: slide1,
    title: 'Slide 1',
  },
  {
    id: 2,
    image: slide2,
    title: 'Slide 2',
  },
  {
    id: 3,
    image: slide3,
    title: 'Slide 3',
  },
];

// Lung comparison slides
export const lungSlides = [
  {
    id: 'healthy',
    label: 'HEALTHY',
    image: goodLungs,
  },
  {
    id: 'unhealthy',
    label: 'UNHEALTHY',
    image: badLungs,
  },
];
