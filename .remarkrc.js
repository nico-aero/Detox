exports.frail = true;

exports.settings = {
  bullet: '-',
  bulletOther: '*',
  bulletOrdered: '.',
  closeAtx: false,
  emphasis: '_',
  fence: '`',
  fences: true,
  incrementListMarker: false,
  listItemIndent: 1,
  quote: '"',
  resourceLink: false,
  rule: '-',
  ruleRepetition: 3,
  ruleSpaces: false,
  setext: false,
  strong: '*',
  unsafe: [],
};

exports.plugins = [
  // GitHub and its flavored markdown integration
  [require('remark-gfm'), {
    tablePipeAlign: true,
  }],
  require('remark-github'),
  // Links integrity.
  require('remark-validate-links'), // TODO: check how to validate footnotes
  // Spelling and style.
  [ require('remark-retext'),
    require('unified')()
      .use(require('retext-english'))
      .use(require('retext-syntax-mentions'))
      .use(require('retext-syntax-urls'))
      .use(require('retext-spell'), {
        dictionary: require('dictionary-en'),
        personal: require('fs').readFileSync('.retext-spell.dic'),
      })
      .use(require('retext-contractions'))
      .use(require('retext-diacritics'))
      .use(require('retext-indefinite-article'))
      .use(require('retext-profanities'), { sureness: 1, ignore: ['black'] })
      .use(require('retext-redundant-acronyms'))
      .use(require('retext-repeated-words'))
      .use(require('retext-sentence-spacing'))
  ],
];
