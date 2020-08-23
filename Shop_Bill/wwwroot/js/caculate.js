// Biến đếm 

$(document).ready(function (e) {
    caculate = new Caculate();
});

class Caculate {
    constructor() {
        this.initEvent();
    };

    initEvent() {
        $("#head-menu, #head-menu-text").click(this.clickMenu);
        $("#table-main tbody tr").click(clickOnRow);
        $("#table-main tbody tr").dblclick(dblClickOnRow);
        $("#option-mode li").click(clickOption);
    }

    // Hiện,Ẩn menu 
    clickMenu(e) {
        var showMainLeft = $(".main-left").toggle().is(":visible");
        if (showMainLeft)
            $(".main-right").css("width", "calc(100% - 200px)");
        else
            $(".main-right").css("width", "100%");
    }
};

// Xử lí click 1 hoặc nhiều hàng
function clickOnRow(e) {
    $(this).addClass("row-clicked");
}

// Xử lí double click 1 hàng
function dblClickOnRow(e) {
    $(this).remove();
}

