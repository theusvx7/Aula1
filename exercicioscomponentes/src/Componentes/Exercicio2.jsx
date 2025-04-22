export default function Exercicio2 ({altura, peso})
{
    let imc = peso/(altura*altura);
    return (
        <div>
            Uma pessoa com {peso} Kg e {altura} m tem imc de {imc}.
        </div>
    )
}