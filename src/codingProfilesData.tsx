// In src/codingProfilesData.ts

import type { JSX } from 'react';
import { SiLeetcode, SiCodechef, SiGeeksforgeeks, SiCodeforces } from 'react-icons/si';

// Define the type for a profile object for TypeScript
export interface CodingProfile {
  name: string;
  url: string;
  image: string;
  color: string; // For a cool hover effect!
}

export const profiles: CodingProfile[] = [
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/your-username/',
    image: '/src/assets/leetcode-logo.svg',
    color: '#FFA116'
  },
  {
    name: 'CodeChef',
    url: 'https://www.codechef.com/users/your-username',
    image: '/src/assets/leetcode-logo.svg',
    color: '#684E39'
  },
  {
    name: 'GeeksforGeeks',
    url: 'https://auth.geeksforgeeks.org/user/your-username',
    image: '/src/assets/GfG-logo.png',
    color: '#2F8D46'
  },
  {
    name: 'Codeforces',
    url: 'https://codeforces.com/profile/your-username',
    image: '/src/assets/CodeForces-logo.svg',
    color: '#1F8ACB'
  },

];