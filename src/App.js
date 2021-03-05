
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import pic from './profilePic.jpg';
import pic2 from './profilePic2.jpg';
import pic3 from './profilePic3.jpg';
import {
  faFacebook,
  faLinkedin,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div style={{width:"100%",height:"100%"}}>

      <div style={{ display: "inline-block", verticalAlign: "top", width: "21%" }}>
        <img src={pic} width="100%" alt="profilePic" />
        <img src={pic2} width="100%" alt="profilePic" />
        <img src={pic3} width="100%" alt="profilePic" />
      </div>

      <div className="App" style={{ display: "inline-block", width: "79%" }}>

        <table class="table table-bordered table-hover" >
          <thead>
            <tr>

              <th scope="col">NAME</th>
              <td>Shubham Mittal</td>

            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">HEIGHT</th>
              <td>5'6"</td>

            </tr>
            <tr>
              <th scope="row">COMPLEXION</th>
              <td>Fair</td>

            </tr>
            <tr>
              <th scope="row">BIRTH DETAILS</th>
              <td>27 (30<sup>th</sup> Aug 1993) , 12:45 P.M. DEHRADUN ,UTTARAKHAND</td>
            </tr>
            <tr>
              <th scope="row">RELIGION , CASTE & GOTRA</th>
              <td>Hindu , BISA AGGARWAL & MITTAL</td>
            </tr>
            <tr>
              <th scope="row">EDUCATION</th>
              <td><b>School:</b> St. Joseph's Academy Dehradun<br /><b>Degree & College:   </b>B.E. Electronics & Communication Engineering (2011-15), Thapar University, Patiala</td>
            </tr>
            <tr>
              <th scope="row">EMPLOYMENT DETAILS</th>
              <td>Presently Working as <b>Lead Software Engineer</b> @ Airtel Xlabs <b>(Bharti Airtel Limited) Gurgaon</b><br />
              Prior have worked as Technical Lead @ <b>Newgen Software Technologies Ltd Noida</b> for 3.8 years &<br />
              As Assistant System Engineer @ <b>Tata Consultancy Services Ltd Gurgaon</b> for 1.8 years</td>
            </tr>
            <tr>
              <th scope="row">ANNUAL INCOME</th>
              <td>23.0 L.P.A.</td>
            </tr>
            <tr>
              <th scope="row">HOBBIES/INTERESTS</th>
              <td>Reading, Playing Guitar & Table Tennis, Listening Music, Watching Movies & T.V. Series, Travelling & Running</td>
            </tr>
            <tr>
              <th scope="row">FATHER DETAILS</th>
              <td>Shri Yogesh Kumar Mittal , <b>(M.Com., L.L.B., L.L.M.)</b> <br />
              Working as <b>Joint Commissioner in SGST Deptt. Govt. of Uttarakhand, Kashipur</b></td>
            </tr>
            <tr>
              <th scope="row">MOTHER DETAILS</th>
              <td>Smt. Anjali Mittal , <b>(M.A. Economics)</b> <br />
              HouseMaker (Religious & Pious Lady with high moral values)</td>
            </tr>
            <tr>
              <th scope="row">SISTER DETAILS</th>
              <td>Mrs. Aanchal Agarwal , <b>(M.B.A in Information Systems Management, U.P.E.S, Dehradun)</b> <br />
              Working as Assistant Manager Finance in Conduent Services Noida <br />Married to Mr. Shashank Agarwal <b>(Director of Gray Graph Technologies Noida.)</b></td>
            </tr>
            <tr>
              <th scope="row">GRAND PARENT DETAILS</th>
              <td>Late Shri Satya Prakash Mittal & Late Smt. Jai Mala Devi</td>
            </tr>
            <tr>
              <th scope="row">TAUJI DETAILS</th>
              <td><b>Dr. Umesh Kumar Mittal</b> -  Residing in Saharanpur, U.P.<br />
              <b>Shri Rakesh Kumar Mittal</b> - Retired from Senior DGM from EIL and currently residing in Mumbai<br />
              <b>Dr. Rajesh Kumar Mittal</b> - Retired from DGM in ONGC and currently residing in Gurgaon</td>
            </tr>
            <tr>
              <th scope="row">MAMAJI DETAILS</th>
              <td><b>Shri Vinod Kumar Singhal</b> - Engaged in own business of bricks MFG. & Jewellery in Dehradun<br />
              <b>Shri Pramod Singhal</b> - Engaged in own business of bricks MFG. & Polymer trading in Dehradun (Shivalik Bricks and Gauri Shankar Polymers)<br />
              <b>Shri Atul Singhal</b> - Engaged in own business of C&F & Distribution of Pharma MNC’s & Amaron Batteries for Uttarakhand. Also deal in Real Estates Building and Consultation in Dehradun.</td>
            </tr>
            <tr>
              <th scope="row">MAUSAJI DETAILS</th>
              <td><b>Shri Sanjeev Goyal</b> - Engaged in own business of MFG. & export of textiles in Panipat. (Peerless International)</td>
            </tr>
            <tr>
              <th scope="row">BUAJI DETAILS</th>
              <td>All five Buas' are well settled and placed in their respective families.</td>
            </tr>
            <tr>
              <th scope="row">OTHER DETAILS</th>
              <td>We have our own house, car in Dehradun and
currently residing in Kashipur. Should the above particulars find favour with you, kindly send similar details about the
girl & the family at the following address – <a href = "mailto: mittalshubham30@gmail.com">mittalshubham30@gmail.com</a></td>
            </tr>
            <tr>
              <th scope="row">SOCIAL FOLLOW </th>
              <td>
                <div class="social-container">

                  <a href="https://www.facebook.com/shubham.mittal.988/"
                    className="facebook social">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                  </a>
                  <a href="https://www.instagram.com/shubh_on_strings/"
                    className="instagram social">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                  <a href="https://www.linkedin.com/in/shubham-mittal-97883b34/"
                    className="linkedIn social">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
