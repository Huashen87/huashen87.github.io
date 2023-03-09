export interface Post {
  title: string;
  tags: string[];
  link: string;
  publishAt: string;
}

const posts: Post[] = [
  {
    title: '112年 跨考沒補習 500 小時清交資工備取心得',
    tags: ['心得', '研究所'],
    link: 'https://hackmd.io/Cnq4YBLqQUmuzdwcshbeRg',
    publishAt: '2023-03-10 04:16',
  },
];

export default posts;
