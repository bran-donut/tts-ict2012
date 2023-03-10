export function getIcons() {
    const items = require.context('./assets', false, /\.(svg)$/);
    let images = {};
    items.keys().map((item, i) => {
        return images[item.replace('./', '')] = items(item).default;
    })
    return images;
}

export function findIndex(array, uniqueNumber) {
    return array.findIndex((x) => x.serialNumber == uniqueNumber);
}

export function convertDate(date, dataToInput) {
    const slash = '/', dash = '-';
    let formattedDate;
    if (dataToInput) {
        const [day, month, year] = date.split(slash);
        formattedDate = year + dash + month + dash + day;
    }
    else {
        const [year, month, day] = date.split(dash);
        formattedDate = day + slash + month + slash + year;
    }
    return formattedDate;
};

export function convertToCSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';

    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
            if (line != '') line += ','

            line += array[i][index];
        }

        str += line + '\r\n';
    }
    return str;
}

export function exportCSVFile(headers, items, fileTitle) {
    if (headers) {
        items.unshift(headers);
    }

    // Convert Object to JSON
    var jsonObject = JSON.stringify(items);

    var csv = convertToCSV(jsonObject);

    var exportedFilenmae = fileTitle ? (fileTitle + '.csv') : 'export.csv';

    var blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, exportedFilenmae);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", exportedFilenmae);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}