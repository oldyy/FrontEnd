document.getElementById("sendBtn").onclick = () => {
    const fields = {
        pib: {
            el: document.getElementById("pib"),
            regex: /^[А-ЯІЇЄҐ][а-яіїєґ']+\s[А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/,
            error: "ПІБ має бути формату: Прізвище І.П."
        },
        variant: {
            el: document.getElementById("variant"),
            regex: /^\d{2}$/,
            error: "Варіант — лише 2 цифри"
        },
        group: {
            el: document.getElementById("group"),
            regex: /^[A-Za-zА-ЯІЇЄҐ]{2}-\d{2}$/,
            error: "Група має бути формату: ТТ-ЧЧ"
        },
        faculty: {
            el: document.getElementById("faculty"),
            regex: /^[A-Za-zА-ЯІЇЄҐ]{4}$/,
            error: "Факультет — 4 літери"
        },
        birth: {
            el: document.getElementById("birth"),
            regex: /^\d{2}\.\d{2}\.\d{4}$/,
            error: "Дата народження формату: ЧЧ.ЧЧ.ЧЧЧЧ"
        }
    };

    let allCorrect = true;
    let output = "";

    for (let key in fields) {
        const { el, regex } = fields[key];

        if (!regex.test(el.value.trim())) {
            el.classList.add("error");
            allCorrect = false;
        } else {
            el.classList.remove("error");
            output += `${el.previousElementSibling.textContent} ${el.value}\n`;
        }
    }

    if (allCorrect) {
        alert("Введені дані:\n\n" + output);
    } else {
        alert("Є помилки! Перевірте виділені поля.");
    }
};

const table = document.getElementById("grid");
let num = 1;
for (let r = 0; r < 6; r++) {
    const tr = document.createElement("tr");
    for (let c = 0; c < 6; c++) {
        const td = document.createElement("td");
        td.textContent = num;
        td.dataset.row = r;
        td.dataset.col = c;
        tr.appendChild(td);
        num++;
    }
    table.appendChild(tr);
}

const cell21 = [...document.querySelectorAll("#grid td")]
    .find(td => td.textContent === "21");

cell21.addEventListener("mouseenter", () => {
    cell21.style.background = "#" + Math.floor(Math.random() * 16777215).toString(16);
});

document.getElementById("chosenColor").addEventListener("input", e => {
    chosenColor = e.target.value;
});
let chosenColor = "#ff0000";

cell21.addEventListener("click", () => {
    cell21.style.background = chosenColor;
});

cell21.addEventListener("dblclick", () => {
    const col = Number(cell21.dataset.col);
    const row = Number(cell21.dataset.row);

    const allCells = document.querySelectorAll("#grid td");

    for (let r = row; r < 6; r += 2) {
        const cell = [...allCells].find(td =>
            Number(td.dataset.row) === r && Number(td.dataset.col) === col
        );
        cell.style.background = chosenColor;
    }

    for (let r = row; r >= 0; r -= 2) {
        const cell = [...allCells].find(td =>
            Number(td.dataset.row) === r && Number(td.dataset.col) === col
        );
        cell.style.background = chosenColor;
    }
});
