/*  JavaScript Document                      */


var timelineWidth = 0;
var panelWidth = 0;
var firstRun = true;
var totalPanels = 0;
var currentPanel = 0;

$(document).ready(function(){

    panelWidth = $('.timeline .panel').width();
    adjustLayout();
});

function adjustLayout(){
    $('.timeline .panel').each(function(index){
        var newX = panelWidth * index;
        $(this).css('left',newX+'px');
    });
}