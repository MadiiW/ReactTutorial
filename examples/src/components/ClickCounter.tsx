import { useState } from 'react';

// export default function ClickCounter() {
//     const [count, setCount] = useState(0);
  
//     return (
//       <div>
//         <p>Du hast {count} mal geklickt.</p>
//         <button onClick={() => setCount(count + 1)}>
//           Klick mich!
//         </button>
//       </div>
//     );
// }


export default function ClickCounter() {
    let count = 0;
  
    function handleClick() {
      count = count + 1;
      console.log(count);
    }
  
    return (
      <div>
        <p>Du hast {count} mal geklickt.</p>
        <button onClick={handleClick}>
          Klick mich!
        </button>
      </div>
    );
  }
  