const months = [
    'JANUARY',
    'FEBRUARY',
    'MARCH',
    'APRIL',
    'MAY',
    'JUNE',
    'JULY',
    'AUGUST',
    'SEPTEMBER',
    'OCTOBER',
    'NOVEMBER',
    'DECEMBER'
  ];

export const formatDate = dateStr => {
    try {
        const date = new Date(dateStr);
        const monthName = months[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();
        return `${monthName} ${day}, ${year}`
    } catch {
        return "";
    }
}

export const formatDateTime = datetimeStr => {
    try {
        const date = new Date(datetimeStr);
        const monthName = months[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();
        return `${monthName} ${day}, ${year} ${hour}:${minute}:${second}`
    } catch {
        return "";
    }
}

export const durationToTime = durationInSeconds => {
    var hours = Math.floor(durationInSeconds / 3600);
    var minutes = Math.floor((durationInSeconds % 3600) / 60);
    var seconds = Math.floor(durationInSeconds % 60);

    // Formatting to ensure leading zeros if needed
    var formattedHours = hours < 10 ? '0' + hours : hours;
    var formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    var formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    return formattedHours + ':' + formattedMinutes + ':' + formattedSeconds;
}
