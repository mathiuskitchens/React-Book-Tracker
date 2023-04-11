import "./App.css";
import Layout from "./Components/Layout";
import AddBook from "./Components/AddBook"

function App() {
  return <div>
    <Layout>
      <h1>My Incredible Library</h1>
      <hr class="tron-line"></hr>
      <AddBook />
      </Layout>
  </div>;
}

export default App;
