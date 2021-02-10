module.exports = {
    format_date: date => {
        let hour = parseInt(new Date(date).getHours())
        const meridiem = ((hour < 12) ? 'am' : 'pm');
        if (hour > 12) {
            hour = hour - 12
        } else if (hour == 0) {
            hour = 12;
        }
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()} ${hour}:${new Date(date).getMinutes().toString().padStart(2, '0')} ${meridiem}`;
    }
}