;
(function(){
	  var app=angular.module('news.controller',[]);
	  //只有下面导航栏的页面控制器
	  app.controller('indexCtrl',function($scope,$http,$rootScope,$window){
	  	  //下面的导航
	  	      $scope.navs=[{
	  	      	      name:'新闻',
	  	      	      url:'#/index/tab',
	  	      	      id:1,
	  	      	      src:'img/nav/icon_nav_article.png'
	  	      },{
	  	      	      name:'读报',
	  	      	      url:'#/index/paper',
	  	      	      id:2,
	  	      	      src:'img/nav/icon_nav_panel.png'	  	      	     
	  	      },{
	  	      	      name:'视频',
	  	      	      url:'#/index/video',
	  	      	      id:3,
	  	      	      src:'img/nav/icon_nav_button.png'	     
	  	      },{ 
	  	      	      name:'服务',
	  	      	      url:'#/index/service',
	  	      	      id:4,
	  	      	      src:'img/nav/present.png'	     
	  	      }];
	  	      $rootScope.id=1;
	  	      $scope.toggleNav=function(id,url){
	  	      	     $rootScope.id=id;
	  	      	     $window.location.href=url;
//	  	      	     console.log(id);
	  	      }
	 });
	  app.controller('tabCtrl',function($scope,$http,$rootScope,$window){
	  	//上面的导航
	  	      $scope.tabs=[{
	  	      	      name:'石化', 
	  	      	      id:1,
	  	      	      url:'#/index/tab/one'
	  	      	     
	  	      },{
	  	      	       name:'行业',
	  	      	       id:2,
	  	      	      url:'#/index/tab/two'
	  	      	      
	  	      },{
	  	      	       name:'图说',
	  	      	       id:3,
	  	      	      url:'#/index/tab/three'
	  	      	      
	  	      },{
	  	      	       name:'专题',
	  	      	       id:4,
	  	      	      url:'#/index/tab/four'
	  	      	      
	  	      },{
	  	      	       name:'投票',
	  	      	       id:5,
	  	      	      url:'#/index/tab/five'
	  	      	      
	  	      },{
	  	      	       name:'直播',
	  	      	       id:6,
	  	      	      url:'#/index/tab/six'
	  	      	      
	  	      },{
	  	      	       name:'活动',
	  	      	       id:7,
	  	      	      url:'#/index/tab/seven'
	  	      	      
	  	      }];
	  	      $rootScope.id=1;
	  	      $scope.toggleTab=function(id,url){
	  	      	     $rootScope.id=id;
	  	      	     
	  	      	     $window.location.href=url;
//	  	      	     console.log(id);
	  	      }
	  	      //搜索部分
	  	      $scope.searchName='';
	  	      $scope.isSearch=false;
	  	      $scope.search=function(){
	  	      	      $scope.isSearch=true;
	  	      }
	  	      $scope.cancelSearch=function(){
	  	      	      $scope.isSearch=false;
	  	      }
	  	 
	 });
	 //上面导航的controller 
	 app.controller('oneCtrl',function($scope,$http,$rootScope,apiUrl,apiMethod){
	  	
			//默认显示loading
			$scope.isShow = false;
			//设置chanelId传给详细页面
			$scope.channelId = '5572a108b3cdc86cf39001d6';
			
			$scope.news = [];
			var load = function() {
					$http.get(apiUrl, {
						params: {
							channelId: '5572a108b3cdc86cf39001d6',
//							callback: 'JSON_CALLBACK'
						}
					}).success(function(data) {
						//测试数据，发布时删除
						data = json;
						
						$scope.isShow = true;
//						console.log(data);
						$scope.news = $scope.news.concat(data.showapi_res_body.pagebean.contentlist);
						
					}).error(function(data){
						//测试数据，发布时删除
						data = json;
						
						$scope.isShow = true;
//						console.log(data);
						$scope.news = $scope.news.concat(data.showapi_res_body.pagebean.contentlist);
						
					})
				}
				//第一次进来的时候自执行加载数据
			load();			
			//加载更多的函数
			$scope.loadMore = function() {
				$scope.isShow = false;			
				load();
			}
	 });
	 app.controller('twoCtrl',function($scope,$http,$rootScope,$window){
	 	
	 });
	 app.controller('threeCtrl',function($scope,$http,$rootScope,$window){
	  	     
	 });
	 app.controller('fourCtrl',function($scope,$http,$rootScope,$window){
	  	     
	 });
	 app.controller('fiveCtrl',function($scope,$http,$rootScope,$window){
	  	     
	 });
	 app.controller('sixCtrl',function($scope,$http,$rootScope,$window){
	  	     
	 });
	 app.controller('sevenCtrl',function($scope,$http,$rootScope,$window){
	  	     
	 });
	 app.controller('paperCtrl',function($scope,$http,$rootScope,$window){
	  	     
	 });
	 app.controller('serviceCtrl',function($scope,$http,$rootScope,$window){
	  	      $scope.service1=[
	  	          {
	  	          	   img:'img/newslist/jd.jpg',
	  	          	   name:'酒店',
	  	          	   id:1,
	  	          	  url:'#/index/tab/three'
	  	          },{
	  	          	   img:'img/newslist/fz.png',
	  	          	   name:'找房子',
	  	          	   id:2,
	  	          	   url:'#/index/tab/three'
	  	          },{
	  	          	    img:'img/newslist/hb.png',
	  	          	     name:'航班',
	  	          	   id:3,
	  	          	   url:'#/index/tab/three'
	  	          	   
	  	          },{
	  	          	    img:'img/newslist/dmp.png',
	  	          	     name:'丁门票',
	  	          	   id:4,
	  	          	   url:'#/index/tab/three'
	  	          	   
	  	          }
	  	      ]
	  	      $scope.service2=[
	  	           {
	  	          	    img:'img/newslist/ckd.png',
	  	          	     name:'查快递',
	  	          	   id:5,
	  	          	   url:'#/index/tab/three'
	  	          	   
	  	          },{ 
	  	          	    img:'img/newslist/ms.jpg',
	  	          	     name:'美食',
	  	          	   id:6,
	  	          	   url:'#/index/tab/three'
	  	          	   
	  	          }
	  	      ]
	  	      $scope.toggleservice=function(id,url){
	  	      	     
	  	      }
	 });
	 app.controller('videoCtrl',function($scope,$http,$rootScope,$window){
	  	     
	 });
	 app.controller('detailCtrl',function($scope,$rootScope,$http, $state,$timeout, apiUrl) {
	 	 	
		//是否显示放大图片
		$scope.isShowGallery = false
		//获取id，视图下一页逻辑需要的数据
		$scope.id = parseInt($state.params.id);
		//获取channelId，根据频道取对应的新闻数据
		$scope.channelId = $state.params.channelId;
		//默认加载loading等待数据回调后消失
		$scope.isShow = false;
		$scope.showGallery = function(isshow, url) {
			$scope.isShowGallery = isshow;
//			console.log(url);
			$scope.imgUrl = "background-image:url(" + url + ")";
		}
		console.log($state.params)
		$http.get(apiUrl, {
			params: {
				page: 1,
				channelId: $scope.channelId,
				//channelName: '国内最新',
				channelName: '',
//				callback: 'JSON_CALLBACK'
			}
		}).success(function(data) {
			//测试数据，发布时删除
			data = json;
			
			console.log(data);
			$scope.isShow = true;
			$scope.allNum = data.showapi_res_body.pagebean.allNum;
			$scope.new = data.showapi_res_body.pagebean.contentlist[$state.params.id];
		
//			console.log($scope.new)
		}).error(function(data){
			//测试数据，发布时删除
			data = json;
			
//			console.log(data);
			$scope.isShow = true;
			$scope.allNum = data.showapi_res_body.pagebean.allNum;
			$scope.new = data.showapi_res_body.pagebean.contentlist[$state.params.id];
			
//			console.log($scope.new)
		});
		
		//点击详情页的评论等图片改变样式
	 	$scope.footernavs=[{
	 		              img:'img/newslist/pl.png',
	  	      	      name:'评论', 
                    id:1
	  	      	     
	  	      },{
	  	      	       img:'img/newslist/share1.jpg',
	  	      	       name:'分享',
	  	      	       id:2
	  	      	      
	  	      },{
	  	      	       img:'img/newslist/sc.png',
	  	      	       name:'收藏',
	  	      	       id:3
	  	      	      
	  	      },{
	  	      	       img:'img/newslist/dzz.jpg',
	  	      	       name:'点赞',
	  	      	       id:4
	  	      }];	
	  	      //点击详情页的评论等文字样式
	  	      $scope.red = {
				       'color':'#11C1F3',
				       'fontSize':'2px',
			      };
			      //点击详情页的评论等数字加减，点击详情页的评论等弹出评论页面
			       //分享
		  	      $scope.istable=false;
		  	      $scope.num=0;
	  	       $rootScope.id=1;
	  	       $scope.istext=false;
	  	       $scope.isfooter=true;
	  	      $scope.toggle=function(id){
	  	      	    $rootScope.id=id;
//	  	      	    console.log(id);
                  //评论
	  	      	    if(id==1){
//	  	      	    	   console.log(id);
	  	      	    	   $scope.istext=true;
	  	      	    	   $scope.isfooter=false;
	  	      	    }
	  	      	    $scope.num++;
	  	      	    //分享
	  	      	    if(id==2){
	  	                $scope.istable=true;
	  	                $scope.isfooter=false;
	  	      	    }
	  	      }
	  	      //取消评论
	  	      $scope.canceltext=function(){
	  	      	     $scope.istext=false;
	  	      	     $scope.isfooter=true;
	  	      }
	  	      //发表评论 
	  	      $scope.isfb=false;
	  	     
	  	      $scope.fabiaotext=function(){
	  	      	     $scope.isfb=true;
	  	      	     $scope.istext=false;
	  	      	     $scope.num++; 
	  	      	     $scope.isfooter=true;
	  	      	     $timeout(function () {
      							  $scope.isfb=false;      							 
                   }, 2000);
	  	      }   
	  	      //分享
	  	      $scope.share1=[{
	  	      	      img:'img/newslist/weixin.png',
	  	      	      name:'微信好友',
	  	      	       id:1,
	  	      	      url:'#/index/tab/two'
                   
	  	      },{
	  	      	     img:'img/newslist/pyq.png',
	  	      	      name:'微信朋友圈', 
	  	      	       id:2,
	  	      	      url:'#/index/tab/two'
                 
	  	      },{
	  	      	      img:'img/newslist/qq.jpg',
	  	      	      name:'QQ', 
	  	      	       id:3,
	  	      	      url:'#/index/tab/two'
                  
	  	      },{
	  	      	      img:'img/newslist/qqkj.png',
	  	      	      name:'QQ空间', 
	  	      	       id:4,
	  	      	      url:'#/index/tab/two'
                  
	  	      }];
	  	      $scope.share2=[
	  	              {
	  	      	      img:'img/newslist/xlwb.png',
	  	      	      name:'新浪微博', 
	  	      	       id:5,
	  	      	      url:'#/index/tab/two'
                   
	  	      },{
	  	      	      img:'img/newslist/xx.png',
	  	      	      name:'信息', 
	  	      	       id:6,
	  	      	      url:'#/index/tab/two'
                   
	  	      },{
	  	      	      img:'img/newslist/yj.jpg',
	  	      	      name:'邮件',
	  	      	       id:7,
	  	      	      url:'#/index/tab/two'
                    
	  	      },{
	  	      	      img:'img/newslist/fzlj.jpg',
	  	      	      name:'复制链接',
	  	      	       id:8,
	  	      	      url:'#/index/tab/two'
                   
	  	      }
	  	       ]
	  	     
	});
	 
})();

