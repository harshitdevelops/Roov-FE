// Hand-authored one-offs
export { ArrowLeftIcon } from './ArrowLeftIcon';
export { BikeIcon } from './BikeIcon';
export { CheckIcon } from './CheckIcon';

export type { IconProps } from './types';

// Icon suites
// ---------------------------------------------------------------------------
// Hugeicons — 6k+ stroke glyphs. Import data from `@hugeicons/core-free-icons`:
//   <HugeIcon icon={SomeIcon} />
export { HugeIcon, HugeiconsIcon } from './hugeicons';
export type { HugeIconProps } from './hugeicons';

// Morphicons — animated stroke morphing. Import data from `lucide`:
//   <MorphIcon icon={open ? X : Menu} />
export { MorphIcon, MorphIconRaw } from './morphicons';
export type { MorphIconProps, MorphHandle } from './morphicons';

// Keyline — vendored stroke glyphs, namespaced to avoid name clashes:
//   <Keyline.SearchIcon />
export * as Keyline from './keyline';
