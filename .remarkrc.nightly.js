exports.frail = true;

exports.plugins = [
  [
    require('remark-lint-no-dead-urls'),
    {
      skipUrlPatterns: [/^https:\/\/developer\.android\.com(?:\/.*)?/]
    }
  ]
];
