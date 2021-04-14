import { useState, useEffect} from 'react'
const [count, setCount] = useState(0)

useEffect(( => {
    if(count === 100) {
    setTimeout(() => window.open(), 50);
    setTimeout(() => setCount(0), 100);
    }
} [count])

return (
    <div className="spin">
        <div style={color}>
            {count}
        </div>
        <img src= 
            onClick={() => {
                setCount(count+1)
            }}/>
    </div>
)

    