
const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");
    const startBtn = document.getElementById("startBtn");
    const messageBox = document.getElementById("message");
    const foodCountDiv = document.getElementById("foodCount");

    let snake, food, dir, interval, foodLeft;

    function drawBlock(x, y, color = "#46ECD5") {
    ctx.fillStyle = color;
      ctx.fillRect(x * 10, y * 10, 10, 10);
    }

    function updateFoodCount() {
    foodCountDiv.innerHTML = "";
    for (let i = 0; i < foodLeft; i++) {
        const dot = document.createElement("div");
        dot.classList.add("food-dot");
        foodCountDiv.appendChild(dot);
    }
    }

    function resetGame() {
    snake = [{ x: 5, y: 5 }];
    dir = { x: 0, y: -1 };
    food = { x: 10, y: 10 };
    foodLeft = 10;
    updateFoodCount();
    if (interval) clearInterval(interval);
    interval = setInterval(update, 150);
    messageBox.innerHTML = "";
    }

    function endGame(win = false) {
    clearInterval(interval);
    messageBox.innerHTML = `<span>${win ? "WELL DONE!" : "GAME OVER!"}</span>
        <button class="btn">${win ? "play-again" : "start-again"}</button>`;
    document.querySelector(".btn").addEventListener("click", resetGame);
    }

    function update() {
    const head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };

    if (
        head.x < 0 || head.y < 0 || head.x >= 20 || head.y >= 20 ||
        snake.some((s) => s.x === head.x && s.y === head.y)
    ) return endGame();

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        food = {
          x: Math.floor(Math.random() * 20),
          y: Math.floor(Math.random() * 20),
        };
        foodLeft--;
        updateFoodCount();
        if (foodLeft === 0) return endGame(true);
    } else {
        snake.pop();
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBlock(food.x, food.y);
    snake.forEach((s, i) => drawBlock(s.x, s.y, i === 0 ? "#46ECD5" : "#0cc"));
    }

    document.addEventListener("keydown", (e) => {
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
            e.preventDefault(); //
        }
    if (e.key === "ArrowUp" && dir.y === 0) dir = { x: 0, y: -1 };
    else if (e.key === "ArrowDown" && dir.y === 0) dir = { x: 0, y: 1 };
    else if (e.key === "ArrowLeft" && dir.x === 0) dir = { x: -1, y: 0 };
    else if (e.key === "ArrowRight" && dir.x === 0) dir = { x: 1, y: 0 };
    });

    startBtn.addEventListener("click", resetGame);




    // document.addEventListener('DOMContentLoaded', function() {
    //     const icon = document.querySelector('.icon');
    //     const menu = document.querySelector('.links ul');

    //     icon.addEventListener('click', function() {
    //         menu.classList.toggle('active');
    //     });
    // });

    // document.addEventListener('DOMContentLoaded', function() {
    //     const icon = document.querySelector('.icon');
    //     const menu = document.querySelector('.links ul');

    //     // تصحيح: تحقق من وجود العناصر
    //     if (!icon || !menu) {
    //         console.error('Error: .icon or .links ul not found');
    //         return;
    //     }

    //     icon.addEventListener('click', function() {
    //         console.log('Icon clicked!'); // للتصحيح
    //         menu.classList.toggle('active');
    //     });
    // });

    // document.addEventListener('DOMContentLoaded', function () {
    //     const icon = document.querySelector('.icon');
    //     const menu = document.querySelector('.links ul');
      
    //     console.log(icon); // ✅ هنا تمام
      
    //     if (!icon || !menu) {
    //       console.error('Error: .icon or .links ul not found');
    //       return;
    //     }
      
    //     icon.addEventListener('click', function () {
    //       console.log('Icon clicked!');
    //       menu.classList.toggle('active');
    //       menu.style.backgroundColor = menu.classList.contains('active') ? 'green' : 'red';
    //     });
    //   });
      
// document.addEventListener('DOMContentLoaded', function () {
//     const icon = document.querySelector('.icon');
//     const menu = document.querySelector('.links ul');

//     console.log(icon); // ✅ هنا تمام

//     if (!icon || !menu) {
//         console.error('Error: .icon or .links ul not found');
//         return;
//     }

//     icon.addEventListener('click', function () {
//         console.log('Icon clicked!');
//         menu.classList.toggle('active');
//         menu.style.backgroundColor = menu.classList.contains('active') ? 'green' : 'red';
//     });
// });


// document.addEventListener('DOMContentLoaded', function () {
//     const icon = document.querySelector('.icon');
//     const menu = document.querySelector('.links ul');

//     if (!icon || !menu) {
//         console.error('Error: .icon or .links ul not found');
//         return;
//     }

//     icon.addEventListener('click', function () {
//         menu.classList.toggle('active');
//     });
// });
