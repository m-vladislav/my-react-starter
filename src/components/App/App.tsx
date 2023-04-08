/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import './app.scss';

function App() {
   const [count, setCount] = useState(0);

   const togleCount = (p: number) => {
      setCount(count + p);
   };

   return (
      <div className="counter">
         <div
            className="counter__plus"
            onClick={() => togleCount(1)}
            onKeyDown={() => {}}
            role="button"
            tabIndex={0}
         >
            +
         </div>
         <div className="counter__number">{count}</div>
         <div
            className="counter__minus"
            onClick={() => togleCount(-1)}
            onKeyDown={() => {}}
            role="button"
            tabIndex={0}
         />
      </div>
   );
}

export default App;
