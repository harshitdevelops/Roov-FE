# Icons

Everything is imported from `../components/icons` and takes `size` (px, square),
`color` (defaults to `colors.text.primary`), and — for stroke glyphs —
`strokeWidth`. All three suites render through `react-native-svg`.

```ts
import { HugeIcon, MorphIcon, Keyline, CheckIcon } from '../components/icons';
```

| Suite          | Import icon from                | Render with             | Notes                                                              |
| -------------- | ------------------------------- | ----------------------- | ------------------------------------------------------------------ |
| **Hugeicons**  | `@hugeicons/core-free-icons`    | `<HugeIcon icon={} />`  | 6k+ stroke-rounded glyphs, tree-shaken. Pro packs add more styles. |
| **Morphicons** | `lucide` (data, not components) | `<MorphIcon icon={} />` | Spring-physics morph between two stroke glyphs on the 24×24 grid.  |
| **Keyline**    | `./keyline` (`Keyline.*`)       | `<Keyline.BellIcon />`  | No RN package — glyphs are vendored via `createKeylineIcon`.       |
| one-offs       | `./*Icon`                       | `<CheckIcon />`         | `ArrowLeftIcon`, `BikeIcon`, `CheckIcon`.                          |

## Hugeicons

```tsx
import { HugeIcon } from '../components/icons';
import { Notification03Icon } from '@hugeicons/core-free-icons';

<HugeIcon
  icon={Notification03Icon}
  size={20}
  color={colors.text.muted}
  strokeWidth={1.5}
/>;
```

`altIcon` + `showAlt` swap glyphs on state (e.g. a theme toggle).

## Morphicons

morphicons consumes icon **data**, so import glyphs from `lucide` (not
`lucide-react-native`, which returns components).

```tsx
import {MorphIcon} from '../components/icons';
import {Menu, X} from 'lucide';

// uncontrolled — flip the prop, it animates
<MorphIcon icon={open ? X : Menu} onPress={() => setOpen(o => !o)} />

// controlled — drive progress 0..1 from a gesture / scroll value
<MorphIcon from={Menu} to={X} progress={drag} />

// imperative — via ref
const ref = useRef<MorphHandle>(null);
ref.current?.morphTo(X);
```

## Keyline

Keyline ships React (web) components only, so glyphs live here as vendored path
data. To add one: open it on <https://keylineicons.com> (or take
`icons/stroke/<name>.svg` from the `keyline-icons/keyline-icons` repo), copy the
path `d`, and register it in `keyline/index.ts`:

```ts
export const StarIcon = createKeylineIcon('star', 'M12 2 …');
```

Currently vendored: `BellIcon`, `HeartIcon`, `SearchIcon`, `ChevronRightIcon`.
