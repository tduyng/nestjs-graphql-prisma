import { environment } from '@common/environment';
import { join } from 'path';

export const i18nModuleFactory = async () => {
  console.log(process.cwd());
  console.log(__dirname);
  console.log(join(__dirname, '../i18n/'));
  console.log(join(__dirname, '/i18n/'));
  return {
    fallbackLanguage: 'en',
    parserOptions: {
      path: join(process.cwd(), '/src/common/i18n/'),
      watch: environment().isDevelopment,
    },
  };
};

/**
 * Example using I18n
 */
// https://github.com/ToonvanStrijp/nestjs-i18n

// import { I18nService } from 'nestjs-i18n';

// @Controller()
// export class SampleController {
//   constructor(private readonly i18n: I18nService) {}

//   @Get()
//   async sample(@I18nLang() lang: string) {
//     await this.i18n.translate('HELLO_MESSAGE', {
//       lang: lang,
//       args: { id: 1, username: 'Toon' },
//     });
//     await this.i18n.translate('SETUP.WELCOME', {
//       lang: 'en',
//       args: { id: 1, username: 'Toon' },
//     });
//     await this.i18n.translate('ARRAY.0', { lang: 'en' });
//   }
// }
