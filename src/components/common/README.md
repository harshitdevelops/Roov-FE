# Common components

Reusable, theme-driven UI primitives. Everything reads from `src/theme`, accepts
style overrides, and takes `leftIcon` / `rightIcon` slots plus `children` where it
makes sense.

```ts
import { Button, TextInput, Card, Checkbox, Text } from '../components/common';
```

| Component    | Key props                                                                                                                                                                             |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Text`       | `variant` (`h1`…`caption`, `body`, `button`, `link`), `color`, `align`, `weight`                                                                                                      |
| `Button`     | `title` / `children`, `variant` (`primary` \| `secondary` \| `dark` \| `ghost`), `size` (`sm` \| `md` \| `lg`), `leftIcon`, `rightIcon`, `loading`, `fullWidth`, `style`, `textStyle` |
| `IconButton` | `icon`, `size`, `variant` (`solid` \| `outline` \| `ghost`), `round`                                                                                                                  |
| `TextInput`  | `label`, `error`, `helperText`, `leftIcon`, `rightIcon`, `onRightIconPress`, `disabled`, `containerStyle` / `fieldStyle` / `inputStyle`, forwards `ref` + all RN `TextInput` props    |
| `Card`       | `variant` (`elevated` \| `outlined` \| `filled`), `padding`, `onPress`, `leftIcon`, `rightIcon`, `header`, `footer`, `children`                                                       |
| `Checkbox`   | `checked`, `onChange`, `label`, `disabled`, `size`, `icon`, `boxStyle`                                                                                                                |
| `Radio`      | `selected`, `onPress`, `label`, `disabled`, `size`, `ringStyle`                                                                                                                       |
| `Switch`     | `value`, `onValueChange`, `label`, `labelPosition`                                                                                                                                    |
| `Badge`      | `label` / `children`, `variant`, `leftIcon`, `rightIcon`, `pill`                                                                                                                      |
| `Avatar`     | `source`, `name` (initials fallback), `fallback`, `size`, `square`                                                                                                                    |
| `Divider`    | `orientation`, `color`, `thickness`, `spacing`, `label`                                                                                                                               |
| `Spacer`     | `size` (theme key or px), `horizontal`, `grow`                                                                                                                                        |

### Example

```tsx
<Card variant="outlined">
  <Text variant="h4">Sign in</Text>
  <Spacer size="md" />
  <TextInput
    label="Email"
    placeholder="you@roov.app"
    keyboardType="email-address"
    leftIcon={<BikeIcon width={18} height={18} color={colors.text.muted} />}
  />
  <Spacer size="sm" />
  <Checkbox checked={remember} onChange={setRemember} label="Remember me" />
  <Spacer size="base" />
  <Button title="Continue" fullWidth onPress={onSubmit} />
</Card>
```
