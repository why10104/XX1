$(function(){
    $('.s2').hide();
    $('.a1').on('mouseover',function(){
        $(this).find('.s2').show();
    }).on('mouseout',function(){
        $(this).find('.s2').hide();
    });

    $('.int1').click(function(){
        $('.rig2').addClass("active");
        $('.rig1').removeClass("active");
        $('.int11').click(function() {
            add();
        });
    });


//    删除tr
    $('tbody tr').click(function(){
        //增加人员
        // $(this).siblings();
        var n21 = $(this).children('td:eq(1)');
        var n22 = $(this).children('td:eq(2)');
        var n23 = $(this).children('td:eq(3)');
        var n24 = $(this).children('td:eq(4)');
        // console.log($(this).children('td').get(4));

        $(this).siblings().removeClass('delete');
        $(this).siblings().css("background","none");
        $(this).css("background","rgba(0,0,0,0.5)");
        $(this).addClass("delete");
        $('.rig1').addClass("active");
        $('#personId').val($(n21).text());
        $('#personname').val($(n22).text());
        $('#commay').val($(n23).text());
        $('#companys').val($(n24).text());
        $('.rig2').removeClass("active");
        $('.int3').click(function(){
            //删除行
            $('tbody tr').remove('.delete');
            //改变行序号
            $('tbody tr .td').each(function(i){
                $(this).text(i+1);
            });
            $('.rig1').removeClass("active");
            $('.rig2').removeClass("active");
        });
        $('.int2').click(function(){
            // $('.rig2 ul li input').val('');
            $('.rig2').addClass("active");
            $('#tpersonId').val($(n21).text());
            $('#tpersonname').val($(n22).text());
            $('#tcommay').val($(n23).text());
            $('#tcompanys').val($(n24).text());
            $('.rig1').removeClass("active");
            $('.int11').click(function(){
                
                var n1= $('#tpersonId').val();
                var n2= $('#tpersonname').val();
                var n3= $('#tcommay').val();
                var n4= $('#tcompanys').val();
                 $(n21).text(n1);
                 $(n22).text(n2);
                 $(n23).text(n3);
                 $(n24).text(n4);
                $('.rig2').removeClass("active");
            });

        });
    });


    function add(){
        // 非空判断
        if($("#tpersonId").val()==""){
            alert("用户名不能为空不能为空");
            return;
        }
        if($("#tpersonname").val()==""){
            alert("姓名不能为空");
            return;
        }
        if($("#tcompanys").val()==""){
            alert("角色不能为空");
            return;
        }
        if($("#tcommay").val()==""){
            alert("所属公司不能为空");
            return;
        }
        var nums = $(".tab tbody tr").length +1;
        var tpId = $('#tpersonId').val();
        var tpname = $('#tpersonname').val();
        var tpgs = $('#tcommay').val();
        var tpjs = $('#tcompanys').val();
        $(".tab tbody").append(`<tr><td class="td">${nums}</td><td>${tpId}</td><td>${tpname}</td><td>${tpgs}</td><td>${tpjs}</td></tr>`);
        
        //二、清空文本框
        $('.rig2 .intt1').val("");
    };

});