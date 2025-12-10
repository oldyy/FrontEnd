function loadUser() {
    fetch("https://randomuser.me/api")
        .then(response => response.json())
        .then(data => {

            const user = data.results[0];

            const picture = user.picture.large;
            const city = user.location.city;
            const postcode = user.location.postcode;
            const cell = user.cell;
            const name = `${user.name.first} ${user.name.last}`;

            const card = document.getElementById("userCard");

            card.innerHTML = `
                <img src="${picture}" alt="User photo">

                <div class="info"><b>City:</b> ${city}</div>
                <div class="info"><b>Postcode:</b> ${postcode}</div>
                <div class="info"><b>Cell:</b> ${cell}</div>
                <div class="info"><b>Name:</b> ${name}</div>
            `;
        })
        .catch(err => {
            console.error("Помилка:", err);
            document.getElementById("userCard").innerHTML = "<p>Помилка завантаження даних</p>";
        });
}

loadUser();

document.getElementById("nextBtn").addEventListener("click", loadUser);
