export const configPHP = {
  phpPath: 'phpQuestions',
  configPath: 'appConfig',
  extensionsAllowed: ['none', 'php', 'none', 'sql', 'html', 'xml', 'json'],
  letters: ['A', 'B', 'C', 'D'],
  max: 806,
  apiUrl: 'http://localhost/rest-api/',
  categoryOptions: [
    {value: 1, text: 'PHP Basics'},
    {value: 2, text: 'OOP'},
    {value: 3, text: 'Security'},

    {value: 4, text: 'Functions'},
    {value: 5, text: 'Web Features'},
    {value: 6, text: 'Strings & Patterns'},
    {value: 7, text: 'Arrays'},
    {value: 8, text: 'Error Handling'}
    ,
    {value: 9, text: 'Databases & SQL'},
    {value: 10, text: 'Data Format & Types'},
    {value: 11, text: 'I/O'}
  ],
  difficultyOptions: [
    {value: 1, text: 'Easy'},
    {value: 2, text: 'Medium'},
    {value: 3, text: 'Hard'}
  ],
  typeOptions: [
    {value: 1, text: 'Radio'},
    {value: 2, text: 'Checkbox'},
    {value: 3, text: 'Text'}
  ],
  languageOptions: [
    {value: 0, text: 'none'},
    {value: 1, text: 'php'},
    {value: 2, text: 'none'},
    {value: 3, text: 'sql'},
    {value: 4, text: 'html'},
    {value: 5, text: 'xml'},
    {value: 6, text: 'json'}
  ],
  correctOptions: [
    {value: true, text: 'DA'},
    {value: false, text: 'NU'}
  ],
};
