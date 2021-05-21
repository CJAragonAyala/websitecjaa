import React from 'react';

const Boton = () => {
    const [sms, actualizaSMS] = React.useState("Primer paso");

    const Suma = (a, b) => a + b;

    function Click() {
        actualizaSMS("Segundo paso")
    }
    
    return(
        <div>
            <h1>
                {sms}
            </h1>
            <h2>
                {Suma(2,3)}
            </h2>
            <p>
                Este es el botón (Abajo)  
            </p>
            <button onClick={Click}>
                Ve al segundo paso
            </button>
        </div>
    )
}

export default Boton
