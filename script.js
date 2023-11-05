const headerContainer= document.querySelector(".header");
const serialNumberContainer= document.querySelector(".sno");
const mainContainer= document.querySelector(".main");

let columns=26;
let serialNumbers= 100;

function createHeaderCells(){
    for(let i=0; i<=columns; i++)
    {
        const headerCell= document.createElement("div");
        headerCell.className= "header-cell";
        if(i!==0)
        {
            headerCell.innerText= String.fromCharCode(64+i);
        }
        headerContainer.append(headerCell); 
    }
}

function createSerialNumberContainer(){
    for(i=1;i<=serialNumbers;i++)
    {
        const serialNumberCell= document.createElement("div");
        serialNumberCell.className= "serial-cell";
        serialNumberCell.innerText= i;
        serialNumberContainer.append(serialNumberCell);
    }
}

function createRow(rowNumber){
    const row=document.createElement("div");
    row.className= "row";
    for(let i=1; i<=columns; i++)
    {
        const cell= document.createElement("div");
        cell.className= "main-cell";
        cell.contentEditable=true;
        row.appendChild(cell);
        cell.id=String.fromCharCode(64+i)+rowNumber;
        cell.addEventListener("focus", onCellFocus);//adding focus event for every cell.
        cell.addEventListener("input", onFormChange);//to record the change in the input of the cell.
    }
    mainContainer.append(row);
}

function buildMain(){
    for(let i=1; i<=serialNumbers; i++)
    {
        createRow(i);
    }
}

createHeaderCells();
createSerialNumberContainer();
buildMain();