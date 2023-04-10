import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./routes/Home"
import Layout from "./components/Layout"




export default function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes path="/" element={<Layout />}>
          <Route index element={<Home />} />
          



        </Routes>
      </BrowserRouter>

    </div>
  )
};


