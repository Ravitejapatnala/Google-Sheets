const activeCellElement= document.querySelector("#active-cell");
const fontSizeInput=document.querySelector("#fontsize");
const fontFamilyInput=document.querySelector("#fontfamily");
const form=document.querySelector("#form");

let activeElement= null;

const state={};


const defaultProperties={
    fontFamily: "sans",
    fontSize: 16,
    color: "#000000",
    textAlign: "left",
    backgroundColor: "#ffffff",
    isBold: false,
    isItalic: false,
    isUnderlined: false,
    value: '',
}


function onCellFocus(event){
    const elementId= event.target.id;
    activeCellElement.innerText = elementId;
    activeElement=event.target;
    if(state[elementId]) //already selected cell, fill the options with the state of that cell.
    {
        resetOptions(state[elementId]);
    }
    else //selected for the first time, fill the options with the defaultproperties values.
    {
        resetOptions(defaultProperties);
    }
}

function resetOptions(optionsState){
    form.fontfamily.value=optionsState.fontFamily;
    form.fontsize.value=optionsState.fontSize;
    form.textalign.value=optionsState.textAlign;
    form.textcolor.value=optionsState.color;
    form.bgcolor.value= optionsState.backgroundColor;
    form.bold.checked= optionsState.isBold;
    form.italic.value= optionsState.isItalic;
    form.underline.value= optionsState.isUnderlined;
}

function onFormChange(){
    if(!activeElement)
    {
        alert("Please select a cell to make changes");
        form.reset();
        return;
    }

    let currentState={
        color: form.textcolor.value,
        backgroundColor: form.bgcolor.value,
        fontSize: form.fontsize.value,
        fontFamily: form.fontfamily.value,
        textAlign: form.textalign.value,
        isBold: form.bold.checked,
        isItalic: form.italic.checked,
        isUnderlined: form.underline.checked,
    }
    applyStylesToCell(currentState);

    //update the state object for the current cell
    state[activeElement.id]={...currentState, value: activeElement.innerText};
}

function applyStylesToCell(styleObject){
    //it will take currentstate styles and apply it to selected cells, and the selected cell is the active element.
    activeElement.style.fontFamily= styleObject.fontFamily;
    activeElement.style.fontSize= `${styleObject.fontSize}px`;
    activeElement.style.color= styleObject.color;
    activeElement.style.backgroundColor= styleObject.backgroundColor;
    activeElement.style.textAlign= styleObject.textAlign;
    if(styleObject.isBold)
    {
        activeElement.style.fontWeight = "bold";
    }
    else{
        activeElement.style.fontWeight= "normal";
    }
    if(styleObject.isItalic)
    {
        activeElement.style.fontStyle = "italic";
    }
    else{
        activeElement.style.fontStyle = "normal";
    }
    if(styleObject.isUnderlined)
    {
        activeElement.style.textDecoration = "underline";
    }
    else{
        activeElement.style.textDecoration = "none";
    }
}
