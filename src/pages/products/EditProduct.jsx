import React from 'react'
import "./editProduct.css"

import Chart from "../../components/chart/Chart"
import {salesData} from "../../dashboardData"
import { Publish } from "@material-ui/icons";
import { Link } from 'react-router-dom';

export default function EditProduct() {
  return (
    <div className="editProduct">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/addProduct">
          <button className="createProduct">Create</button>
        </Link>
      </div>
      <div className="productDetails">
          <div className="productSalesWidget">
              <Chart data={salesData} dataKey="Sales" title="Sales Performance"/>
          </div>
          <div className="productDetailsWidget">
              <div className="productDetailsAvatar">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/BuzzCan.jpg/200px-BuzzCan.jpg" alt="" className="productDetailsImage" />
                  <span className="productName">Buzz Cola</span>
              </div>
              <div className="productInfo">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">1</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">sales:</span>
                      <span className="productInfoValue">2541</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">active:</span>
                      <span className="productInfoValue">yes</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">in stock:</span>
                      <span className="productInfoValue">yes</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="editProductWidget">
      <h3>Edit Product</h3>
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input type="text" placeholder="Buzz Cola" />
                  <label>In Stock</label>
                  <select name="inStock" id="idStock">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
                  <label>Active</label>
                  <select name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/BuzzCan.jpg/200px-BuzzCan.jpg" alt="" className="productUploadImage" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  )
}
