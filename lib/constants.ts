/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const SITE_URL = 'https://code-infinity.vercel.app/';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'TechClubJit';
export const BRAND_NAME = 'Code Infinity';
export const SITE_NAME_MULTILINE = ['Code', 'Infinity'];
export const SITE_NAME = 'Code Infinity';
export const META_DESCRIPTION =
  'This hackathon is built upon the experiences of each individual. Whether you’re a first timer or an experienced hacker, Our Hackathons has empowered students of all levels to take their ideas to the next step by fostering a community of learning, mentorship, and fun.';
export const SITE_DESCRIPTION =
  'An interactive online experience by the community, free for everyone.';
export const DATE = '02 July 2022';
export const SHORT_DATE = 'July 2 - 9:00am IST';
export const FULL_DATE = 'July 2nd 9am IST';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT =
  'https://www.notion.so/vercel/Code-of-Conduct-Example-7ddd8d0e9c354bb597a0faed87310a78';
export const REPO = 'https://github.com/roverflow/Code-Infinity';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  {
    name: 'Home',
    route: '/'
  },
  {
    name: 'About',
    route: '/aboutus'
  },
  {
    name: 'Schedule',
    route: '/schedule'
  },
  {
    name: 'Team',
    route: '/speakers'
  },
  {
    name: 'Register',
    route: '/stage/b'
  }
];

export type TicketGenerationState = 'default' | 'loading';
