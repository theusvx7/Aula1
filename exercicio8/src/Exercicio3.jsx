export default function Exercicio3({valor, taxa, tempo})
{
    let vp = valor+valor*(taxa*taxa/100)*tempo;
    return(
        <div>
            <p>Valor da parcela = {vp} </p>
            <p>Valor total = {valor} </p>
            <p>Taxa = {taxa} </p>
            <p>Dias de atraso = {tempo}</p>
        </div>
    )
}