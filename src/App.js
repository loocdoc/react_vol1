import { User } from "./components/User";
import { currentUser1 } from "./helpers/user";

import './App.css';

function App() {
  const testUser = {
    firstName: "Demo firstname",
    lastName: "Demo lastname"
  };

  return (
    <div className="container">
      <header className="box">
        <User user={currentUser1} title="User Component title" bio />
        <User />
      </header>
    </div>
  );
}

export default App;


