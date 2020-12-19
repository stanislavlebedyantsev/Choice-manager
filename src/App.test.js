import ReactDOM from 'react-dom'
import ChoiceManagerApp from "./App";
import React from "react";

test('renders learn react link', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ChoiceManagerApp />,div);
  ReactDOM.unmountComponentAtNode(div);
});
