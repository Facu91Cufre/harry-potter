const petition = fetch("https://hp-api.onrender.com/api/characters");

petition
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const $container = document.getElementById("cont-characters");
    const characters = data;

    for (let i = 0; i <= 23; i++) {
      const charName = characters[i].name;
      const species = characters[i].species;
      const gender = characters[i].gender;
      const image = characters[i].image;
      const house = characters[i].house;

      $container.innerHTML += 
      ` <div class="cont-character">
            <img class="character-img" src="${image}" alt="">
            <h3>${charName}</h3>
            <p>Species: ${species}</p>
            <p>Gender: ${gender}</p>
            <p>House: ${house}</p>
        </div>`;
    }
    console.log($container);
  });
