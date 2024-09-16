    function Picture1() {
        return (
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Moon_Pie_Bowl_Head.png"
            alt="Moon Pie With A Bowl On His Head"
            />
            )
    }
    export function Picture2() {
          return (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/22/Apple_computer_cat.jpg"
            alt="Cat playing under a computer"
            />
            )
    }
    
    function Picture3() {
      return (
      <img
      src="https://upload.wikimedia.org/wikipedia/commons/a/af/Nikfatish_Rold_Common.jpg"
      alt="Cat with green eyes and large ears"
      />
      );
    }

    export default function AllThePictures() {
        return (
            <section className="container">
            <h1>Three Cat Pictures.</h1>
                <p> Cat 1</p>
                <Picture1 />
                <p> Cat 2</p>
                <Picture2 />
                <p> Cat 3</p>
                <Picture3 />
            </section>
        );
    }

  