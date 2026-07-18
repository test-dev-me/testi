import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Layout from "./layouts/Layout";

function App() {
  return (
    <Layout>
      <Header />
      <main>
        <p>new paragraph</p>
        <div>
          <span>main content</span>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}

export default App;
