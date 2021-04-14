import {useState} from 'react'
import Icecream from './order'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div class="page">
      <div class="Icecream">
        <div class="Icecream 1">
          <Icecream
          Flavor="Vanilla"
          Description="When you dig into this pint, you’ll find a rich, creamy Vanilla that’s more vanilla-tasting than any Vanilla you’ve ever tasted."></Icecream>
        </div>
        <div class="Icecream 2">
          <Icecream
          Flavor="Strawberry"
          Description="We introduce sweet summer strawberries to pure cream and other natural ingredients. Because it's brimming with real fruit, the true flavor of our strawberries comes shining through."></Icecream>
        </div>
        <div>
          <Icecream
          Flavor="Chocolate"
          Description="Rich, creamy, and totally indulgent. Made from the finest cocoa and pure, sweet cream, our chocolate ice cream is the ultimate experience."></Icecream>
        </div>
      </div>
    </div>
        
  );
}