import React from "react";
import './LaptopTable.css';
import './Laptops.css';

const data = [
  {
      Specifications: "Product",
      L1: "2020 Apple MacBook Air Laptop: Apple M1 chip",
      L2: "HP Pavilion 14, Intel 11th Gen i5 16GB RAM/512GB SSD 14 inch(35.6 cm) Laptop",
      L3: "Lenovo IdeaPad Slim 5 11th Gen Intel Core i5 15.6\"(39.62cm) FHD IPS Thin & Light Laptop",
      L4: "Dell Inspiron 5518 Intel Ci5-11300H 15.6 inches FHD AG 250nits Display Laptop ",
      L5: "HP Envy x360 AMD Ryzen 5 4500U 13.3 inches Convertible Touchscreen FHD Laptop",
      L6: "ASUS VivoBook 14 (2021), Intel Core i5-1135G7 11th Gen, 14-Inch (35.56 cms) FHD Thin and Light Laptop"
  },
  {
      Specifications: "BRAND",
      L1: "APPLE",
      L2: "HP",
      L3: "LENOVO",
      L4: "DELL",
      L5: " HP",
      L6: "ASUS"
  },
  {
      Specifications: "MODEL",
      L1: "MacBook Air ",
      L2: "PAVILION 14-dv1001TU",
      L3: "IDEAPAD SLIM 5",
      L4: "Inspiron 5518",
      L5: "Envy x360 13-ay0045AU,Comes with camera shutter and Microphone mute button",
      L6: "VivoBook 14"
  },
  {
      Specifications: "CPU",
      L1: "Apple M1 chip(8-core CPU with 4 performance cores and 4 efficiency cores, 16-core Neural Engine)",
      L2: "Intel i5(4 cores, 8 threads)",
      L3: "Intel Core i5 ",
      L4: "Intel Ci5",
      L5: "AMD Ryzen 5 4500U(8 MB L3 cache, 6 cores)",
      L6: "Intel Core i5 (4 cores, 8 Threads, 8MB Cache)"
  },
  {
      Specifications: "Backlite Keyboard",
      L1: "Yes",
      L2: "Yes",
      L3: "Yes",
      L4: "Yes",
      L5: "Yes",
      L6: "No"
  },
  {
      Specifications: "GPU",
      L1: "Integrated Apple 7-core GPU",
      L2: "Integrated Intel Iris® Xe Graphics",
      L3: "Integrated Intel Iris® Xe Graphics",
      L4: "Integrated Graphics Card",
      L5: "Integrated AMD Radeon Graphics",
      L6: "Integrated Intel Iris® Xe Graphics"
  },
  {
      Specifications: "Ports",
      L1: "USB Ports(2),C-type(2)",
      L2: "USB 3.0 Ports(2), HDMI Ports(1),C-type(1)",
      L3: "USB Ports(3), HDMI Ports(1)",
      L4: "HDMI 1.4b (1), USB 3.2 Gen 2x2 Type-C (DP/PowerDelivery) – i3/i5(1), USB 3.2 Gen 1 Type-A(2), SD card reader(1)",
      L5: "SuperSpeed USB Type-C (10Gbps)(1),Display Port 1.4(1), SuperSpeed USB Type-A (5Gbps)(2),microSD card reader(1)",
      L6: " HDMI 1.4(1), USB 3.2 Gen 1 Type-A(1),USB 3.2 Gen 1 Type-C(1),USB 2.0 Type-A(2)"
  },
  {
      Specifications: "DISPLAY SIZE",
      L1: "13.3-inch/33.74 cm",
      L2: "14 inch (35.6 cm)",
      L3: "15.6 inch (39.62 cm)",
      L4: "15.6 inch (39.62 cm)",
      L5: "13.3 inches Touchscreen,Convertible2 in1 ",
      L6: "14-inch (35.56 cms)"
  },
  {
      Specifications: "WEIGHT",
      L1: "2.08 kg",
      L2: "1.41 kg",
      L3: "1.66Kg",
      L4: "1.63 kg",
      L5: "1.32 kg",
      L6: "1.6 kg"
  },
  {
      Specifications: "FINGERPRINT READER",
      L1: "Yes",
      L2: "Yes",
      L3: "Yes",
      L4: "Yes",
      L5: "yes",
      L6: "Yes"
  },
  {
      Specifications: "PROCESSOR SPEED",
      L1: "1.8GHz(Base) - Turbo Boost up to 2.9GHz",
      L2: "4.5 GHz",
      L3: " 2.4 GHz (Base) - 4.2 GHz (Max)",
      L4: "4.4 GHz",
      L5: " GHz (Base) - 4.0 GHz (Max) ",
      L6: "2.4 GHz (Base) - 4.2 GHz (Max)"
  },
  {
      Specifications: "RAM",
      L1: "8 GB",
      L2: "16 GB",
      L3: "16 GB ",
      L4: "16 GB",
      L5: "8GB /16GB",
      L6: "8 GB"
  },
  {
      Specifications: "SSD",
      L1: "512 GB",
      L2: "512 GB",
      L3: "512 GB",
      L4: "512 GB",
      L5: "512 SSD",
      L6: "1TB HDD /256 GB SSD"
  },
  {
      Specifications: "CHARGER WATTAGE",
      L1: "30 watts (USB-C)",
      L2: "43 watts",
      L3: "57 watts",
      L4: "54 watts",
      L5: "65 watts",
      L6: "37 watts"
  },
  {
      Specifications: "COLOUR",
      L1: "SPACE GREY,GOLD,SILVER",
      L2: "Natural Silver",
      L3: "Graphite Grey",
      L4: "Silver",
      L5: "Night Fall Black",
      L6: "Transparent Silver"
  },
  {
      Specifications: "AVERAGE BATTERY LIFE(Depends on conditions of usage)",
      L1: "18 hours",
      L2: "5 - 6 hours",
      L3: "7 - 8 hours",
      L4: "6 hours",
      L5: "16 hours",
      L6: "6 hours"
  },
  {
      Specifications: "CUSTOMER RATING",
      L1: "4.5/5",
      L2: "4.4/5",
      L3: "4.3/5",
      L4: "4.4/5",
      L5: "4.4/5",
      L6: "4.2/5"
  },
  {
      Specifications: "SCREEN QUALITY",
      L1: "4.5/5",
      L2: "4.1/5",
      L3: "3.9/5",
      L4: "4.8/5",
      L5: "4.6/5",
      L6: "4.5/5"
  },
  {
      Specifications: "BATTERY LIFE",
      L1: "5.0/5",
      L2: "3.8/5",
      L3: "4.0/5",
      L4: "3.9/5",
      L5: "4.3/5",
      L6: "3.9/5"
  }
]
    
  function LaptopsTable() {
    return (
      
    <div > 
        
      <div className="title_lap">
              <h1>Best Laptops on amazon</h1>
      </div>
      <div className="table_lap">
         
        <table >
          <tr>
            <th>Specifications</th>
            <th>
            <iframe title="lt" style={{width: '120px', height: '240px'}} marginWidth={0} marginHeight={0} scrolling="no" frameBorder={0} src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=sahara059-21&language=en_IN&marketplace=amazon&region=IN&placement=B08N6DXX1V&asins=B08N6DXX1V&linkId=0a732fd952ba9629ffc8cb53f402a191&show_border=true&link_opens_in_new_window=true" />
            </th>
            <th>
            <iframe title="lt" style={{width: '120px', height: '240px'}} marginWidth={0} marginHeight={0} scrolling="no" frameBorder={0} src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=sahara059-21&language=en_IN&marketplace=amazon&region=IN&placement=B09MH5MLYP&asins=B09MH5MLYP&linkId=526dd616fe6e1066f263f6a82cfc3b63&show_border=true&link_opens_in_new_window=true" />
            </th>
            <th>
            <iframe title="lt" style={{width: '120px', height: '240px'}} marginWidth={0} marginHeight={0} scrolling="no" frameBorder={0} src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=sahara059-21&language=en_IN&marketplace=amazon&region=IN&placement=B09M423NVT&asins=B09M423NVT&linkId=cfac99da336142715af33d23ee9c1d68&show_border=true&link_opens_in_new_window=true" />
            </th>
            <th>
            <iframe title="lt" style={{width: '120px', height: '240px'}} marginWidth={0} marginHeight={0} scrolling="no" frameBorder={0} src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=sahara059-21&language=en_IN&marketplace=amazon&region=IN&placement=B097C3B9DZ&asins=B097C3B9DZ&linkId=87a6eb681b0294737798390edb943f61&show_border=true&link_opens_in_new_window=true" />
            </th>
            <th>
            <iframe title="lt" style={{width: '120px', height: '240px'}} marginWidth={0} marginHeight={0} scrolling="no" frameBorder={0} src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=sahara059-21&language=en_IN&marketplace=amazon&region=IN&placement=B08D5F4B6M&asins=B08D5F4B6M&linkId=9fa0bf3d65995647ef6b4cbe9b71b3cf&show_border=true&link_opens_in_new_window=true" />
            </th>
            <th>
            <iframe title="lt" style={{width: '120px', height: '240px'}} marginWidth={0} marginHeight={0} scrolling="no" frameBorder={0} src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=sahara059-21&language=en_IN&marketplace=amazon&region=IN&placement=B09BF65Z1V&asins=B09BF65Z1V&linkId=37fde8c27248aa73860a9750e9d7f2c7&show_border=true&link_opens_in_new_window=true" />
            </th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.Specifications}</td>
                <td>{val.L1}</td>
                <td>{val.L2}</td>
                <td>{val.L3}</td>
                <td>{val.L4}</td>
                <td>{val.L5}</td>
                <td>{val.L6}</td>
              </tr>
            )
          })}
        </table>
      </div>
    </div>  
    );
  }
    
  export default LaptopsTable;