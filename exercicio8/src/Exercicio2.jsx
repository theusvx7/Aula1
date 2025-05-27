export default function Exercicio2 ({temp})
{
    let resultado = temp-32 * 5/9;
    return(
        <div>
            <p>O valor de {temp} °F em °C é {resultado} °C </p>
        </div>
    );
}