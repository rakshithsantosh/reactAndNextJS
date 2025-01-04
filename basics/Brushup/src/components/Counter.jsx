import { useEffect } from "react";

function Counter({ count }) {
  useEffect(() => {
    document.title = `You clicked ${count} times`; //use effect hook is used to interact with apis outside of react and we can specific how many times this has to be rerendered.

    return () => {
      document.title = `React App`; //this will be executed when the component is unmounted and is used for cleanup
    };
  }, []);
  return (
    <div>
      <span>`${count}`</span>
    </div>
  );
}

export default Counter;
