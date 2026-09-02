import { createKeylineIcon } from './createKeylineIcon';

export { createKeylineIcon };
export type { KeylineIconProps } from './createKeylineIcon';

/**
 * Vendored Keyline glyphs (stroke variant, 24 grid / 2px keyline, MIT).
 * Add more by dropping the SVG `d` in here — see `createKeylineIcon`.
 */

export const BellIcon = createKeylineIcon(
  'bell',
  'M12 3C14.7614 3 17 5.23858 17 8C17 13 19 14 19 15C19 15.5523 18.5523 16 18 16H6C5.44772 16 5 15.5523 5 15C5 14 7 13 7 8C7 5.23858 9.23858 3 12 3ZM10.2679 20C10.6252 20.6188 11.2855 21 12 21C12.7145 21 13.3748 20.6188 13.7321 20',
);

export const HeartIcon = createKeylineIcon(
  'heart',
  'M12 21C7.4376 17.1033 2 13.75 2 8.75C2 5.5743 4.6862 3 8 3C9.5 3 10.8426 3.5459 12 4.5C13.1574 3.5459 14.5 3 16 3C19.3138 3 22 5.5743 22 8.75C22 13.75 16.5624 17.1033 12 21Z',
);

export const SearchIcon = createKeylineIcon(
  'search',
  'M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15 15L21 21',
);

export const ChevronRightIcon = createKeylineIcon(
  'chevron-right',
  'M9 6L15 12L9 18',
);
