import { useState } from 'react';

export function Counter() {
 const [count, setCount] = useState(0);

 return (
   <div>
     <h1>Count: {count}</h1>
     <button onClick={() => setCount(count + 1)}>Increment</button>
     {count >= 5 && <p>You've clicked a lot!</p>}
   </div>
 );
}
