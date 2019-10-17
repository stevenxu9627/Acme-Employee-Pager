let fetchedusers;

window.addEventListener('hashchange', function(e) {
    console.log(e);
})

window.addEventListener('load', async function() {
    const res = await window.fetch('https://acme-users-api-rev.herokuapp.com/api/users')
    const data = await res.json();
    fetchedusers = data.users;
    render(fetchedusers);
    document.getElementById('first').href= window.location
});

const clearTable = () => {
    let table = document.getElementById('users')
    for(let i = table.rows.length - 1;i>0;i--){
        table.deleteRow(i);
    }
    return table;
}
const render = (users) => {
    let table = clearTable();
    for(let i =0; i < users.length;i++) {
        let row = table.insertRow(Number(i)+1);
        createuserrow(row, [users[i].firstName, users[i].lastName, users[i].email, users[i].title]);
    }
    
}

const createuserrow = (row, data) => {
    data.forEach((element, i)=> {
        let cell = row.insertCell(i);
        cell.innerHTML = element;
    });
    return row;
}