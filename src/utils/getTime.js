const month = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec',
};

function getTime(time = new Date()) {
    return `${month[time.getMonth()]} ${time.getDate()}, ${time.getFullYear()}`;
}

export default getTime;
