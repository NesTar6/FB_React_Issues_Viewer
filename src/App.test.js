import {BrowserRouter } from "react-router-dom";
import {cleanup, fireEvent, render, screen, queryByTestId, act} from '@testing-library/react';
import App from './App';
import Pagination from './components/Pagination/Pagination'

import Enzyme, { shallow, mount } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

test('renders home page', () => {
  render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  );
  const linkElement = screen.getByText(/React Github Issues/i);
  expect(linkElement).toBeInTheDocument();
});


describe('Pagination', () => {

  it("Should loads with initial state of 0", () => {
    const wrapper = mount(
    <BrowserRouter>
      <App />
    </BrowserRouter>);
    const page = wrapper.find('p.page').text();
    expect(page).toEqual("1");
  });

  it("should increment state on next click", () => {
    let page = 1
    const nextButton = <button id="next" className="next" disabled={false} onClick={()=>++page}>Next</button>
    const wrapper = mount(<Pagination nextButton={nextButton} page={page} prevDisabled={false} setPage={()=>{}} />);

    act(()=> {
      wrapper.find("button.next").simulate("click")
    });
    
    const newWrapper = mount(<Pagination nextButton={nextButton} page={page} prevDisabled={false} setPage={()=>{}} />);

    const pageNumber = newWrapper.find('p.page').text()

    expect(pageNumber).toBe('2');

  });
 })