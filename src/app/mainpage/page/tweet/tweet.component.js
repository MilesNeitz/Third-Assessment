import templateUrl from './tweet.component.html'

/* @ngInject */
class tweetController {
  constructor ($log, $state, $profileService, $authenticateService, $followService, $homeService, $scope, $stateService, $searchService, $tweetService) {
    this.$profileService = $profileService
    this.$followService = $followService
    this.$authenticateService = $authenticateService
    this.$homeService = $homeService
    this.$tweetService = $tweetService
    this.$state = $state
    $scope.$profileService = $profileService
    $scope.goToProfile = this.goToProfile
    $scope.search = this.search
    this.$stateService = $stateService
    this.$searchService = $searchService
    $log.debug('TweetController instantiated')
    this.$log = $log
  }

  getFeed () {
    return this.$homeService.feed
  }

  getuser () {
    return this.$profileService.username
  }

  gettweets () {
    return this.$profileService.arrtweets
  }

  followuser (username) {
    this.$profileService.followProfile(username)
  }
  unfollowuser (username) {
    this.$profileService.unfollowProfile(username)
  }

  checkfollower () {
    let shit = this.$authenticateService.username
    if (this.$followService.arrfollower.length > 0 && this.$followService.arrfollower.filter(function (follower) { return follower.username === shit }).length === 1) {
      return this.$followService.arrfollower.filter(function (follower) { return follower.username === shit })[0].username === shit
    } else {
      return false
    }
    // this.$log.debug(this.$followService.arrfollower.includes(this.$profileService.getSingleUser(this.$authenticateService.username)))
  }

  goToProfile = (name) => {
    this.$stateService.state['profile']()
    this.$profileService.refreshProfile(name)
  }

  search = (searchText) => {
    this.$searchService.inputText = searchText
    this.$searchService.search()
    this.$stateService.state['search']()
  }
}

export const tweet = {
  templateUrl,
  controller: tweetController,
  controllerAs: '$tweet'
}
