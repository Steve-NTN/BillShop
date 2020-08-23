// Xử lí khi click tùy mục
function clickOption(e) {
    var option = $(this).attr("op-mode");
    if (option == 1) {
        $("#main-title").text("Danh mục tính tiền");
        $(".main-caculate").css("display", "");
        $(".main-caculate").siblings().css("display", "none");
    }
    if (option == 2) {
        $("#main-title").text("Danh mục sản phẩm");
        $(".main-product").siblings().css("display", "none");
        $(".main-product").css("display", "");
    }
    if (option == 3) {
        $("#main-title").text("Danh mục hóa đơn");
        $(".main-bill").siblings().css("display", "none");
        $(".main-bill").css("display", "");
    }
}