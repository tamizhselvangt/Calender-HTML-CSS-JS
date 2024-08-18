const monthYear = document.getElementById('month-year');
const calendarBody = document.getElementById('calendar-body');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');

let currentDate = new Date();

function updateCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    monthYear.textContent = new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' });

    calendarBody.innerHTML = '';

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    for (let i = 0; i < 7; i++) {
        const dayName = new Date(2023, 0, i + 1).toLocaleString('default', { weekday: 'short' });
        calendarBody.innerHTML += `<div class="day day-name">${dayName}</div>`;
    }

    for (let i = 0; i < startingDay; i++) {
        calendarBody.innerHTML += '<div class="day"></div>';
    }

    const today = new Date();

    for (let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day', 'in-month');
        dayElement.textContent = i;

        if (year === today.getFullYear() && month === today.getMonth() && i === today.getDate()) {
            dayElement.classList.add('today');
        }

        calendarBody.appendChild(dayElement);
    }
}

prevMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
});

nextMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
});

updateCalendar();
