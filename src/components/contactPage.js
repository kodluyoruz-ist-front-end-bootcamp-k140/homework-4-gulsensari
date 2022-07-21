import React from "react"


export default function ContactPage(){
    return(<>
         <h4>Contact Page</h4> 
 <form>
  <div className="form-group">
    <label className="form-label" >Ad Soyad :</label>
    <input  className="form-control" placeholder="Adınızı ve soyadınızı giriniz."/>
  </div>
  <br/>
  <div class="form-group">
    <label className="form-label" >Email :</label>
    <input  className="form-control"  placeholder="Mail adresinizi giriniz."/>
  </div>
  <br/>
  <div className="form-group">
    <label className="form-label">Konu :</label>
    <input className="form-control" placeholder="Konu"/>
  </div>
  <br/>
  <button type="submit" className="btn btn-success">Submit</button>
</form>
</>
    )
}