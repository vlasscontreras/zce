// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  phpPath: 'phpQuestions',
  configPath: 'appConfig',
  firebase: {
    apiKey: 'AIzaSyCPo9FJxt-5zsARU-Br-9MOSVs0CJoEOsQ',
    authDomain: 'php-alma-test.firebaseapp.com',
    databaseURL: 'https://php-alma-test.firebaseio.com',
    projectId: 'php-alma-test',
    storageBucket: 'php-alma-test.appspot.com',
    messagingSenderId: '486664010402'
  },
  apiUrl: 'http://localhost/rest-api/',
  extensionsAllowed: ['sql', 'php', 'none', 'html', 'xml', 'json']
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
