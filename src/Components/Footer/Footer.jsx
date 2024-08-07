import './Footer.css'
const Footer = () => {
  const backToTop = () =>{
    window.scrollTo(0,0)
  }
  return (
    <div className='footer'>
        <div className="back-to-top" onClick={backToTop}>
            <span>Back to top</span>
        </div>
    </div>
  )
}


export default Footer