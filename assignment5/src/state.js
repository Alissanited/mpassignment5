import { useState, useEffect} from 'react'
const [count, setCount] = useState(0)

useEffect(() => {
    if(count === 100) {
    setTimeout(() => window.open(), 50);
    setTimeout(() => setCount(0), 100);
    }
}, [count])

return (
    <div className="spin">
        <div style={color}>
            {count}
        </div>
        <img src="https://github.com/Alissanited/mpassignment5/blob/master/assignment5/ice%20cream.png"
            alt="ice"
            style={rotate}
            onClick={() => {
                setCount(count+1)
            }}/>
    </div>
)

    