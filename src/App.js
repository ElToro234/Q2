import logo from './logo.svg';
import './App.css';
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";


// function MyButton() {
//   return (
//     <button>
//       Flower
//     </button>

//   );
// }

function App() {
  return (
    
    <div className="App">
      <div>
      <h1>Alexander Liu, ID: 2230493</h1>
        <nav>
            <Link to="/page1" component={Page1}>Flowers</Link>
            <Link to="/page2" component={Page2}>Trees</Link>
            <Link to="/page3" component={Page3}>Cars</Link>
        </nav>
      </div>
      <button>
        Click me!
      </button>
     
    </div>
    
  );
}

export default App;
