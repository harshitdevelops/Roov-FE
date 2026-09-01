import React from 'react';
import {StyleSheet, Text, TextInput} from 'react-native';
import {resolveFontFamily} from './fonts';

type TextLikeProps = {
  style?: React.ComponentProps<typeof Text>['style'];
};

function patchTextStyle<T extends TextLikeProps>(
  props: T | null | undefined,
): T | null | undefined {
  if (!props) {
    return props;
  }

  const flattened = StyleSheet.flatten(props.style) ?? {};
  const {fontFamily, fontWeight, fontStyle, ...rest} = flattened;

  const resolvedFontFamily = resolveFontFamily(
    fontWeight,
    fontStyle,
    fontFamily,
  );

  // Rebuild style so fontWeight from StyleSheet.create cannot leak through.
  // On Android, any fontWeight with a single-weight file forces a system fallback.
  return {
    ...props,
    style: {
      ...rest,
      fontFamily: resolvedFontFamily,
      fontWeight: '400',
      fontStyle: fontStyle === 'italic' ? 'italic' : 'normal',
    },
  };
}

const textLikeComponents = new Set<unknown>([Text, TextInput]);

function patchProps(type: unknown, props: TextLikeProps | null | undefined) {
  if (!textLikeComponents.has(type)) {
    return props;
  }

  return patchTextStyle(props);
}

const jsxRuntime = require('react/jsx-runtime') as {
  jsx: (
    type: unknown,
    props: TextLikeProps | null | undefined,
    key?: React.Key,
  ) => React.ReactElement;
  jsxs: (
    type: unknown,
    props: TextLikeProps | null | undefined,
    key?: React.Key,
  ) => React.ReactElement;
};

const originalJsx = jsxRuntime.jsx;
const originalJsxs = jsxRuntime.jsxs;

jsxRuntime.jsx = (type, props, key) =>
  originalJsx(type, patchProps(type, props), key);

jsxRuntime.jsxs = (type, props, key) =>
  originalJsxs(type, patchProps(type, props), key);

const originalCreateElement = React.createElement;

React.createElement = ((
  type: React.ElementType,
  props: TextLikeProps | null | undefined,
  ...children: React.ReactNode[]
) =>
  originalCreateElement(
    type,
    patchProps(type, props),
    ...children,
  )) as typeof React.createElement;
