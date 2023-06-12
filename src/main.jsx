import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import store from "./store"
import { Flowbite } from "flowbite-react"
import theme from "./theme.js"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Flowbite theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Flowbite>
  </Provider>
)
