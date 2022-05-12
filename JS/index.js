$(".carousel-item").click(function () {
    location.href = "about.html"
});
$(".card").click(function () {
    location.href = "detail.html"
});

/*跳蚤市场,显示更多方法*/
$(".more-content").click(function () {
    const content = "<div class=\"card col-4\">\n" +
        "                    <img src=\"img/手机.jpg\" class=\"card-img-top rounded\" alt=\"苹果12Pro\">\n" +
        "                    <div class=\"card-body\">\n" +
        "                        <p class=\"card-title font-weight-bold\" href=\"detail.html\">苹果12Pro</p>\n" +
        "                        <p class=\"card-text text-truncate\">苹果12Pro Max 好蓝色 256G...</p>\n" +
        "                        <i class=\"bi bi-currency-yen font-weight-bold text-right text-danger\">6000</i>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"card col-4\">\n" +
        "                    <img src=\"img/机械键盘.jpg\" class=\"card-img-top rounded\" alt=\"蓝牙无线机械键盘\">\n" +
        "                    <div class=\"card-body\">\n" +
        "                        <h5 class=\"card-title font-weight-bold\" href=\"detail.html\">机械键盘</h5>\n" +
        "                        <p class=\"card-text text-truncate\">KeychronK10蓝牙无线机械键盘...</p>\n" +
        "                        <i class=\"bi bi-currency-yen font-weight-bold text-right text-danger\">350</i>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"card col-4\">\n" +
        "                    <img src=\"img/鞋.jpg\" class=\"card-img-top rounded\" alt=\"Nike耐克AF1\">\n" +
        "                    <div class=\"card-body\">\n" +
        "                        <h5 class=\"card-title font-weight-bold\" href=\"detail.html\">Nick运动鞋</h5>\n" +
        "                        <p class=\"card-text text-truncate\">Nike耐克AF1 SHADOW女子运动鞋...</p>\n" +
        "                        <i class=\"bi bi-currency-yen font-weight-bold text-right text-danger\">700</i>\n" +
        "                    </div>\n" +
        "                </div>";
    $('.row-content').append(content);
});

