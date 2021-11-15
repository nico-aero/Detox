exports.frail = true;

exports.plugins = [
  [
    require('remark-lint-no-dead-urls'),
    {
      gotOptions: { concurrency: 1 },
      skipUrlPatterns: [/^https:\/\/developer\.android\.com(?:\/.*)?/],
    }
  ]
];
