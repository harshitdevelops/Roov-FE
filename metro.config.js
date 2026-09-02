const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */

// `@hugeicons/core-free-icons`'s ESM barrel (dist/esm/index.js) re-exports ~6k
// icons via relative specifiers that already carry a `.js` extension
// (`export { default } from './CaseUpperIcon.js'`). With Metro's package-exports
// resolver enabled (default on RN 0.87), those specifiers get run through the
// package's `"./dist/esm/*": "./dist/esm/*.js"` subpath pattern, which appends a
// second `.js` and fails with "Unable to resolve module ./CaseUpperIcon.js ...
// None of these files exists: CaseUpperIcon.js.js". It surfaces whenever a new
// icon import forces Metro to re-resolve part of that barrel.
//
// Fix: short-circuit those internal relative imports straight to disk so the
// exports remapping never runs. Scoped to the hugeicons esm folder, so no other
// package's resolution is affected.
const HUGEICONS_ESM = path.join('@hugeicons', 'core-free-icons', 'dist', 'esm');

const config = {
  resolver: {
    resolveRequest: (context, moduleName, platform) => {
      if (
        moduleName.startsWith('./') &&
        moduleName.endsWith('.js') &&
        context.originModulePath.includes(HUGEICONS_ESM)
      ) {
        return {
          type: 'sourceFile',
          filePath: path.resolve(
            path.dirname(context.originModulePath),
            moduleName,
          ),
        };
      }
      return context.resolveRequest(context, moduleName, platform);
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
