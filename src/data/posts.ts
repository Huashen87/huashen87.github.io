export interface Post {
  title: string;
  tags: string[];
  publishAt: string;
}

const posts: Post[] = [
  {
    title: 'One Month, One Game',
    tags: ['遊戲開發', '心得'],
    publishAt: '2025-10-02 23:53',
  },
  {
    title: '112年 跨考沒補習 500 小時清交資工備取心得',
    tags: ['心得', '研究所'],
    publishAt: '2023-03-10 04:16',
  },
  {
    title: 'LeetCode 1. Two Sum',
    tags: ['LeetCode', 'Blind75'],
    publishAt: '2023-03-12 22:49',
  },
];

export default posts;
