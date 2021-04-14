
export default function Icecream(props) {
    return(
        <div class="Icecream">
            <div class="item">
                <h1>(props.Name)</h1>
            </div>
            <div class="item">
                <h2>Flavor: {props.IcecreamFlavor}</h2>
            </div>
            <div>
                <h2>Description: {props.Desciption}</h2>
            </div>
        </div>
    )
}