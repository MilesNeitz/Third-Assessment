import { feed, tweet } from './page.states'

/* @ngInject */
export function configure ($stateProvider) {
  $stateProvider
    .state(feed)
    .state(tweet)
}