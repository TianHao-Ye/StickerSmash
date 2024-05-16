const IS_DEV = process.env.APP_VARIANT === 'development'

export default {
  name: IS_DEV ? 'StickerSmash (Dev)' : 'StickerSmash',
  slug: 'StickerSmash',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    package: 'com.tianhao.StickerSmash',
  },
  web: {
    favicon: './assets/favicon.png',
  },
  extra: {
    eas: {
      projectId: '7c57e8ca-2035-430e-a32f-b6516ecadb54',
    },
  },
}
