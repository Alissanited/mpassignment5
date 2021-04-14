import './Projectcard.css'

export default function Projectcard(props) {
    return(
        <div className="card">
            <h1>{props.title}</h1>
        </div>
    )
}