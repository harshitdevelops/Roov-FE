import {images} from '../../assets/images';

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
    media: {
      gif: images.yourPeople,
      // Frame the GIF freezes on once its single play-through ends.
      lastFrame: images.yourPeopleLastFrame,
      // The GIF's own loop metadata is infinite, so playback is stopped by
      // timer after one loop — this is that loop's duration.
      durationMs: 8270,
    },
  },
  {
    key: 'road',
    word: 'Road',
    description: 'Plan routes, track rides, and relive every mile.',
    media: null,
  },
  {
    key: 'chaos',
    word: 'Chaos',
    description: 'The detours and last-minute meetups that make the ride.',
    media: null,
  },
] as const;

export type WalkthroughStep = (typeof WALKTHROUGH_STEPS)[number];
