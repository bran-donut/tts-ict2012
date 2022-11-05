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