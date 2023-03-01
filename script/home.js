layui.use(['layer'], function () {
    var layer = layui.layer;
    var $ = layui.$;

    // 自动计算屏幕尺寸
    var pageWidth = $(document).width();
    var pageHeight = $(document).height();
    calculateWinSize(pageWidth, pageHeight);
    $(window).resize(function () {
        pageWidth = $(document).width();
        pageHeight = $(document).height();
        calculateWinSize(pageWidth, pageHeight);
    });

    function calculateWinSize(w, h) {
        $('.wrapper').css({ width: w + 'px', height: h + 'px' });
    }

    // 判断是否为移动端
    function _isMobile() {
        return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
    }

    // 跳转按钮分发URL
    $("#openChat").on('click', function () {
        if (_isMobile()) {
            window.open('http://ai.12305.net', '_blank');
        } else {
            window.open('http://ai.opentmd.com', '_blank');
        }
    })
})