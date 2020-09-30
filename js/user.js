$(document).ready(function () {
    var uid = 654296;
    //personal stats
    $.ajax({
        url: "https://osu.ppy.sh/api/get_user?k=c4e57a353c571a5a2e4e2d0861c667a0e626a0a0&u=" + uid,
        dataType: "json",
        async: false,
        cache: true,
        success: function (data) {
            $('#profile-username').text(data[0].username);
            $('#ps-rank').text("#" + data[0].pp_rank);
            $('#ps-pp').text(data[0].pp_raw);
            $('#ps-pc').text(data[0].playcount);
            $('#avatar').attr("src", "http://s.ppy.sh/a/" + uid);
            $('#country').attr("src", "../imgs/country-flags/" + data[0].country + ".png").attr("alt", data[0].country);
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
})