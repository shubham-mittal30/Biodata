
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
              <td><b>School:</b> St. Joseph's Academy, Dehradun & Sir Padampat Singhania School, Kota, Rajasthan<br /><b>Degree & College:   </b>B.E. Electronics & Communication Engineering (2011-15), Thapar University, Patiala</td>
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
              <th scope="row">HOBBIES & INTERESTS</th>
              <td>Reading, Playing Guitar & Table Tennis, Listening Music, Watching Movies & T.V. Series, Travelling & Running</td>
            </tr>
            <tr>
              <th scope="row">FATHER DETAILS</th>
              <td>Shri Yogesh Kumar Mittal , <b>(M.Com.,LL.M.)</b> <br />
              Working as <b>Joint Commissioner in SGST Deptt. Govt. of Uttarakhand, Kashipur</b></td>
            </tr>
            <tr>
              <th scope="row">MOTHER DETAILS</th>
              <td>Smt. Anjali Mittal , <b>(M.A. Economics)</b> <br />
              HouseMaker (Religious & Pious Lady with high moral values)</td>
            </tr>
            <tr>
              <th scope="row">SISTER DETAILS</th>
              <td>Mrs. Aanchal Agarwal<br />
              Working as Assistant Manager Finance in Conduent Services Noida <br />Married to Mr. Shashank Agarwal <b>(Director of Gray Graph Technologies Noida.)</b></td>
            </tr>
            <tr>
              <th scope="row">GRAND PARENT DETAILS</th>
              <td>Late Shri Satya Prakash Mittal & Late Smt. Jai Mala Devi</td>
            </tr>
            <tr>
              <th scope="row">TAUJI DETAILS</th>
              <td>All three Taujis' are well settled and placed in their respective families.</td>
            </tr>
            <tr>
              <th scope="row">BUAJI DETAILS</th>
              <td>All five Buas' are well settled and placed in their respective families.</td>
            </tr>
            <tr>
              <th scope="row">MAMAJI DETAILS</th>
              <td><b>Shri Vinod Kumar Singhal</b> - Engaged in own business of bricks MFG. & Jewellery in Dehradun<br />
              <b>Shri Pramod Singhal</b> - Engaged in own business of bricks MFG. & Polymer trading in Dehradun (Shivalik Bricks and Gauri Shankar Polymers)<br />
              <b>Shri Atul Singhal</b> - Engaged in own business of C&F & Distribution of Pharma MNC’s & Amaron Batteries for Uttarakhand. Also deal in Real Estates Building and Consultation in Dehradun.</td>
            </tr>
            <tr>
              <th scope="row">MAUSIJI DETAILS</th>
              <td><b>Mrs Nidhi Goyal</b><br/> Married to Mr. Sanjeev Goyal - Engaged in own business of MFG. & export of textiles in Panipat.(Peerless International)</td>
            </tr>
           
            <tr>
              <th scope="row">OTHER DETAILS</th>
              <td>We have our own house, car in Dehradun and
currently residing in Kashipur. Should the above particulars find favour with you, kindly send similar details about the
girl & the family at the following address – <a href = "mailto: mittalshubham30@gmail.com">mittalshubham30@gmail.com</a><br/>
You can also call or whatsapp on <a href="tel:+916397174365">+916397174365</a>&nbsp;&nbsp;<a href="tel:+919639405479">+919639405479</a></td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
