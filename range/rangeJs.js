/**
 * Created by yana.loo on 16/5/28.
 */

/*selectNode,selectNodeContents*/
function deleteRangeContents(onlyContent){
    var selNode = document.getElementById("selNode");
    var rangeObj=document.createRange();

    if(onlyContent){
        rangeObj.selectNodeContents(selNode);
        rangeObj.deleteContents();
    }else{
        rangeObj.selectNode(selNode);
        rangeObj.deleteContents();
    }
}

/*setStart,setEND*/
function deleteChar(){
    var myChar = document.getElementById("myChar");
    var textNode = myChar.firstChild;
    var rangeObj = document.createRange();

    rangeObj.setStart(textNode,1);
    rangeObj.setEnd(textNode,4);
    rangeObj.deleteContents();
}

/*setStartBefore,setStartAfter*/
function deleteRows(){
    var myTable = document.getElementById("myTable");
    if(myTable.rows.length > 0){
        var row = myTable.rows[0];
        var rangeObj = document.createRange();
        rangeObj.setStartBefore(row);
        rangeObj.setEndAfter(row);
        rangeObj.deleteContents();
    }
}

/*cloneRange*/
function cloneRange(){
    var rangeObj = document.createRange();
    rangeObj.selectNodeContents(document.getElementById("myText"));
    var cloneRange = rangeObj.cloneRange();
    alert(cloneRange);
}

/*cloneContents*/
function cloContents(){
    var cloContent = document.getElementById("cloContent");
    var rangeObj = document.createRange();
    rangeObj.selectNodeContents(cloContent);
    var docFrame = rangeObj.cloneContents();
    cloContent.appendChild(docFrame);
}

/*extractContents()*/
function moveContents(){
    var srcSection = document.getElementById("srcSection");
    var discSection = document.getElementById("discSection");
    var rangeObj = document.createRange();
    rangeObj.selectNodeContents(srcSection);
    var docFragment = rangeObj.extractContents();
    discSection.appendChild(docFragment);
}

/*insertNode*/
function onMouseUp(){
    var btn = document.getElementById("btn");
    var selection = document.getSelection();
    if(selection.rangeCount > 0){
        var range = selection.getRangeAt(0);
        range.insertNode(btn);
    }
}

/*compareBoundaryPoints()*/
function testPlace(){
    var blodTest= document.getElementById("blodTest");
    var blodRange = document.createRange();
    blodRange.selectNodeContents(blodTest.firstChild);
    var selection = document.getSelection();
    if(selection.rangeCount > 0){
        var selRange = selection.getRangeAt(0);
        if(selRange.compareBoundaryPoints(Range.START_TO_END, blodRange) < 0){
            alert("在粗体前面");
        }else{
            if(selRange.compareBoundaryPoints(Range.END_TO_START,blodRange) > 0){
                alert("在粗体后面")
            }
        }
    }
}

/*selection*/
function rangeTest(){
    var html;
    var showRange = document.getElementById("showRange");
    var selection = document.getSelection();
    if(selection.rangeCount > 0){
        html = "选取了"+selection.rangeCount+"内容<br>"
        for(var i=0; i<selection.rangeCount; i++){
            var range =selection.getRangeAt(i);
            html += "第"+(i+1)+"段内容："+range+"<br/>"
        }
        showRange.innerHTML = html;
    }
}