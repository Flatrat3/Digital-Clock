const updateTime = setInterval(() => {
    const now = new Date();

    const hourElement = document.getElementById('hour');
    const minuteElement  = document.getElementById('minute');
    const secondsElement = document.getElementById('seconds');

    
    const h = now.getHours().toString().padStart(2,"0")
    const m = now.getMinutes().toString().padStart(2,"0")
    const s = now.getSeconds().toString().padStart(2,"0")

    hourElement.textContent = h
    minuteElement.textContent=m;
    secondsElement.textContent = s;
}, 1000);


