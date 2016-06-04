/**
 * @file Configuration for Langviews application
 * @author MusikAnimal
 * @copyright 2016 MusikAnimal
 */

/**
 * Configuration for Langviews application.
 * This includes selectors, defaults, and other constants specific to Langviews
 * @type {Object}
 */
const config = {
  agentSelector: '#agent_select',
  articleInput: '#article_input',
  badges: {
    'Q17437796': {
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Cscr-featured.svg',
      name: 'Featured article'
    },
    'Q17437798': {
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Symbol_support_vote.svg',
      name: 'Good article'
    },
    'Q17559452': {
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Art%C3%ADculo_bueno-blue.svg',
      name: 'Recommended article'
    },
    'Q17506997': {
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Cscr-featured.svg',
      name: 'Featured list'
    },
    'Q17580674': {
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Cscr-featured.svg',
      name: 'Featured portal'
    },
    'Q20748092': {
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Featured_article_star_-_check.svg',
      name: 'Proofread'
    },
    'Q20748093': {
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Symbol_support_vote.svg',
      name: 'Validated'
    }
  },
  dateLimit: 90, // num days
  dateRangeSelector: '#range_input',
  defaults: {
    dateRange: 'latest-20',
    project: 'en.wikipedia.org',
    params: {
      sort: 'views',
      direction: 1,
      langData: [],
      totals: {
        titles: [],
        badges: {},
        views: 0
      }
    }
  },
  platformSelector: '#platform_select',
  projectInput: '#project_input',
  formStates: ['initial', 'processing', 'complete', 'invalid'],
  timestampFormat: 'YYYYMMDD00'
};
module.exports = config;
