import { render, screen } from '@testing-library/react';
import App from './App';
import Page1 from "./Page1";
import Page2 from "./Page2";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});



const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
   <Switch>
    <Route exact path="/page1" component={Page1} />
    <Route path="/page2" component={Page2} />
  </Switch>
  </BrowserRouter>,
  rootElement
);
