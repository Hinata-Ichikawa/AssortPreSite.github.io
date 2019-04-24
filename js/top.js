$(document).ready( function(){
	var rellax = new Rellax(' .rellax ');

	$(function () {
	    var ua = navigator.userAgent;
	    if (ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
	        // スマートフォン用コード
	    } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
	        // タブレット用コード
	    } else {
	        // PC用コード
	        $('.PortraitBg').css("display","none");
	        $('body').css("overflow","visible");
	    }
	})

	if (Math.abs(window.orientation) === 90) {
        // 横向きのときの処理
        $('.PortraitBg').css("display","none");
        $('body').css("overflow","visible");
    }
});

$(window).on('load orientationchange resize', function(){
    if (Math.abs(window.orientation) === 90) {
    	console.log("横");
        // 横向きになったときの処理
        $('.PortraitBg').css("display","none");
        $('body').css("overflow","visible");
    } else {
        // 縦向きになったときの処理
        console.log("縦");
        $('.PortraitBg').css("display","flex");
        $('body').css("overflow","hidden");
    }
});

$(function () {
    $('.RainText').textillate({
      //繰り返し
      loop: true,  
      // アニメーションの間隔時間
      minDisplayTime: 4500,  
      // アニメーション開始までの遅延時間
      initialDelay: 0,  
      // アニメーションの自動スタート
      autoStart: true,  
  
      // 開始時のアニメーション設定
      in: {
        // エフェクトの指定
        effect: 'bounceInDown',  
        // 遅延時間の指数
        delayScale: 1.5,  
        // 文字ごとの遅延時間
        delay: 50,  
        // true:アニメーションをすべての文字に同時適用
        sync: false,  
        // true:文字表示がランダムな順に表示される
        shuffle: true
      },  
  
      // 終了時のアニメーション設定
      out: {
        effect: 'hinge',  
        delayScale: 1.5,  
        delay: 50,  
        sync: false,  
        shuffle: true
      }
    });

})

$(window).scroll(function (){
    $('.About-TextBig').each(function(){
        var POS = $(this).offset().top;  //fade-inがついている要素の位置
        var scroll = $(window).scrollTop();  //スクロール一
        var windowHeight = $(window).height();  //ウィンドウの高さ

        if (scroll > POS - windowHeight + windowHeight/2){
        	$(this).css("visibility","visible")
            $(this).textillate({
			//繰り返し
			loop: true,  
			// アニメーションの間隔時間
			minDisplayTime: 90000000,  
			// アニメーション開始までの遅延時間
			initialDelay: 0,  
			// アニメーションの自動スタート
			autoStart: true,  

			// 開始時のアニメーション設定
			in: {
			// エフェクトの指定
			effect: 'rotateInUpLeft',  
			// 遅延時間の指数
			delayScale: 1.5,  
			// 文字ごとの遅延時間
			delay: 50,  
			// true:アニメーションをすべての文字に同時適用
			sync: false,  
			// true:文字表示がランダムな順に表示される
			shuffle: true
			}

		    });
        }
    });

    $('.Theme-UX').each(function(){
        var POS = $(this).offset().top;  //fade-inがついている要素の位置
        var scroll = $(window).scrollTop();  //スクロール一
        var windowHeight = $(window).height();  //ウィンドウの高さ

        if (scroll > POS - windowHeight + windowHeight/4){
        	$(this).css("visibility","visible")
            $(this).textillate({
			//繰り返し
			loop: true,  
			// アニメーションの間隔時間
			minDisplayTime: 90000000,  
			// アニメーション開始までの遅延時間
			initialDelay: 0,  
			// アニメーションの自動スタート
			autoStart: true,  

			// 開始時のアニメーション設定
			in: {
			// エフェクトの指定
			effect: 'bounceInUp',  
			// 遅延時間の指数
			delayScale: 1.5,  
			// 文字ごとの遅延時間
			delay: 50,  
			// true:アニメーションをすべての文字に同時適用
			sync: false,  
			// true:文字表示がランダムな順に表示される
			shuffle: true
			}

		    });
        }
    });

    $('.Restriction-Text').each(function(){
        var POS = $(this).offset().top;  //fade-inがついている要素の位置
        var scroll = $(window).scrollTop();  //スクロール一
        var windowHeight = $(window).height();  //ウィンドウの高さ

        if (scroll > POS - windowHeight + windowHeight/6){
        	$(this).css("visibility","visible")
            $(this).textillate({
			//繰り返し
			loop: true,  
			// アニメーションの間隔時間
			minDisplayTime: 90000000,  
			// アニメーション開始までの遅延時間
			initialDelay: 0,  
			// アニメーションの自動スタート
			autoStart: true,  

			// 開始時のアニメーション設定
			in: {
			// エフェクトの指定
			effect: 'rollIn',  
			// 遅延時間の指数
			delayScale: 1.5,  
			// 文字ごとの遅延時間
			delay: 50,  
			// true:アニメーションをすべての文字に同時適用
			sync: false,  
			// true:文字表示がランダムな順に表示される
			shuffle: false
			}

		    });
        }
    });

    $('.Support-Text').each(function(){
        var POS = $(this).offset().top;  //fade-inがついている要素の位置
        var scroll = $(window).scrollTop();  //スクロール一
        var windowHeight = $(window).height();  //ウィンドウの高さ

        if (scroll > POS - windowHeight + windowHeight/6){
        	$(this).css("visibility","visible")
            $(this).textillate({
			//繰り返し
			loop: true,  
			// アニメーションの間隔時間
			minDisplayTime: 90000000,  
			// アニメーション開始までの遅延時間
			initialDelay: 0,  
			// アニメーションの自動スタート
			autoStart: true,  

			// 開始時のアニメーション設定
			in: {
			// エフェクトの指定
			effect: 'rollIn',  
			// 遅延時間の指数
			delayScale: 1.5,  
			// 文字ごとの遅延時間
			delay: 50,  
			// true:アニメーションをすべての文字に同時適用
			sync: false,  
			// true:文字表示がランダムな順に表示される
			shuffle: false
			}

		    });
        }
    });

    $('.Last-Text').each(function(){
        var POS = $(this).offset().top;  //fade-inがついている要素の位置
        var scroll = $(window).scrollTop();  //スクロール一
        var windowHeight = $(window).height();  //ウィンドウの高さ

        if (scroll > POS - windowHeight + windowHeight/2){
        	$(this).css("visibility","visible")
        	$(this).css("-webkit-animation","typing 3s steps(33, end),blink-caret .5s step-end infinite alternate")
        }
    });
});