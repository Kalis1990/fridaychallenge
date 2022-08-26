import "./styles.css";

function getRandomColor() {
    let letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }
    
function Animal({gyvunas}) {
    return (
        <div className="gyvunai">
        <figure key={gyvunas.id}>
        <img src={gyvunas.img}
              alt={gyvunas.animal + "-animal"} />
          <figcaption style={{background: getRandomColor()}}>{" Hello" + gyvunas.animal}</figcaption>
      </figure>
      </div>)
  }
  
  export default Animal;