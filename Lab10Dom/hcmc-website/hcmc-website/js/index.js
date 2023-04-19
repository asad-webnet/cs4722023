let dEle = {
    'patient_form': document.querySelector("#patient-form"),
    'patient_list': document.querySelector("#tbodyPatientsList"),
    'out-patient_filter': document.querySelector("#chkShowOutPatients"),
    'elder-patient_filter': document.querySelector("#chkElderlyPatients")
}


dEle['patient_form'].addEventListener("submit", function (e) {
    e.preventDefault();

    // console.log("Hello");
    const data = new FormData(dEle['patient_form']);
    for (const [name, value] of data) {
        console.log(name, ":", value)
    }
    console.log(data);

    let html = `<td>${data.get('patientIdNumber')}</td>
    <td>${data.get('firstName')}</td>
    <td>${data.get('middleInitials')}</td>
    <td>${data.get('lastName')}</td>
    <td>${data.get('dateOfBirth')}</td>
    <td>${data.get('ddlDepartment')}</td>
    <td>${data.get('radioIsOutPatient')}</td>`;

    let newRow = document.createElement('tr');

    newRow.innerHTML = html;

    // console.log(html);

    dEle["patient_list"].append(newRow);

})

dEle["out-patient_filter"].addEventListener("change", filterFunc)
dEle["elder-patient_filter"].addEventListener("change", filterFunc)



function filterFunc() {

    let allPatients = [...dEle.patient_list.children];

    if (dEle["out-patient_filter"].checked || dEle["elder-patient_filter"].checked) {

        allPatients.forEach(patient => {
            console.log(patient);
            patient.classList.add("d-none");
        })

        // Patient is out testing
        if (dEle["out-patient_filter"].checked) {

            outPatients = allPatients.filter(patient => patient.children[6].innerText == "Yes");

            outPatients.forEach(patient => {
                console.log(patient);
                patient.classList.remove("d-none");
            })

        }


        // Patient is elder testing
        if (dEle["elder-patient_filter"].checked) {

            elderPatients = allPatients.filter(patient => {
                let diff = Math.abs((new Date(patient.children[4].innerHTML).getYear() - (new Date()).getYear())) >= 65;
                console.log(diff);

                return diff;
            });

            elderPatients.forEach(patient => {
                console.log(patient);
                patient.classList.remove("d-none");
            })

        }

    } else {
        allPatients.forEach(patient => {
            console.log(patient);
            patient.classList.remove("d-none");
        })

    }

}

// patientIdNumber : EP-001-000001
// index.js:12 firstName : aaa
// index.js:12 middleInitials : 
// index.js:12 lastName : amsma
// index.js:12 dateOfBirth : 2020-11-30
// index.js:12 ddlDepartment : Cardiology
// index.js:12 radioIsOutPatient : No