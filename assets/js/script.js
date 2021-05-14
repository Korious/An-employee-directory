const employee = document.querySelectorAll('.employee');

const displayEmployees = (values) =>{
    
    employee.forEach(element => {
        element.style.display = "none"
        const name = element.children[1].innerHTML.toUpperCase();
        const position = element.children[2].innerHTML.toUpperCase();
        const job_type = element.children[3].innerHTML.toUpperCase();

        if (name.includes(values) === true || position.includes(values) === true || job_type.includes(values) === true) {
            
            element.style.display = "block"
        }
        else if (values === "") {
            console.log(searchEmployee.value)
            employees.style.display = "block"
            console.log(name)
    
        }
    });
    
}

searchEmployee.addEventListener('input', (e) =>{
    displayEmployees(e.target.value.toUpperCase())
})



