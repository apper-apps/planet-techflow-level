import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Layout from "@/components/organisms/Layout"
import HomePage from "@/components/pages/HomePage"
import AboutUsPage from "@/components/pages/AboutUsPage"
import ServicesPage from "@/components/pages/ServicesPage"
import TestimonialsPage from "@/components/pages/TestimonialsPage"
import ClientPortalPage from "@/components/pages/ClientPortalPage"
import ContactPage from "@/components/pages/ContactPage"

function App() {
  return (
    <Router>
      <div className="App font-body">
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/client-portal" element={<ClientPortalPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Layout>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          className="z-[9999]"
        />
      </div>
    </Router>
  )
}

export default App