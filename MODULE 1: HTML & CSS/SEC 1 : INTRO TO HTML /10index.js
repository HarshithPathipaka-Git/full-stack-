// arguments
// space,scary,military,romantic,cowboy,fantasy,superhero
// watermelon,tomato,banana,orange,avocado,blueberry
// light, dark
// sharpe , soft , round

const pageButton = document.querySelector(".b10");

function favouriteMovieGenre(genre) {
  console.log("Favorite movie genre:", genre);
}

function favouritefruit(choice) {
  const body = document.body;
  const colors = {
    banana: "yellow",
    watermelon: "green",
    tomato: "tomato",
    orange: "orange",
    avocado: "darkseagreen",
    blueberry: "blue",
  };

  body.style.background = colors[choice] || "white";
}

function favouriteMode(mode) {
  if (mode === "dark") {
    document.body.style.color = "#fff";
  } else {
    document.body.style.color = "#000";
  }
}

function favouriteEdgestlye(style) {
  if (!pageButton) return;

  if (style === "sharp") {
    pageButton.style.borderRadius = "0";
  } else if (style === "soft") {
    pageButton.style.borderRadius = "12px";
  } else if (style === "round") {
    pageButton.style.borderRadius = "25px";
  }
}

favouriteMovieGenre("space");
favouritefruit("blueberry");
favouriteMode("dark");
favouriteEdgestlye("round");
