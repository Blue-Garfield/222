$(function(){
	$('.match-divider .arrow-ico').click(function(){
		$(this).parent().toggleClass('closed');
		$(this).parent().parent().toggleClass('hideOneDay');
    })
});
$(function(){
	$('.showAnalysis .arrow-ico').click(function(){
		$(this).parent(".showAnalysis").toggleClass('on');
        $(this).parent().parent().parent().find('.analyBox').toggle();
    });
});	

//选择0场
$(function(){
var result="1"; 
$('.match-num').val(result);
var power=$(".match-num").val(); //获取SPAN里的值
if(power=="0"){
$('.btn-confirm').click(function(){
		$('.layout').show();
		$('.iDialogAlert').show();
	});
}else{
	$('.btn-confirm').click(function(){
	$('.bet-bottom').removeClass('hide3');
	$('.layout').show();
});
}

$('.iDialogBtn').click(function(){
		$('.layout').hide();
		$('.iDialogAlert').hide();
	})

$('.close-icon').click(function(){
	$('.buy-bottom').addClass('hide3');
	$('.layout').hide();
	})
$('.method-option').click(function(){
	$(this).toggleClass('close');
//	$('.bet-bottom').toggleClass('top');
	$('.methods').toggleClass('hide');
	})


});

//选中变颜色
$(function(){
	$('.betbtn').click(function(){
		$(this).toggleClass('active');
	})
});

//选择比分弹出弹窗
$(function(){
	$('.match-list .match-item-01 .options-block .more-option').click(function(){
		$('.iDialogLayout').show();
		$('#iDialog0').show();
	})
	$('.cancel').click(function(){
		$('.iDialogLayout').hide();
		$('.bf-dialog').hide();
	})
	$('.confirm').click(function(){
		$('.iDialogLayout').hide();
		$('.bf-dialog').hide();
	})
});

//混合模式弹窗
$(function(){
	$('.mixall-block .game-more').click(function(){
		$('#iDialog0').show();
		$('.iDialogLayout').show();
	})
	$('.cancel').click(function(){
		$('.iDialogLayout').hide();
		$('#iDialog0').hide();
	})
	$('.confirm').click(function(){
		$('.iDialogLayout').hide();
		$('#iDialog0').hide();
	})
});
//确定选择几场
$(function(){
	$('.confirm').click(function(){
		$('.bet-help').hide();
		$('.box-center').removeClass('hide');
	})
});
$(function(){
	$('.zjq-options .game-area .row .col').click(function(){
		$('.bet-help').hide();
		$('.box-center').removeClass('hide');
	})
});

$(function(){
	$('.spf-options .col').click(function(){
		$('.bet-help').hide();
		$('.box-center').removeClass('hide');
	})
});


//清空
 $(function(){
	$('.btn-cancel').click(function(){
		$('.iDialogLayout').show();
		$('#iDialog1').show();
	})
});
//清空取消确定
 $(function(){
	$('.iDialogBtn').click(function(){
		$('.iDialogLayout').hide();
		$('#iDialog1').hide();
	})
});

////混合模式弹窗
//$(function(){
//	$('.mixall-block .game-more .row').click(function(){
//		$('#iDialog2').show();
//		$('.iDialogLayout').show();
//		$('#iDialog0').show();
//		
//	})
//	$('.cancel').click(function(){
//		$('#iDialog2').hide();
//		$('.iDialogLayout').hide();
//		$('#iDialog0').hide();
//	})
////已选择几场	
//	$('.confirm').click(function(){
//		$('#iDialog2').hide();
//		$('.bet-help').hide();
//		$('.box-center').removeClass('hide');
//		$('#iDialog0').hide();
//	});
//	$('.zjq-options .game-area .row .col').click(function(){
//		$('#iDialog2').hide();
//		$('.bet-help').hide();
//		$('.box-center').removeClass('hide');
//		$('#iDialog0').hide();
//	});
//	$('.match-list .options-block').click(function(){
//		$('#iDialog2').hide();
//		$('.bet-help').hide();
//		$('.box-center').removeClass('hide');
//		$('#iDialog0').hide();
//	});
//	
////清空	
//	$('.btn-cancel').click(function(){
//		$('#iDialog5').show();
//		$('.iDialogConfirm').show();
//		$('.iDialogLayout').show();
//		;
//	})
////清空取消
//  $('.iDialogBtn').click(function(){
//		$('#iDialog5').hide();
//		$('.iDialogLayout').hide();
//		$('.iDialogConfirm').hide();
//	});
//
//
//	$('.match-list .match-item-01 .options-block .more-option').click(function(){
//		$('.iDialogLayout').show();
//		$('#iDialog0').show();
//	})
//	
//	
//	$('.match-list .match-item-01 .options-block .more-option').click(function(){
//	
//	$('.iDialogLayout').show();
//	$('.bf-dialog').show();
//	}); 
//});

  function moveleft(){  
        var scrleft = $("#maincontent").scrollLeft();  
        if(scrleft>0) $("#maincontent").animate({scrollLeft:(scrleft-106)},500);  
    }  
    function moveright(){  
        var licount = $("#ul1").children("li").size(); //li个数  
        var perwidth = 106 + 0;//每个li的宽度和左控的和  
        var liwidths = licount * perwidth; //所有li的总宽度  
        var targetScrol = liwidths - 300;//li总宽度减去外层div的宽度。即得到滚动条需要滚动的长度  
        var scrleft = $("#maincontent").scrollLeft();//目前滚动条的滚动长度  
        if(!isNaN(targetScrol) && (scrleft < targetScrol)){  
            $("#maincontent").animate({"scrollLeft":scrleft+perwidth},500); //若 目前的滚动条的长度小于 最终需要滚动的长度，则向左拉动滚动条，拉动的距离为 一个li的宽度和它的左外空的距离。  
        }  
          
    }  