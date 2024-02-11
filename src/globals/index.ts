import Github from '~/icons/Github.vue';
import Linkedin from '~/icons/Linkedin.vue';

export const Links = {
  Github: 'https://github.com/Sreesanth46',
  Linkedin: 'https://www.linkedin.com/in/Sreesanth46',
  Instagram: 'https://www.instagram.com/Sreesanth.sh'
};

export const FindMeLinks = [
  {
    label: 'Github',
    link: Links.Github,
    icons: {
      outlined: Github,
      solid: ''
    }
  },
  {
    label: 'LinkedIn',
    link: Links.Linkedin,
    icons: {
      outlined: Linkedin,
      solid: ''
    }
  }
];