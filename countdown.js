function updateCountdown() {
    let now = new Date();
    let target = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3, 0, 0, 0);
    let diff = target - now;

    if (diff <= 0) {
        location.reload();
    }

    let days = Math.floor(diff / 1000 / 60 / 60 / 24);
    let hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(diff / 1000 / 60) % 60;
    let seconds = Math.floor(diff / 1000) % 60;

    document.querySelector("#countdown").innerHTML = `Flash sale kết thúc sau: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
