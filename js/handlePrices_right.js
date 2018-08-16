const basicwash = document.getElementById('basicwash_right');
const soapywash = document.getElementById('soapywash_right');
const superwash = document.getElementById('superwash_right');

const key = "1ErshNoAq3v7oaaqh-RVOn_b7jpL-s5v5-DqyRzI9dDA";
const sheetNum = "1";

GetSheetDone.labeledCols(key, sheetNum).then((data) => {
    console.log('Data');
    console.log(data);
    basicwash.innerHTML = "$" + data.data[0].washbucket;
    soapywash.innerHTML = "$" + data.data[0].soapywashbucket;
    superwash.innerHTML = "$" + data.data[0].supersudzbucket;
}).catch(err => {
    console.log('Error');
    console.log(err);
    basicwash.innerHTML = err.message;
})
