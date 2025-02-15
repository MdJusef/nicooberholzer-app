const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const { wrapWithReanimatedMetroConfig } = require("react-native-reanimated/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

const customConfig = {
  transformer: {
    // Use react-native-svg-transformer for SVG files
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  },
  resolver: {
    // Exclude SVG from assetExts
    assetExts: defaultConfig.resolver.assetExts.filter((ext) => ext !== "svg"),
    // Include SVG in sourceExts
    sourceExts: [...defaultConfig.resolver.sourceExts, "svg"],
  },
};

// Merge default Metro config with custom config
const mergedConfig = mergeConfig(defaultConfig, customConfig);

// Wrap the final configuration with Reanimated's Metro wrapper
module.exports = wrapWithReanimatedMetroConfig(mergedConfig);
