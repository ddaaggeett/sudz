const detail_small = document.getElementById('detail_small');
const detail_small_tax = document.getElementById('detail_small_tax');
const detail_medium = document.getElementById('detail_medium');
const detail_medium_tax = document.getElementById('detail_medium_tax');
const detail_large = document.getElementById('detail_large');
const detail_large_tax = document.getElementById('detail_large_tax');

const key = "1ErshNoAq3v7oaaqh-RVOn_b7jpL-s5v5-DqyRzI9dDA";
const sheetNum = "1";

GetSheetDone.labeledCols(key, sheetNum).then((data) => {
    console.log('Data');
    console.log(data);
    const small = data.data[0].detailsmall;
    const medium = data.data[0].detailmedium;
    const large = data.data[0].detaillarge;
    detail_small.innerHTML = small;
    detail_medium.innerHTML = medium;
    detail_large.innerHTML = large;
    detail_small_tax.innerHTML = (small * 1.06).toFixed(2);
    detail_medium_tax.innerHTML = (medium * 1.06).toFixed(2);
    detail_large_tax.innerHTML = (large * 1.06).toFixed(2);
}).catch(err => {
    console.log('Error');
    console.log(err);
    detail_small.innerHTML = err.message;
    detail_small_tax.innerHTML = err.message;
    detail_medium.innerHTML = err.message;
    detail_medium_tax.innerHTML = err.message;
    detail_large.innerHTML = err.message;
    detail_large_tax.innerHTML = err.message;
})
