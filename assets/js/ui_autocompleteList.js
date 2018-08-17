//Sample Emp Data
companyDirectory = [
	{
		value: "Clark Kent",
		img: "1icon.png",
		category: "DC",
	},
	{
		value: "Bruce Wayne",
		img: "2icon.png",
		category: "DC",
	},
	{
		value: "Thor Odinson",
		img: "3icon.png",
		category: "Marvel",
	},
	{
		value: "Genis Marvel",
		img: "1icon.png",
		category: "Marvel",
	},
	{
		value: "Carol Danvers",
		img: "2icon.png",
		category: "Marvel",
	},
];

var multiarray = [];
var value = "";

//Check for duplicates. load each selection into an array. when clicking to advance to next step, check array. If selection is NOT in array, add it and display the choice to the user. If not return.
function logMultiSelect( selection, img, category ) {
	if(multiarray.indexOf(selection) == -1){
		multiarray.push(selection);
		var acSelections = "<li class='selection'><img src='assets/images/" + img + "'>" + selection + "<a href='#' class='close'>X</a>";
		$(acSelections).prependTo( "#recog_ACSelections" );
	}

	// when multselect close is clicked, remove this instance from the array.
	$("li.selection a").click(function(){
  		selection = $(this).parent();
		text = selection.text().slice(0,-1);
		i = multiarray.indexOf(text);
		if(i != -1){
			multiarray.splice(i, 1);	
		}
		selection.remove();
		$("input[name='recogEmpsList']").val(multiarray);
	});
}

$(document).ready(function(){
	recogSomeone();
});

function recogSomeone() {

// Locate and select employees to reward
	$( ".recog_EmpLookup" ).autocomplete({
		source: companyDirectory,
		minLength: 0,
		select: function( event, ui ) {
			logMultiSelect( ui.item.value, ui.item.img, ui.item.category, ui.item.href );
			$(this).val("");
			return false;
		}
	})
	.data( "ui-autocomplete" )._renderItem = function( ul, item ){
		return $( "<li>" )
		.data('ui-autocomplete-item', item)
		.append("<a><img src='assets/images/" + item.img + "'>" + item.value + " | " + item.category + "</a>" )
		.appendTo( ul );
		
	};

	$("input[name='recog_Level']").click(function(){
		descripName=$(this).val();
		$('.recog_LevelDescription').hide();
		$(".recog_LevelDescription:has(h3:contains('"+descripName+"'))").show();
	});

};