


    // api url
const api_url = 
      "https://dsbm.ulbi.ac.id/v1/caridosen/datadosen";
        
// Defining async function
async function getapi(url) {
    
    // Storing response
  const response = await fetch(api_url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
  "nidn": "Rolly logistik bisnis"
})
  });
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data['data']);
}
// Calling that async function
getapi(api_url);
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
          <th>Name</th>
          <th>Office</th>
          <th>Position</th>
          <th>Salary</th>
         </tr>`;
    
    // Loop to access all rows 
    // for (let r of data.list) {
        tab += `<tr> 
    <td>${data.Nama} </td>
    <td>${data.NIDN}</td>
    <td>${data.PT}</td> 
    <td>${data.Prodi}</td>          
</tr>`;
    // }
    // Setting innerHTML as tab variable
    document.getElementById("employees").innerHTML = tab;
}
