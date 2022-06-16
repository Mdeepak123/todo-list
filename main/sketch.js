
function newTask(){
    var form = document.createElement('form');
    form.className = 'form'

    var holderDiv = document.createElement('div');
    holderDiv.className = "holder";

    var nameInput = document.createElement('input');
    nameInput.placeholder = "Name of Task"

    var dateInput = document.createElement('input');
    dateInput.placeholder = "Enter Date For Completion";

    holderDiv.appendChild(nameInput);
    holderDiv.appendChild(dateInput);

    var submitButton = document.createElement('button');
    var textnode = document.createTextNode("Submit");
    submitButton.appendChild(textnode);
    submitButton.type = 'submit';
    submitButton.className = 'submitButton';

    form.appendChild(holderDiv);
    form.appendChild(submitButton);

    var container = document.getElementsByClassName('main');
    container[0].appendChild(form);

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // <==stop page refresh==>

        container[0].removeChild(form)
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        checkbox.name = 'task';
        checkbox.id = 'task';
        checkbox.value = 'done';

        var label = document.createElement('label');
        label.for = 'task'

        label.className = "taskLabel"

        var labelText = document.createTextNode(nameInput.value + "     " + dateInput.value);
        label.appendChild(labelText);

        var formDiv = document.createElement('div');
        formDiv.className = 'formDiv';

        formDiv.appendChild(checkbox);
        formDiv.appendChild(label);

        container[0].appendChild(formDiv)
    });
}

function nameAlert(){

    let foo = prompt('Type here');
    let bar = confirm('Confirm or deny');
    console.log(foo, bar);

    return foo;
}


function getProjectName(){

    var name = nameAlert();
    var button = document.createElement('button');
    button.innerHTML = name;

    var container = document.getElementsByClassName('projects');
    container[0].appendChild(button);

}


