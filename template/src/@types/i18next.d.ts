import 'i18next';

import { Namespace } from 'i18n';

// Import all namespaces (for the default language, only)
import common from '../../public/locales/en/common.json';
import languages from '../../public/locales/en/languages.json';
import navigation from '../../public/locales/en/navigation.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof Namespace.Common;
    resources: {
      common: typeof common;
      navigation: typeof navigation;
      languages: typeof languages;
    };
  }
}
