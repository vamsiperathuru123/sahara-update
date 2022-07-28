import React from "react";
import './LaptopTable.css';
import './Laptops.css';


const data=[
    {
        Specifications:"Product",
        L1:"Hisense 164 cm (65 inches) 4K Ultra HD Smart Certified Android LED TV 65A73F (Black) (2021 Model) | With JBL 6 Speaker System ",
        L2:"Samsung 109 cm (43 inches) 4K Ultra HD Smart LED TV UA43AU7700KLXL (Titan Gray) (2021 Model) ",
        L3:"OnePlus 163.8 cm (65 inches) U Series 4K LED Smart Android TV 65U1S (Black) (2021 Model)",
        L4:"iFFALCON 164 cm (65 inches) 4K Ultra HD Certified Android Smart LED TV 65U61 (Black) (2021 Model) ",
        L5:"Kodak 164 cm (65 inches) 4K Ultra HD Smart LED TV 65CA0101 (Black) (2021 Model) | With Dolby Digital Plus & DTS Tru Surround "
    },
    {
        Specifications: "Brand",
        L1: " Hisense",
        L2: "Samsung",
        L3: "OnePlus",
        L4: "IFFALCON",
        L5: "Kodak"
    },
    {
        Specifications: "Screen size",
        L1: "65 inches",
        L2: "50 inches",
        L3: "65 inches",
        L4: "65 inches",
        L5: "65 inches"
    },
    {
        Specifications: "Resolution",
        L1: "4k",
        L2: "4k",
        L3: "4k",
        L4: "4k",
        L5: "4k"
    },
    {
        Specifications: "Ports",
        L1: "HDMI ports(3), USB port(2)",
        L2: "HDMI ports(3), USB port(1)\r\n",
        L3: " HDMI ports(3), USB ports(2)",
        L4: "3 HDMI ports\r\n2 USB ports ",
        L5: "3 HDMI ports(3), USB ports(2)\r\n\r\n"
    },
    {
        Specifications: "Connectivity Options",
        L1: "Bluetooth, Wi-Fi, USB, Ethernet, HDMI",
        L2: "Wi-Fi, USB, Ethernet, HDMI",
        L3: "Wi-Fi, USB, Ethernet, HDMI",
        L4: "Wi-Fi, USB, Ethernet, HDMI",
        L5: "Wi-Fi"
    },
    {
        Specifications: "TV sound &audio",
        L1: "102 Watts Output | JBL 6 Speaker System | Dolby Atmos | (Multi Channel Surround Sound for best sound experience) | Powerful Sound\r\n\r\n",
        L2: "20 Watts Output | Powerful Speakers with Dolby Digital Plus | Q Symphony\r\n\r\n",
        L3: " 30 Watts Output | Co-tuned with Dynaudio | Dolby Audio\r\n",
        L4: "24 Watts Output | Dolby Audio Power Speakers | Surround Virtualizer\r\n",
        L5: "30 Watts Output | Powerful Speakers with Digital Dolby Plus Audio | DTS Tru Surround for remarkable sound quality\r\n\r\n\r\n"
    },
    {
        Specifications: "Supported\r\ninternet services",
        L1: "Netflix, Google Play Store, Android TV, Hotstar, YouTube\r\n",
        L2: "Netflix, Amazon Prime, Zee5, Youtube, Hotstar",
        L3: "Netflix, Prime Video, Zee5, Oxygen Play, Eros Now, JioCinema, SonyLiv, Youtube, Hungama, Hotstar\r\n",
        L4: "Netflix, Google Assistant, Android TV, Amazon Video, YouTube",
        L5: "gNetflix, Prime Video, Zee5, Oxygen Play, MX Player, Eros Now, JioCinema, SonyLiv, Youtube, Hungama, Hotstar\r\n\r\n"
    },
    {
        Specifications: "Smart TV Features",
        L1: "Official Android TV 9.0 PIE,\r\nBuilt-in Assistant , RAM: 2GB ,\r\nROM 16 GB , Quad Core , Search\r\n",
        L2: " Voice Assistant - Bixby & Alexa | Tap View | PC Mode | Universal Guide | Web Browser | Screen Mirroring\r\n",
        L3: "Android TV 10 ｜Hands-free voice control with Speak Now | Google Assistant | OnePlus Connect 2.0 | OxygenPlay 2.0 | Data Saver Plus | Kids Mode | Game Mode, Dimension (Without Stand) - 1.448m*7.88cm*83.8cm\r\n\r\n",
        L4: "Google Assistant | 4K Android TV + HDR 10 | AI-IN | T-cast | Bluetooth 5.0\r\n",
        L5: "Display Mirroring for compatible devices"
    },
    {
        Specifications: "Model Name",
        L1: "65A73F",
        L2: "UA50AUE70AKLXL",
        L3: "65U1S",
        L4: "65U61",
        L5: "65CA0101"
    },
    {
        Specifications: "Display Technology",
        L1: "LED",
        L2: "LED",
        L3: "LED",
        L4: "LED",
        L5: "LED"
    },
    {
        Specifications: "Refresh rate",
        L1: "60 Hz",
        L2: "60 Hz",
        L3: "60 Hz",
        L4: "60 Hz",
        L5: "60 Hz"
    },
    {
        Specifications: "Model Year",
        L1: "2021 model",
        L2: "2021 model",
        L3: "2021 model",
        L4: "2021 model",
        L5: "2021 model"
    }
]


function SmartTvTable() {
    return (
      
    <div > 
        
      <div className="title_lap">
              <h1>Best Smart TV's on amazon</h1>
      </div>
      <div className="table_lap">
         
        <table >
          <tr>
            <th>Specifications</th>
            <th>
            <iframe title="st" style={{width: '120px', height: '240px'}} marginWidth={0} marginHeight={0} scrolling="no" frameBorder={0} src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=sahara059-21&language=en_IN&marketplace=amazon&region=IN&placement=B08MM9B98S&asins=B08MM9B98S&linkId=72e58d3d21fb1565e9a231b8dbc7c79c&show_border=true&link_opens_in_new_window=true" />
            </th>
            <th>
            <iframe title="st" style={{width: '120px', height: '240px'}} marginWidth={0} marginHeight={0} scrolling="no" frameBorder={0} src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=sahara059-21&language=en_IN&marketplace=amazon&region=IN&placement=B096BKPPYL&asins=B096BKPPYL&linkId=2989ecf960f07898d0adf5ca8340b6f3&show_border=true&link_opens_in_new_window=true" />
            </th>
            <th>
            <iframe title="st" style={{width: '120px', height: '240px'}} marginWidth={0} marginHeight={0} scrolling="no" frameBorder={0} src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=sahara059-21&language=en_IN&marketplace=amazon&region=IN&placement=B095JPKPH3&asins=B095JPKPH3&linkId=7075bcd6a575db5244f463d72f678255&show_border=true&link_opens_in_new_window=true" />
            </th>
            <th>
            <iframe title="st" style={{width: '120px', height: '240px'}} marginWidth={0} marginHeight={0} scrolling="no" frameBorder={0} src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=sahara059-21&language=en_IN&marketplace=amazon&region=IN&placement=B0995XM2NS&asins=B0995XM2NS&linkId=a4b1eff4fb8a2fbaa9080476746f78b8&show_border=true&link_opens_in_new_window=true" />
            </th>
            <th>
            <iframe title="st" style={{width: '120px', height: '240px'}} marginWidth={0} marginHeight={0} scrolling="no" frameBorder={0} src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=sahara059-21&language=en_IN&marketplace=amazon&region=IN&placement=B08XXB449F&asins=B08XXB449F&linkId=dc47d635071f3f144ac9a207aa4ab9ce&show_border=true&link_opens_in_new_window=true" />
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
                
              </tr>
            )
          })}
        </table>
      </div>
    </div>  
    );
  }
    
  export default SmartTvTable;