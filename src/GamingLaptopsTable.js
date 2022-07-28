import React from "react";
import './LaptopTable.css';
import './Laptops.css';

const data = [
    {name:"Product",L1:"Lenovo Legion Y540 9th Gen IntelCore i5-9300HF 15.6 (39.63cm) FHD IPS Gaming Laptop ",L2:"HP Pavilion Gaming AMD Ryzen 5 5600H 39.6 cm(15.6-inch) FHD Gaming Laptop",L3:"HP Pavilion Gaming 10th Gen Intel Core i5 15.6-inch (39.6 cms) FHD Gaming Laptop",L4:"ASUS TUF Gaming F15 Laptop 15.6 (39.62 cms) FHD 144Hz",L5:"Dell 15 (2021) i5-10200H Gaming Laptop,16Gb RAM, 512Gb SSD"},
    { name: "Brand", L1:"Lenovo",L2:"HP",L3:"HP",L4:"ASUS",L5:"DELL" },
    { name: "Model", L1:"Y540",L2:"PAVILION 15-ec2150AX",L3:"PAVILION 15-dk1514TX",L4:"TUF F15",L5:"G15 5510" },
    { name: "CPU", L1: "Intel-i5",L2:"AMD Ryzen 5 5600H",L3:" IntelCore-i5",L4:" IntelCore-i5",L5:"Intel-i5" },
    { name: "GPU", L1:"NVIDIA-GTX-1650,4GB,GDDR5",L2:"NVIDIA GeForce GTX 1650 Graphics",L3:"NVIDIA GeForce GTX 1650 Ti (4 GB GDDR6 dedicated)",L4:"GeForce GTX 1650 4GB GDDR6 Graphics",L5:"NVIDIA GTX 1650 4GB Graphics "},
    {name:"Operating System",L1:"Windows 10",L2:"Windows 11",L3:"Windows 10",L4:"Windows 10",L5:"Windows 10"},
    {name:"Color",L1:"Raven Black",L2:"Shadow Black& Ultra Violet",L3:"Black",L4:"Fortress Gray",L5:"Ascent Solid color"},
    {name:"RAM,Memory",L1:"8GB,1TB+256GB SSD",L2:"8GB DDR4-3200(Upgradeable up to 16GB DDR4-3200 SDRAM),512GB SSD",L3:"8GB DDR4 RAM(Upradeable Up to 32GB),256GB SSD+1TB HDD",L4:"8GB DDR4 RAM(Upgradeable Up to 32GB),512GB NVMe SSD",L5:"16GB RAM,512GB NVMe SSD"},
    { name: "Backlit keyboard", L1:"Yes",L2:"Yes",L3:"Yes",L4:"Yes",L5:"Yes" },
    { name: "Display Size", L1:"15.6-inch(39.63cm)",L2:"15.6-inch(39.63cm)",L3:"15.6-inch(39.63cm)",L4:"15.6-inch(39.63cm)",L5:"15.6-inch(39.63cm)"},
    { name: "Weight", L1:"2.3kg",L2:"1.98kg",L3:"2.28kg",L4:"2.3kg",L5:"2.4kg" },
    { name: "Camera", L1: "HD 720p (1.0MP)",L2:"HD 720p (1.0MP)",L3:"HD 720p (1.0MP)",L4:"HD 720p (1.0MP)",L5:"HD 720p (1.0MP)" },
    { name: "Ports", L1:"Type-c ports(1),usb ports(3),rj45 ports(1),Hdmi ports(1)",L2:"Type-c ports(1),usb ports(2),rj45 ports(1),Hdmi ports(1)",L3:"Type-c ports(1),usb ports(2),rj45 ports(1),Hdmi ports(1)",L4:"Type-c ports(1),usb ports(4),rj45 ports(1),Hdmi ports(1)",L5:"Type-c ports(1),usb ports(2),rj45 ports(1),Hdmi ports(1)"},
    { name: "MultiTasking(Gaming&Working)", L1:"Yes",L2:"Yes",L3:"Yes",L4:"Yes",L5:"Yes"},
    { name: "Actual Battery Backup", L1:"4 hours",L2:"4 hours",L3:"4 hours",L4:"4.5 hours",L5:"4 hours"},
    { name: "Processor Speed", L1:"2.4 GHz",L2:"4.2 GHz",L3:"2.5 GHz",L4:"2.5 GHz",L5:"2933MHz"},
    { name: "Screen Refresh rate", L1:"60HZ",L2:"144HZ",L3:"144HZ",L4:"144HZ",L5:"120HZ"},
    { name: "Cooling", L1:"4.5/5",L2:"4.0/5",L3:"4.0/5",L4:"4.0/5",L5:"4.0/5"}, 
    { name: "Public Rating", L1:"4.4/5",L2:"4.5/5",L3:"4.4/5",L4:"4.4/5",L5:"4.4/5"}, 
    { name: "Gaming", L1:"4.7/5",L2:"4.6/5",L3:"4.1/5",L4:"4.3/5",L5:"4.1/5"}, 
    { name: "Reasons to buy", L1:"Efficient Cooling,Dedicated Graohics Card,All the Required Ports are Available,Available at Affordable Price (65K TO 70K)",L2:"EFFICIENT COOLING,DEDICATED GRAPHICS CARD,ALL THE REQUIRED PORTS,GOOD SCREEN REFRESH RATE.AVAILABLE AT AFFORDABLE PRICE (60K TO 70K)",L3:"EFFICIENT COOLING,DEDICATED GRAPHICS CARD,ALL THE REQUIRED PORTS,GOOD SCREEN REFRESH RATE.AVAILABLE AT AFFORDABLE PRICE (60K TO 70K)",L4:"DEDICATED GRAPHICS CARD,ALL THE REQUIRED PORTS,GOOD SCREEN REFRESH RATE.AVAILABLE AT AFFORDABLE PRICE (60K TO 70K)",L5:"DEDICATED GRAPHICS CARD,ALL THE REQUIRED PORTS,GOOD SCREEN REFRESH RATE.AVAILABLE AT AFFORDABLE PRICE (60K TO 70K)"},
    { name: "Reasons to avoid", L1:"Less battery backup,Less Screen Refrsh rate",L2:"Less Battery backup",L3:"Less Battery backup",L4:"Less Battery backup",L5:"Less Battery backup"},
  ]
    
  function GamingLaptopsTable() {
    return (
          <div>
              <div className="title_lap">
                      <h1 >Best Gaming Laptops on amazon</h1>
              </div>
                    
                
              <div className="table_lap">
                <table>
                  <tr className="tr">
                    <th>Specifications</th>
                    <th>
                      <div>
                      <iframe title="gl" style={{width: '120px', height: '240px'}} marginWidth={0} marginHeight={0} scrolling="no" frameBorder={0} src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=sahara059-21&language=en_IN&marketplace=amazon&region=IN&placement=B094XL5V92&asins=B094XL5V92&linkId=45d5c3f0407c882b4f05ac58ac027e11&show_border=true&link_opens_in_new_window=true" />

                      </div>
                    </th>
                    <th>
                    <iframe title="gl" style={{width: '120px', height: '240px'}} marginWidth={0} marginHeight={0} scrolling="no" frameBorder={0} src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=sahara059-21&language=en_IN&marketplace=amazon&region=IN&placement=B09MF8KMRW&asins=B09MF8KMRW&linkId=ca37ba9e945eb5e3ed4f85f123eddd47&show_border=true&link_opens_in_new_window=true" />
                    </th>
                    <th>
                    <iframe title="gl" style={{width: '120px', height: '240px'}} marginWidth={0} marginHeight={0} scrolling="no" frameBorder={0} src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=sahara059-21&language=en_IN&marketplace=amazon&region=IN&placement=B09DY8BGSY&asins=B09DY8BGSY&linkId=1701fb52b4cfaf2be303a1aebf68d2b3&show_border=true&link_opens_in_new_window=true" />
                    </th>
                    <th>
                    <iframe title="gl" style={{width: '120px', height: '240px'}} marginWidth={0} marginHeight={0} scrolling="no" frameBorder={0} src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=sahara059-21&language=en_IN&marketplace=amazon&region=IN&placement=B08CRMTKMK&asins=B08CRMTKMK&linkId=1d3b2c2117fbb77e38b017fd2670120a&show_border=true&link_opens_in_new_window=true" />
                    </th>
                    <th>
                    <iframe title="gl" style={{width: '120px', height: '240px'}} marginWidth={0} marginHeight={0} scrolling="no" frameBorder={0} src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=sahara059-21&language=en_IN&marketplace=amazon&region=IN&placement=B095S8L3Z7&asins=B095S8L3Z7&linkId=329acb8b33f2ebc2630c919db6f48dd0&show_border=true&link_opens_in_new_window=true" />
                    </th>
                  
                  </tr>
                  {data.map((val, key) => {
                    return (
                      <tr key={key}>
                        <td>{val.name}</td>
                        <td>{val.L1}</td>
                        <td>{val.L2}</td>
                        <td>{val.L3}</td>
                        <td>{val.L4}</td>
                        <td>{val.L5}</td>
                        
                      
                      
                      
                      </tr>
                    )
                  })}
                </table>
              </div>
          </div>      
    );
  }
    
  export default GamingLaptopsTable;