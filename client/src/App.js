import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <main>
        <Header />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/login" component={Register} />
        <Route path="/" component={Home} />
        <Footer />
      </main>
    </div>
  );
}

export default App;
