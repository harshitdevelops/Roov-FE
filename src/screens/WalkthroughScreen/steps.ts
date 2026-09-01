/**
 * The one-time onboarding walkthrough — three beats that echo the splash
 * tagline: "Your people. Your road. Your chaos."
 *
 * The lead word stays fixed across steps; only `word` animates.
 */
export const WALKTHROUGH_TITLE_LEAD = 'Your';

export const WALKTHROUGH_STEPS = [
  {
    key: 'people',
    word: 'People',
    description: 'Your crew, your riders, your circle — all in one place.',
  },
  {
    key: 'road',
    word: 'Road',
    description: 'Plan routes, track rides, and relive every mile.',
  },
  {
    key: 'chaos',
    word: 'Chaos',
    description: 'The detours and last-minute meetups that make the ride.',
  },
] as const;

export type WalkthroughStep = (typeof WALKTHROUGH_STEPS)[number];
