import "./App.css";
export default function App() {
  // On crée un function GetValue
  // On lui passe event en paramétre
  function GetValue(event) {
    // Affiche la valeur de l'input
    console.log(event.target.value);
  }

  var myName = "dark";

  // Variable objet style CSS
  const style = {
    backgroundColor: "red",
    fontSize: "20px",
    color: "black",
    fontWeight: "bolder",
    textTransform: "uppercase",
  };

  //  Liste de produits
  const products = ["coca", "Hamoud", "Sprite", "Fanta", "Eau"];

  return (
    <div>
      {/* Récupérer la valeur de l'input si il ya un changement */}
      {/* Si il y'a changement de valeur, éxécute la function GetValue */}
      {/* On passe l'objet de l'evenement : contient les informations sur l'evenement */}
      <input onChange={(event) => GetValue(event)} type="text" id="name" />

      {/* Le onclick devient onClick dans JSX */}
      <button onClick={() => console.log("hello")}>Click me!</button>

      {/* Les class deviennents className et on peux leur ajouter une variable */}
      <div className={"mytext " + myName}>Hello my name is: {myName}</div>

      {/* le style devient style={{}} en ajoutant le camelCase pour les propriétés CSS. Et on peux lui ajouter une variable */}
      <h1 style={style}>Hello world!</h1>

      <ol>
        {/* On affiche la liste des produits dans le HTML avec la méthode 'map' */}
        {products.map((produit, index) => (
          <li key={index}>
            {index} - {produit}
          </li>
        ))}
      </ol>
    </div>
  );
}
