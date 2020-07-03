import fabricImg from '../image/fabric-1.png';
import adoptImg from '../image/adopt-1.png';
import plantImg from '../image/plant-1.png';
import heatherImg from '../image/heather.png';
import personalWebImg from '../image/personalwebsite.png';

export const projectData = [
  {
    id: 3,
    title: "Heather Dick",
    subtitle: "A full-stack forum inspired by Hacker News",
    skills: ["React", "Gatsby", "Strapi"],
    img: heatherImg,
    recent: true,
    github: "https://github.com/yjcyun/heather_dick_portfolio",
    live: "https://heatherdick.netlify.app/"
  },
  {
    id: 4,
    title: "Personal Website",
    subtitle: "A minimal website with backend supported by Strapi",
    skills: ["React", "Gatsby", "Strapi", "Styled-Components"],
    img: personalWebImg,
    recent: false,
    github: "https://github.com/yjcyun/gatsby_alex_leung",
    live: "https://alexleung.ca"
  },
  {
    id: 0,
    title: "thread & needle",
    subtitle: "An online fabric store with a functional shopping cart and Paypal.",
    skills: ["React", "Context API", "Styled-Components"],
    img: fabricImg,
    recent: true,
    github: "https://github.com/yjcyun/react_fabric_store",
    live: "https://threadandneedle.netlify.app/"

  },
  {
    id: 1,
    title: "adopt, don't shop",
    subtitle: "A dog adoption site with a list of adoptable dogs and information on each dog.",
    skills: ["React", "Context API", "CSS"],
    img: adoptImg,
    recent: false,
    github: "https://github.com/yjcyun/react_adopt_dog",
    live: "https://react-adopt-dog.netlify.app/"
  },
  {
    id: 2,
    title: "plantiful",
    subtitle: "A plant store with shopping cart",
    skills: ["Javascript", "CSS", "HTML"],
    img: plantImg,
    recent: true,
    github: "https://github.com/yjcyun/Plantiful_plants_store",
    live: "https://yjcyun.github.io/Plantiful_plants_store/"
  },
]