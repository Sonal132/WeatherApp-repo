import React from 'react'

const Footer = () => {
  return (
    <>
    
    <div className='d-flex flex-column min-vh-100  overflow-hidden' >
    <footer className="bg-dark text-light py-4 mt-4  mt-auto">
      <div className="container text-center ">
        <p>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
   </div>
  

    </>
  )
}

export default Footer
