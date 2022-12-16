import React from 'react'
import { Provider } from 'react-redux'
import Footer from './component/Footer'
import Header from './component/Header'
import Nav from './component/Nav'
import TodoLists from './component/TodoLists'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div>
        <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
          {/* <!-- navbar --> */}
          <Nav />
          <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
            {/* <!-- header --> */}
            <Header />
            <hr className="mt-4" />

            {/* <!-- todo list --> */}
            <TodoLists />

            <hr className="mt-4" />

            {/* <!-- footer --> */}
            <Footer />
          </div>
        </div>
      </div>
    </Provider>
  )
}

export default App
