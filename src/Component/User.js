import React from "react";
import { FaUserCircle } from 'react-icons/fa';
import './User.css'

import Login from "./Login";

const User = () => {

    const auth = localStorage.getItem("user")
    const logout = () => {
        localStorage.clear()
        if (!auth) {
            <Login />
        }
    }

    return (
        <div className="main">
            <div className="logoutheader">
                <img src="/img/logo.jpg" width='100vw' />
                <div className="logoutarea">
                    <FaUserCircle style={{ fontSize: "2.1rem" }} /><span className="span" style={{ flexWrap: "wrap" }}>Saurabh Shrivastav<br></br>{JSON.parse(auth).email}</span>
                    <button onClick={logout} className="btn">Logout</button>
                </div>
            </div>

            <div className="inputBoxes">
                <div className="inputContainer">
                    <div className="dropdown">

                        <div className="topsec">
                            <select id="dropdown">
                                <option value="apple">Import</option>
                            </select>
                            {/* <p><LuTextCursorInput/>Input</p> */}

                            <input type="text" placeholder="Chapter" />

                            <input style={{ width: '31vh' }} type="text" placeholder="HS Code" />

                            <input style={{ width: '32vh' }} type="text" placeholder="Indian Port" />

                            <input type="text" placeholder="Foregin Country" />
                        </div>

                        <div className="bottomsec">
                            <input type="text" placeholder="Consignee" />

                            <input type="text" placeholder="Shipper" />

                            <input type="text" placeholder="Product" />

                            <input type="text" placeholder="Time Period Form" />

                            <input type="text" placeholder="Time period till" />
                        </div>

                    </div><br></br>

                    <div className="para">
                        <p>Available downloads:1,900</p>
                    </div>

                    <div className="btns">
                        <button className="search">Search</button>
                        <button className="reset">Reset</button>
                    </div>
                </div>
            </div>

            <div className="total_record">
                <h3>Total Records: 1,98,668</h3>
            </div>

            <div className="row">
                <div className="col-md-2 leftSide">
                    <h2>SUMMARY</h2>
                    <div className="emty"></div>
                    <div className="country">
                        <p>COUNTRY</p>
                    </div>
                    <p>United Arab Emirates(35)</p>
                    <p>India(20)</p>
                    <p>Portugal(80)</p>
                    <p>Australia(67)</p>

                    <div className="country">
                        <p>INDIAN PORT</p>
                    </div>
                    <p>MUMBAI (80)</p>

                    <div className="country">
                        <p>CHAPTER</p>
                    </div>
                    <p>68 (90)</p>

                </div>

                <div className="col-md-10 rightSide">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Chapter</th>
                            <th>HS Code</th>
                            <th>Product Description</th>
                            <th>Indian Importer/Exporter</th>
                            <th>Indian Port</th>
                            <th>Foreign Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-title="Data">01-Apr-2023</td>
                            <td data-title="Chapter">68</td>
                            <td data-title="HS Code">68022190</td>
                            <td data-title="Product Description">HAND CRAFTED MARBLE INLAY BORDER MODEL</td>
                            <td data-title="Indian Importer/Exporter">ART HOUSETO ORDER</td>
                            <td data-title="Indian Port">Agra</td>
                            <td data-title="Foreign Country">United Arab Emirates</td>
                        </tr>
                        <tr>
                            <td data-title="Data">01-Apr-2023</td>
                            <td data-title="Chapter">68</td>
                            <td data-title="HS Code">68022190</td>
                            <td data-title="Product Description">HAND CRAFTED MARBLE INLAY BORDER MODEL</td>
                            <td data-title="Indian Importer/Exporter">ART HOUSETO ORDER</td>
                            <td data-title="Indian Port">Agra</td>
                            <td data-title="Foreign Country">United Arab Emirates</td>
                        </tr>
                        <tr>
                            <td data-title="Data">01-Apr-2023</td>
                            <td data-title="Chapter">68</td>
                            <td data-title="HS Code">68022190</td>
                            <td data-title="Product Description">HAND CRAFTED MARBLE INLAY BORDER MODEL</td>
                            <td data-title="Indian Importer/Exporter">ART HOUSETO ORDER</td>
                            <td data-title="Indian Port">Agra</td>
                            <td data-title="Foreign Country">United Arab Emirates</td>
                        </tr>
                        <tr>
                            <td data-title="Data">01-Apr-2023</td>
                            <td data-title="Chapter">68</td>
                            <td data-title="HS Code">68022190</td>
                            <td data-title="Product Description">HAND CRAFTED MARBLE INLAY BORDER MODEL</td>
                            <td data-title="Indian Importer/Exporter">ART HOUSETO ORDER</td>
                            <td data-title="Indian Port">Agra</td>
                            <td data-title="Foreign Country">United Arab Emirates</td>
                        </tr>
                        <tr>
                            <td data-title="Data">01-Apr-2023</td>
                            <td data-title="Chapter">68</td>
                            <td data-title="HS Code">68022190</td>
                            <td data-title="Product Description">HAND CRAFTED MARBLE INLAY BORDER MODEL</td>
                            <td data-title="Indian Importer/Exporter">ART HOUSETO ORDER</td>
                            <td data-title="Indian Port">Agra</td>
                            <td data-title="Foreign Country">United Arab Emirates</td>
                        </tr>
                        <tr>
                            <td data-title="Data">01-Apr-2023</td>
                            <td data-title="Chapter">68</td>
                            <td data-title="HS Code">68022190</td>
                            <td data-title="Product Description">HAND CRAFTED MARBLE INLAY BORDER MODEL</td>
                            <td data-title="Indian Importer/Exporter">ART HOUSETO ORDER</td>
                            <td data-title="Indian Port">Agra</td>
                            <td data-title="Foreign Country">United Arab Emirates</td>
                        </tr>
                        <tr>
                            <td data-title="Data">01-Apr-2023</td>
                            <td data-title="Chapter">68</td>
                            <td data-title="HS Code">68022190</td>
                            <td data-title="Product Description">HAND CRAFTED MARBLE INLAY BORDER MODEL</td>
                            <td data-title="Indian Importer/Exporter">ART HOUSETO ORDER</td>
                            <td data-title="Indian Port">Agra</td>
                            <td data-title="Foreign Country">United Arab Emirates</td>
                        </tr>
                        <tr>
                            <td data-title="Data">01-Apr-2023</td>
                            <td data-title="Chapter">68</td>
                            <td data-title="HS Code">68022190</td>
                            <td data-title="Product Description">HAND CRAFTED MARBLE INLAY BORDER MODEL</td>
                            <td data-title="Indian Importer/Exporter">ART HOUSETO ORDER</td>
                            <td data-title="Indian Port">Agra</td>
                            <td data-title="Foreign Country">United Arab Emirates</td>
                        </tr>
                        <tr>
                            <td data-title="Data">01-Apr-2023</td>
                            <td data-title="Chapter">68</td>
                            <td data-title="HS Code">68022190</td>
                            <td data-title="Product Description">HAND CRAFTED MARBLE INLAY BORDER MODEL</td>
                            <td data-title="Indian Importer/Exporter">ART HOUSETO ORDER</td>
                            <td data-title="Indian Port">Agra</td>
                            <td data-title="Foreign Country">United Arab Emirates</td>
                        </tr>
                        <tr>
                            <td data-title="Data">01-Apr-2023</td>
                            <td data-title="Chapter">68</td>
                            <td data-title="HS Code">68022190</td>
                            <td data-title="Product Description">HAND CRAFTED MARBLE INLAY BORDER MODEL</td>
                            <td data-title="Indian Importer/Exporter">ART HOUSETO ORDER</td>
                            <td data-title="Indian Port">Agra</td>
                            <td data-title="Foreign Country">United Arab Emirates</td>
                        </tr>
                        <tr>
                            <td data-title="Data">01-Apr-2023</td>
                            <td data-title="Chapter">68</td>
                            <td data-title="HS Code">68022190</td>
                            <td data-title="Product Description">HAND CRAFTED MARBLE INLAY BORDER MODEL</td>
                            <td data-title="Indian Importer/Exporter">ART HOUSETO ORDER</td>
                            <td data-title="Indian Port">Agra</td>
                            <td data-title="Foreign Country">United Arab Emirates</td>
                        </tr>
                        <tr>
                            <td data-title="Data">01-Apr-2023</td>
                            <td data-title="Chapter">68</td>
                            <td data-title="HS Code">68022190</td>
                            <td data-title="Product Description">HAND CRAFTED MARBLE INLAY BORDER MODEL</td>
                            <td data-title="Indian Importer/Exporter">ART HOUSETO ORDER</td>
                            <td data-title="Indian Port">Agra</td>
                            <td data-title="Foreign Country">United Arab Emirates</td>
                        </tr>
                        <tr>
                            <td data-title="Data">01-Apr-2023</td>
                            <td data-title="Chapter">68</td>
                            <td data-title="HS Code">68022190</td>
                            <td data-title="Product Description">HAND CRAFTED MARBLE INLAY BORDER MODEL</td>
                            <td data-title="Indian Importer/Exporter">ART HOUSETO ORDER</td>
                            <td data-title="Indian Port">Agra</td>
                            <td data-title="Foreign Country">United Arab Emirates</td>
                        </tr>
                        <tr>
                            <td data-title="Data">01-Apr-2023</td>
                            <td data-title="Chapter">68</td>
                            <td data-title="HS Code">68022190</td>
                            <td data-title="Product Description">HAND CRAFTED MARBLE INLAY BORDER MODEL</td>
                            <td data-title="Indian Importer/Exporter">ART HOUSETO ORDER</td>
                            <td data-title="Indian Port">Agra</td>
                            <td data-title="Foreign Country">United Arab Emirates</td>
                        </tr>
                        <tr>
                            <td data-title="Data">01-Apr-2023</td>
                            <td data-title="Chapter">68</td>
                            <td data-title="HS Code">68022190</td>
                            <td data-title="Product Description">HAND CRAFTED MARBLE INLAY BORDER MODEL</td>
                            <td data-title="Indian Importer/Exporter">ART HOUSETO ORDER</td>
                            <td data-title="Indian Port">Agra</td>
                            <td data-title="Foreign Country">United Arab Emirates</td>
                        </tr>
                    </tbody>
                </div>
            </div>
        </div>
    )
}
export default User;