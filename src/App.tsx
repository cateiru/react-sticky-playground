import { useEffect, useState } from "react";

function App() {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplay(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="sticky">Sticky Element</div>
      {display && <div className="temporary">Temporary Element</div>}
    </div>
  );
}

export default App;
