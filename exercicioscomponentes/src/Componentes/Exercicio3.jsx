export default function Exercicio3 ({valor, taxa, tempo})
{
    let vp = valor+(valor*(taxa*taxa/100)*tempo);
    return (
        <div>
            O valor da parcela de R${valor} ao total será R${vp}.
            </div>
    )
}