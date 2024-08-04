import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './ContactUs.css'



function ContactUs() {


  return (
    <>
      
      <h2 className='h2-About'>Reach Us</h2>
      <main>
    <div className="container py-5">
      <div className="row g-5">
        
        <div className="col-xl-6">
          <div className="row row-cols-md-2 g-4">
            <div className="aos-item" data-aos="fade-up" data-aos-delay="200">
              <div className="aos-item__inner">
                <div className="bg-light hvr-shutter-out-horizontal d-block p-3 rounded">
                  <div className="d-flex justify-content-start">
                    <i className="fa-solid fa-envelope h3 pe-2"></i>
                    <span className="h5">Email</span>
                  </div>
                  <span>pramodbhimavad@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="aos-item" data-aos="fade-up" data-aos-delay="400">
              <div className="aos-item__inner">
                <div className="bg-light hvr-shutter-out-horizontal d-block p-3 rounded">
                  <div className="d-flex justify-content-start">
                    <i className="fa-solid fa-phone h3 pe-2"></i>
                    <span className="h5">Phone</span>
                  </div>
                  <span>+90024001502, +9425621502</span>
                </div>
              </div>
            </div>
          </div>
          <div className="aos-item mt-4" data-aos="fade-up" data-aos-delay="600">
            <div className="aos-item__inner">
              <div className="bg-light hvr-shutter-out-horizontal d-block p-3 rounded">
                <div className="d-flex justify-content-start">
                  <i className="fa-solid fa-location-pin h3 pe-2"></i>
                  <span className="h5">Shop location</span>
                </div>
                <span>Berchha Mandi, Shajapur (M.P.)</span>
              </div>
            </div>
          </div>
          <div className="aos-item" data-aos="fade-up" data-aos-delay="800">
            <div className="mt-4 w-100 aos-item__inner rounded">
              <iframe className="hvr-shadow rounded" width="100%" height="345" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.7474708666323!2d76.32907697797481!3d23.288623852192973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39634f4d58a3c355%3A0x62642dc2cfa69d7c!2sKaka%20Krishi%20Sewa%20Kendra!5e0!3m2!1sen!2sin!4v1722774433000!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"><a href="https://www.maps.ie/distance-area-calculator.html">measure acres/hectares on map</a></iframe>
            </div>
          </div>
        </div>

        <div className="col-xl-6">
          <h2 className="pb-4">Leave a message</h2>
          <div className="row g-4">
            <div className="col-6 mb-3">
              <label for="exampleFormControlInput1" id='firstname' className="form-label">Firstname</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name"/>
            </div>
            <div className="col-6 mb-3">
              <label for="exampleFormControlInput1" id='lastname' className="form-label" >Lastname</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="surname"/>
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" id='email' className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" id='phone' className="form-label">Phone</label>
            <input type="tel" className="form-control" id="exampleFormControlInput1" placeholder="+1234567890"/>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" id='country' className="form-label">Country</label>
            <select className="form-select" aria-label="Default select example">
              <option value="1">India</option>
              <option value="2">Non India</option>
            </select>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" id='message'  className="form-label">Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button type="button" className='btn' >Send Message</button>
        </div>
      </div>
    </div>
  </main>

      
   
  
  
     
    </>
  )
}

export default ContactUs
