

var viz;
var workbook;
var activeSheet;

function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
        // url = "https://public.tableau.com/views/JavaScriptProjectWorkbook/BubbleChart",
        url = "https://public.tableau.com/views/JavaScriptProjectWorkbook/Bar",
        options = {
            hideTabs: true,
            onFirstInteractive: function ()

                {
                    workbook = viz.getWorkbook();
                    activeSheet = workbook.getActiveSheet();
                    console.log("options is working");

                }

        };

    viz = new tableau.Viz(containerDiv, url, options);
}

function vizResize() {
    var width = document.getElementById("resizeWidth").value;
    var height = document.getElementById("resizeHeight").value;

    // gets the width and height value

    viz.setFrameSize(parseInt(width, 10), parseInt(height, 10));
}


//Original Size

function originalSize() {
    // viz.setFrameSize(parseInt(1300, 10), parseInt(700, 10));
    var workbook = viz.getWorkbook();
    workbook.revertAllAsync();
}



//End of Test









//Switching Sheets

function barChart(){

    // var workbook = viz.getWorkbook();
    workbook.activateSheetAsync("Bar");
    console.log('Bar Chart Activated');
    var chart = document.getElementById("barChart");
    var chartID = document.getElementById("chartType");
    chartID.innerHTML = 'You have Chosen to see ' + chart.value;
};


function BubbleChart(){
    var workbook = viz.getWorkbook();
    workbook.activateSheetAsync("Bubble Chart");
    console.log('Bubble Chart Activated');
    var chart = document.getElementById("bubbleChart");
    var chartID = document.getElementById("chartType");
    chartID.innerHTML = 'You have Chosen to see ' + chart.value;
};

//This is because the Bubble chart and BW Chart do not have region filter

// var bubbleChart = document.getElementById("bubbleChart");
// var boxAndWhisker = document.getElementById("boxAndWhisker");



// bubbleChart.addEventListener('click', function(){
//     var regionDiv = document.getElementById("filterSelection");
//     regionDiv.style.display = 'none';
// });

// boxAndWhisker.addEventListener('click', function(){
//     var regionDiv = document.getElementById("filterSelection");
//     regionDiv.style.display = 'none';
// });








function boxAndWhisker(){
    var workbook = viz.getWorkbook();
    workbook.activateSheetAsync("BW");
    console.log('Box and Whisker Chart Activated');
    var chart = document.getElementById("boxAndWhisker");
    var chartID = document.getElementById("chartType");
    chartID.innerHTML = 'You have Chosen to see ' + chart.value;
};


//Filters
//wEST Filter
//Promise should be used here

function westFilter(){
    // workbook.activateSheetAsync("Bar Chart");
    activeSheet.applyFilterAsync(
        "Region",
        "West",
        tableau.FilterUpdateType.REPLACE
    );
};



//EAST Filter

function eastFilter(){

    activeSheet.applyFilterAsync(
        "Region",
        "East",
        tableau.FilterUpdateType.REPLACE
    )
};




//SOUTH Filter

function southFilter(){
   
    activeSheet.applyFilterAsync(
        'Region',
        'South',
        tableau.FilterUpdateType.ADD
    )
};



//radio button Activation

function radioButton()
{
    const rbs = document.querySelectorAll('input[name = "region"]');
    //double quote is needed in a single quote to ensure specitifity
    let selectedValue;
    for(const radiobutton of radiobuttons){
        if (radiobutton.checked){
            selectedValue = radiobutton.value;
            break;
        }
    }


};








