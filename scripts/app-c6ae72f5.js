"use strict";var zuehlkepage;!function(e){function t(){return{scope:{},controller:["$scope","$rootScope",function(e,t){new i(e,t)}],templateUrl:"components/viewSwitch/viewSwitch.html"}}e.viewSwitchFactory=t;var i=function(){function e(e,t){var i=this;this.$scope=e,this.$rootScope=t,e.dataview=!1,e.changeIcon=function(){return i.changeIcon()}}return e.prototype.changeIcon=function(){this.$scope.dataview=!this.$scope.dataview,this.$rootScope.$broadcast("SWITCH_VIEW_EVENT",this.$scope.dataview)},e}()}(zuehlkepage||(zuehlkepage={}));var zuehlkepage;!function(e){var t=function(){function e(e){e.date=new Date}return e}();e.NavbarCtrl=t}(zuehlkepage||(zuehlkepage={}));var zuehlkepage;!function(e){function t(){return{scope:{groups:"=",allSelected:"="},controller:["$scope",function(e){new i(e)}],templateUrl:"components/jsonItemView/jsonItemView.html"}}e.jsonItemViewFactory=t,t.$inject=["$scope"];var i=function(){function e(e){var t=this;this.$scope=e,e.showList=!1,e.flatList=[],e.$on("SWITCH_VIEW_EVENT",function(t,i){e.showList=i}),angular.forEach(e.groups,function(t){angular.forEach(t.items,function(i){e.flatList.push({groupname:t.name,item:i})})}),this.$scope.isGroupSelected=function(e){return t.isGroupSelected(e)}}return e.prototype.isGroupSelected=function(e){if(!e)return!0;var t=!1;return angular.forEach(this.$scope.groups,function(i){i.name===e&&i.selected&&(t=!0)}),t},e}()}(zuehlkepage||(zuehlkepage={}));var zuehlkepage;!function(e){function t(){return{scope:{groups:"=",allSelected:"="},link:function(e){new i(e)},templateUrl:"components/groupFilter/groupFilter.html"}}e.groupFilterFactory=t;var i=function(){function e(e){this.$scope=e,e.allSelected=!0,e.toggleAll=function(){e.allSelected=!e.allSelected,angular.forEach(e.groups,function(e){e.selected=!1})},e.toggleItem=function(t){t.selected=!t.selected,e.allSelected=!1}}return e}()}(zuehlkepage||(zuehlkepage={}));var zuehlkepage;!function(e){var t=function(){function e(e,t){e.allSelected=!0,t.getJsonFileContent("./files/contributions.json").then(function(t){e.groups=t})}return e.$inject=["$scope","DataService"],e}();e.ContributionCtrl=t}(zuehlkepage||(zuehlkepage={}));var zuehlkepage;!function(e){var t=function(){function e(e,t){this.$scope=e,e.allSelected=!0,t.getJsonFileContent("./files/people.json").then(function(t){e.groups=t})}return e.$inject=["$scope","DataService"],e}();e.PeopleCtrl=t}(zuehlkepage||(zuehlkepage={}));var zuehlkepage;!function(e){var t=function(){function e(e){this.$scope=e,e.showSidebar=function(){var e=document.getElementsByTagName("body")[0].className;-1!==e.indexOf("sl_offcanvas-open-right")?document.getElementsByTagName("body")[0].className="":document.getElementsByTagName("body")[0].className+="sl_offcanvas-open-right"}}return e.$inject=["$scope"],e}();e.MainCtrl=t}(zuehlkepage||(zuehlkepage={}));var zuehlkepage;!function(e){var t=function(){function e(e,t,i,n){this.title=e,this.url=t,this.description=i,this.logo=n}return e}();e.GroupItem=t;var i=function(){function e(e,t,i){this.name=e,this.items=t,this.selected=i,this.selected=!1}return e}();e.Group=i;var n=function(){function e(e,t){this.$http=e,this.$q=t}return e.prototype.getJsonFileContent=function(e){var t=this.$q.defer(),n=new Array;return this.$http.get(e).success(function(e){angular.forEach(e.groups,function(e){n.push(new i(e.name,e.items)),t.resolve(n)})}).error(function(e){console.log("Failed loading json file ",e),t.reject("Failed loading json file ")}),t.promise},e}();e.DataService=n}(zuehlkepage||(zuehlkepage={}));var zuehlkepage;!function(e){var t=function(){function e(e,t){e.allSelected=!0,t.getJsonFileContent("./files/contributions.json").then(function(t){e.groups=t})}return e.$inject=["$scope","DataService"],e}();e.ContributionCtrl=t}(zuehlkepage||(zuehlkepage={}));var zuehlkepage;!function(e){angular.module("zuehlkepage",["ngTouch","ui.router","ui.bootstrap"]).controller("ContributionCtrl",["$scope","DataService",e.ContributionCtrl]).controller("MainCtrl",["$scope",e.MainCtrl]).controller("NavbarCtrl",["$scope",e.NavbarCtrl]).service("DataService",["$http","$q",e.DataService]).controller("PeopleCtrl",["$scope","DataService",e.PeopleCtrl]).directive("viewSwitch",[e.viewSwitchFactory]).directive("jsonItemView",[e.jsonItemViewFactory]).directive("groupFilter",[e.groupFilterFactory]).config(["$stateProvider","$urlRouterProvider",function(e,t){e.state("main",{url:"/main",templateUrl:"app/main/main.html",controller:"MainCtrl"}).state("main.contributions",{url:"/contributions",views:{pagecontent:{templateUrl:"app/contribution/contribution.html",controller:"ContributionCtrl"}}}).state("main.people",{url:"/people",views:{pagecontent:{templateUrl:"app/people/people.html",controller:"PeopleCtrl"}}}),t.otherwise("/main/contributions")}]).run(["$rootScope",function(e){var t=580,i=document.getElementById("scroll-anchor"),n=900;e.$on("$stateChangeSuccess",function(e,l,a,o){""!==o.name&&"sl_offcanvas-open-right"!=document.getElementsByTagName("body")[0].className&&(i.classList.add("in-transition"),i.style.transform="translate(0, -"+t+"px)",window.setTimeout(function(){i.classList.remove("in-transition"),i.style.cssText="",window.scrollTo(0,t)},n))})}])}(zuehlkepage||(zuehlkepage={})),angular.module("zuehlkepage").run(["$templateCache",function(e){e.put("app/contribution/contribution.html",'<div class="github-content mobile-padding row zue-teaser-medium-boxes zue-boxes-container"><div class="column"><group-filter groups="groups" all-selected="allSelected"></group-filter><p></p><h2 class="headersize-2 no-margin">Contributions</h2><p></p><json-item-view groups="groups" ng-if="groups" all-selected="allSelected"></json-item-view></div></div>'),e.put("app/main/main.html",'<div class="container id=" outer""=""><header id="site-header" role="banner"><div class="grid-contain"><a href="http://www.zuehlke.com/" class="zue-logo-head" target="_blank"></a><div id="mob-nav-toggler" data-offcanvas-trigger-class="sl_offcanvas-open-right" ng-click="showSidebar()"><span></span> <span></span> <span></span></div></div><nav class="zue-meta-nav" role="navigation"><ul><li><a href="http://www.zuehlke.com/" target="_blank">Zühlke Website</a></li><li><a href="http://www.zuehlke.com/jobs/" target="_blank">Jobs</a></li><li><a href="http://blog.zuehlke.com/en/" target="_blank">Blog</a></li></ul></nav><div id="top-bar" ng-include="\'components/navbar/navbar.html\'"></div></header><style>\r\n            .zue-branding-image {\r\n				background-image: url(./assets/images/wide/header_4_code.jpg);\r\n            }\r\n        </style><div class="zue-brick zue-branding zue-branding-image"><div class="zue-branding-inner"><h2 class="headersize-1 no-margin">Producing cool, innovative solutions and solving tough technical problems is what Zühlke lives for and has been successful at over several decades. Knowledge sharing is something we cultivate and we strongly believe in the power of the Open Source Software communities.</h2></div></div><div id="pagecontent" ui-view="pagecontent"></div><div class="zue-brick zue-col-area bg-gray-light zue-oss-header"><div class="row"><div><h5 class="font-opensans"></h5><div class="columns"><p class="headersize-6"><span>Zühlke is a</span> <strong>service provider for innovation projects</strong>. By combining both <strong>business and technology expertise</strong>, we create solutions that satisfy our customers. We develop <strong>financially successful products, services and business models</strong> for today’s digital world – from coming up with the initial idea through to the implementation and operation.</p><p>&nbsp;</p></div></div></div></div><footer><div ng-include="\'components/footer/footer.html\'" class="row"></div></footer><a id="sl_offcanvas-overlay"></a></div><div id="offcanvas-container"><nav id="side-nav" role="navigation"><ul><br><br><li class="child sibling"><a ui-sref="main.contributions" href="#/main/contributions">Contributions</a></li><li class="child sibling"><a ui-sref="main.people" href="#/main/people">People</a></li></ul></nav><nav id="side-meta-nav" role="navigation"><ul><li><a href="http://www.zuehlke.com/" target="_blank">Zühlke Website</a></li><li><a href="http://www.zuehlke.com/jobs/" target="_blank">Jobs</a></li><li><a href="http://blog.zuehlke.com/en/" target="_blank">Blog</a></li></ul></nav></div>'),e.put("app/people/people.html",'<div class="github-content mobile-padding row zue-teaser-medium-boxes zue-boxes-container"><div class="column"><group-filter groups="groups" all-selected="allSelected"></group-filter><p></p><h2 class="headersize-2 no-margin">People</h2><p></p><json-item-view groups="groups" ng-if="groups" all-selected="allSelected"></json-item-view></div></div>'),e.put("components/footer/footer.html",'<div class="small-12 medium-8 columns"><div class="row"><div class="small-12 medium-2 columns"><a href="http://zuehlke.com/" class="zue-logo-foot-wrap"><img class="zue-logo-foot" src="./assets/images/logo-zuehlke-small.png"></a></div><div class="small-12 medium-4 columns"><ul class="zue-footer-list"><li><a href="http://www.zuehlke.com/ch/en/markettrends/" target="_blank">Markettrends</a></li><li><a href="http://www.zuehlke.com/ch/en/success-stories/" target="_blank">Success Stories</a></li><li><a href="http://www.zuehlke.com/ch/en/industries/" target="_blank">Industries</a></li><li><a href="http://www.zuehlke.com/ch/en/about-us/" target="_blank">About us</a></li><li><a href="http://www.zuehlke.com/ch/en/about-us/contact/" target="_blank">Contact</a></li><li><a href="http://www.zuehlke.com/ch/en/legal/" target="_blank">Legal</a></li><li><a href="http://www.zuehlke.com/ch/en/terms-use/" target="_blank">Terms of Use</a></li><li><a href="http://www.zuehlke.com/ch/en/privacy-policy/" target="_blank">Privacy Policy</a></li></ul></div><div class="small-12 medium-6 columns"><ul class="zue-footer-list">Open Source<li><a href="https://github.com/Zuehlke" target="_blank">Zühlke Github</a></li><li><a href="http://blog.zuehlke.com/all/" target="_blank">Zühlke Github.io</a></li></ul></div></div></div><div class="small-12 medium-4 columns"><h6>Stay in touch</h6><ul class="zue-plain-list zue-social-list"><li><a href="http://blog.zuehlke.com/" title="Blog" target="_blank"><i class="icon-Blog"></i></a></li><li><a href="https://www.facebook.com/zuehlke.group" title="Facebook" target="_blank"><i class="icon-Facebook"></i></a></li><li><a href="https://twitter.com/zuehlke_group" title="Twitter" target="_blank"><i class="icon-Twitter"></i></a></li><li><a href="https://www.xing.com/" title="Xing" target="_blank"><i class="icon-Xing"></i></a></li><li><a href="https://www.linkedin.com/company/z-hlke-group/" title="LinkedIn" target="_blank"><i class="icon-Linkedin"></i></a></li><li><a href="http://www.kununu.com/de/all/de/it/zuehlke-engineering/" title="Kununu" target="_blank"><i class="icon-Kununu"></i></a></li><li><a href="http://www.slideshare.net/Zuehlke" title="Slideshare"><i class="icon-Slideshare" target="_blank"></i></a></li><li><a href="https://www.youtube.com/user/zuehlkeengineering" title="Youtube"><i class="icon-Youtube" target="_blank"></i></a></li></ul></div>'),e.put("components/groupFilter/groupFilter.html",'<div class="group-filter"><div class="filter-area"><div ng-repeat="item in groups"><div ng-class="{\'selected\' : item.selected}" class="smaller filter-item" ng-click="toggleItem(item)">{{item.name}}</div></div></div><div class="switch-area"><span class="smaller filter-item all-item" ng-class="{\'selected\' : allSelected}" ng-click="toggleAll()">ALL</span><view-switch></view-switch></div></div>'),e.put("components/jsonItemView/jsonItemView.html",'<div><div ng-hide="showList"><div><ul class="medium-block-grid-2 large-block-grid-3"><li ng-repeat="item in flatList" class="zue-box-outer" ng-if="isGroupSelected(item.groupname) || allSelected"><div><a class="track track-cta track-tile" ng-href="{{item.item.url}}" target="_blank"><div class="zue-box-inner"><div class="zue-box-content box-padding-medium"><span class="font-opensans color-primary small">{{item.groupname}}</span> <img class="right small-icon" ng-src="{{item.item.logoUrl ? item.item.logoUrl : \'assets/images/\' + item.item.logo}}" alt="{{item.item.title}}" ng-if="item.item.logo || item.item.logoUrl"><h4 class="font-opensans color-white">{{item.item.title}}</h4><p class="font-opensans" ng-if="item.item.name">{{item.item.name}}</p><p class="teaser-text tile-content tile-content-medium color-white">{{item.item.description}}</p></div></div></a></div></li></ul></div></div><div ng-show="showList"><div ng-repeat="group in groups"><div ng-if="group.selected || allSelected" style="margin-bottom: 25px"><h3 class="headersize-3 color-primary" style="margin: 25px 0px 15px">{{group.name}}</h3><div ng-repeat="groupItem in group.items" ng-class-even="\'odd-class\'" ng-class-odd="\'even-class\'" class="list-item" style="padding: 25px"><a class="track track-cta track-tile" ng-href="{{groupItem.url}}" target="_blank"><div class="tile-content"><img class="right small-icon" ng-src="{{groupItem.logoUrl ? groupItem.logoUrl : \'assets/images/\' + groupItem.logo}}" alt="{{groupItem.title}}" ng-if="groupItem.logo || groupItem.logoUrl"><h4 class="font-opensans">{{groupItem.title}}</h4><p class="font-opensans color-white" ng-if="item.item.name">{{item.item.name}}</p><p class="teaser-text text-medium-up color-white">{{groupItem.description}}</p></div></a></div></div></div></div></div>'),e.put("components/navbar/navbar.html",'<div id="top-bar-inner" ng-controller="NavbarCtrl"><nav id="zue-main-nav" role="navigation"><ul><li class="child sibling"><a ui-sref="main.contributions">Contributions</a></li><li class="child sibling"><a ui-sref="main.people">People</a></li></ul></nav></div>'),e.put("components/viewSwitch/viewSwitch.html",'<div ng-switch="dataview" ng-click="changeIcon()"><img ng-switch-when="false" src="assets/images/components/tile.png"> <img ng-switch-default="true" src="assets/images/components/list.png"></div>')}]);