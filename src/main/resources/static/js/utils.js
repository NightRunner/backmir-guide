//POST ajax 具体用法参见ajax函数
function ajaxPost(options) {
    options = $.fn.extend(options, {method: "POST"});
    ajax(options);
}

//GET ajax 具体用法参见ajax函数
function ajaxGet(options) {
    options = $.fn.extend(options, {method: "GET"});
    ajax(options);
}

//带有loading和tip显示的ajax函数
function ajax(options) {
    var defaultOptions = {
        method: 'GET',
        showLoading: false,
        url: '',
        params: {},
        showMsg: false,
        success: function (result) {
        }
    };


    options = $.fn.extend(defaultOptions, options);

    options.params.timpstamp_ = new Date().getTime();

    console.log(options);

    if (options.showLoading) {
        loading("加载中");
    }

    $.ajax({
        dataType: 'json',
        type: options.method,
        url: options.url, data: options.params, success: function (data, b, c) {

            if (options.showLoading) {
                closeLoading();
            }

            var result = data;

            if (result.success) {
                options.success(result);
                if (options.showMsg) {
                    //$.jBox.tip("<div style='font-size: 1.5em'>"+result.message+"</div >", 'success');
                    var message = result.message
                    if (isEmpty(message)) {
                        message = '操作成功';
                    }
                    showSuccessTip(message);
                    //$.jBox.tip(result.message);
                }
            } else {
                var message = result.message
                if (isEmpty(message)) {
                    message = '操作失败';
                }
                showErrorTip(message);
            }
        }
    });
}

function showErrorTip(message) {
    alert(message);
}

function isEmpty(str) {
    return typeof (str ) == 'undefined' || str == '' || str == null;
}

function parseDate(str) {
    if (typeof str == 'string') {
        var results = str.match(/^ *(\d{4})-(\d{1,2})-(\d{1,2}) *$/);
        if (results && results.length > 3) return new Date(parseInt(results[1]), parseInt(results[2]) - 1, parseInt(results[3]));
        results = str.match(/^ *(\d{4})-(\d{1,2})-(\d{1,2}) +(\d{1,2}):(\d{1,2}):(\d{1,2}) *$/);
        if (results && results.length > 6) return new Date(parseInt(results[1]), parseInt(results[2]) - 1, parseInt(results[3]), parseInt(results[4]), parseInt(results[5]), parseInt(results[6]));
        results = str.match(/^ *(\d{4})-(\d{1,2})-(\d{1,2}) +(\d{1,2}):(\d{1,2}):(\d{1,2})\.(\d{1,9}) *$/);
        if (results && results.length > 7) return new Date(parseInt(results[1]), parseInt(results[2]) - 1, parseInt(results[3]), parseInt(results[4]), parseInt(results[5]), parseInt(results[6]), parseInt(results[7]));
    }
    return null;
}
