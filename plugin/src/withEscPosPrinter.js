import { ConfigPlugin, createRunOncePlugin } from '@expo/config-plugins';

// Keeping the name, and version in sync with it's package.
const pkg = require('react-native-esc-pos-printer/package.json');

const withEscPosPrinter = config => config;

// A helper method that wraps `withRunOnce` and appends items to `pluginHistory`.
export default createRunOncePlugin(
  // The plugin to guard.
  withEscPosPrinter,
  // An identifier used to track if the plugin has already been run.
  pkg.name,
  // Optional version property, if omitted, defaults to UNVERSIONED.
  pkg.version
);


