export interface Work {
  img: string;
  title: string;
  link: string;
  desc: string;
}

const works: Work[] = [
  {
    title: 'Over Repair',
    img: '/images/over-repair.png',
    link: 'https://v3.globalgamejam.org/2020/games/overrepair-9',
    desc: 'Fix broken robots before your battery runs out. A game made in 48 hours for Global Game Jam 2020.',
  },
  {
    title: 'GumBoomer',
    img: '/images/gum-boomer.png',
    link: 'https://globalgamejam.org/games/2025/gumboomer-5',
    desc: 'Merge bubbles without letting them explode. A party game made in 48 hours for Global Game Jam 2025.',
  }
];

export default works;
