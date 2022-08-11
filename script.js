var selectedRow = null

function onFormsubmit() {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();
}

//Retrieve the data
function readFormData(){
    var formData = {};
    formData["positionNow"] = document.getElementById("positionNow").value;
    formData["name"] = document.getElementById("name").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["tax"] = document.getElementById("tax").value;
    return formData;
}

// Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.positionNow;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.name;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.tax;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("positionNow").value = selectedRow.cells[0].innerHTML;
    document.getElementById("name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
    document.getElementById("tax").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.positionNow;
    selectedRow.cells[1].innerHTML = formData.name;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.tax;
}

//Delete the data
function onDelete(td) {
    if (confirm('Are you sure? You can delete this but not the memories of her')) {
        row = td.parentElement.parentElement;
        document.getElementById('employeeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("positionNow").value = '';
    document.getElementById("name").value = '';
    document.getElementById("salary").value = '';
    document.getElementById("tax").value = '';
    selectedRow = null;
}