import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
		 <footer className="container footer">
        <hr />
        <div className="container bottom_border">
          <div className="row">
            <div className="col-lg-3 col-sm-6 ">
              <h5 className="headin5_amrc col_white_amrc pt2">Kontakt</h5>
              <p className="mb10">Lorem Ipsum is simply dummy text</p>
              <p> ul. Jakastam Miasto 11-111 </p>
              <p> +48 505606707</p>
              <p> adres@gmail.com</p>
            </div>
            <div className="col-lg-3 col-sm-6 ">
              <h5 className="headin5_amrc col_white_amrc pt2">Szybkie linki</h5>
              <ul className="footer_ul_amrc">
                <li><a href="#">Centrum Pomocy</a></li>
                <li><a href="#">Regulamin</a></li>
                <li><a href="#">Aktualności</a></li>
                <li><a href="#">Polityka prywatności</a></li>
                <li><a href="#">Dla firm</a></li>
                <li><a href="#">Kariera</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h5 className="headin5_amrc col_white_amrc pt2">Szybkie linki</h5>
              <ul className="footer_ul_amrc">
                <li><a href="#">Centrum Pomocy</a></li>
                <li><a href="#">Regulamin</a></li>
                <li><a href="#">Aktualności</a></li>
                <li><a href="#">Polityka prywatności</a></li>
                <li><a href="#">Dla firm</a></li>
                <li><a href="#">Kariera</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-6 ">
              <h5 className="headin5_amrc col_white_amrc pt2">Media</h5>
              <ul className="footer_ul_amrc">
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Youtube</a></li>
                <li><a href="utility/addproduct.html">Dodaj</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
	);
  }
}

export default Footer;