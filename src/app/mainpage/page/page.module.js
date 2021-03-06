import { page } from './page.component'
import { follow } from './follow/follow.component'
import { FollowService } from './follow/follow.service'
import { configure } from './page.config'
import { feed } from './feed/feed.component'
import { tweet } from './tweet/tweet.component'
import { mentions } from './mentions/mentions.component'

export default
  angular
    .module('twitter-page', [])
    .component('page', page)
    .component('follow', follow)
    .service('$followService', FollowService)
    .component('home', feed)
    .component('profile', tweet)
    .component('mentions', mentions)
    .config(configure)
    .name
