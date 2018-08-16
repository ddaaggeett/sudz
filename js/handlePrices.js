const basicwash = document.getElementById('basicwash');
const soapywash = document.getElementById('soapywash');
const superwash = document.getElementById('superwash');

const key = "1ErshNoAq3v7oaaqh-RVOn_b7jpL-s5v5-DqyRzI9dDA";
const sheetNum = "1";

GetSheetDone.labeledCols(key, sheetNum).then((data) => {
    console.log('Data');
    console.log(data);
    basicwash.innerHTML = data.data[0].washbucket;
    soapywash.innerHTML = data.data[0].soapywashbucket;
    superwash.innerHTML = data.data[0].supersudzbucket;
}).catch(err => {
    console.log('Error');
    console.log(err);
    basicwash.innerHTML = err.message;
    soapywash.innerHTML = err.message;
    superwash.innerHTML = err.message;
})
