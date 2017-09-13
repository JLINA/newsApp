;
(function(){
	   var app=angular.module('news.directive', []);
	   //新闻列表
	   app.directive('xnewslist',function(){
	   	     return{
	   	     	    templateUrl: 'directive/newslist.html'
	   	     }
	   });
	   //轮播图
	   app.directive('xswiper',function(){
	   	    return{
	   	     	    templateUrl: 'directive/swiper.html'
	   	    	   
	   	    }
	   });
	   app.directive('xloadmore',function(){
	   	    return{
	   	     	    templateUrl: 'directive/loadmore.html'	   	    	  
	   	    }
	   });
	   app.directive('xfooter',function(){
	   	    return{
	   	    	   templateUrl:'directive/footer.html'	   	    }
	   });
	   
})();
