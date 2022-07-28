import React from "react";
import ImageScroller from 'react-image-scroller';
import './Slider.css';
import {Link} from 'react-router-dom';
import './Home.css';



function Slider(){
    return(
      <div>
            <h2 className="lap">
                  Today's Deals on amazon
            </h2>
            <div className="slider" >
                
              <ImageScroller   >
                <div className="card">
                  <div onClick={() => {window.location.href="https://amzn.to/3iapeu7"}}  className="card-img">
                  <a href="https://www.amazon.in/Tecno-Extended-Virtual-Dimensity-Processor/dp/B09QQJNTH7?pf_rd_r=18ZPF3VHXED0HGSZZSA0&pf_rd_p=f690369a-7bb4-48bb-9349-f68a447ef06d&pd_rd_r=36fc2da3-8c2f-43b4-9220-6cd929893b20&pd_rd_w=VJQtk&pd_rd_wg=4XBPX&linkCode=li3&tag=sahara059-21&linkId=a7b028c1e2cfd6f5090724027e40b191&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09QQJNTH7&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B09QQJNTH7" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link  className="card-btn" pathname="deals" onClick={() => {window.location.href="https://amzn.to/3iapeu7"}} target="_blank">Tecno POVA  </Link>
                </div>
                
                <div className="card">
                  <div onClick={() => {window.location.href="https://amzn.to/3sMyHh6"}}  className="card-img">
                  <a href="https://www.amazon.in/iQOO-Storage-Processor-FlashCharge-Replacement/dp/B07WHR5RKH?smid=AQUYM0O99MFUT&pf_rd_r=410XEAP39BRVDYNB60GV&pf_rd_p=f690369a-7bb4-48bb-9349-f68a447ef06d&pd_rd_r=d4c9c9d2-00d1-455d-8a45-7cce583ec747&pd_rd_w=cCDB3&pd_rd_wg=4RVDe&linkCode=li3&tag=sahara059-21&linkId=7ee436fc18920c7f4e9209bf3548ce5e&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07WHR5RKH&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B07WHR5RKH" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link  className="card-btn" pathname="deals" onClick={() => {window.location.href="https://amzn.to/3sMyHh6"}} target="_blank">iQOO Z3 5G</Link>
                </div>
                <div className="card">
                  <div onClick={() => {window.location.href="https://amzn.to/3tpoXtJ"}}  className="card-img">
                  <a href="https://www.amazon.in/Oppo-Prism-Black-Storage-Display/dp/B08V9ZKN9J?smid=A14CZOWI0VEHLG&linkCode=li3&tag=sahara059-21&linkId=b33f0dc72519151fcfa2051b4e9adab6&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08V9ZKN9J&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B08V9ZKN9J" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3tpoXtJ"}} target="_blank">OPPO</Link>
                </div>
                <div onClick={() => {window.location.href="https://amzn.to/3tyEJBp"}} className="card">
                  <div onClick={() => {window.location.href="https://amzn.to/3tyEJBp"}} className="card-img">
                  <a href="https://www.amazon.in/HP-15-6-inch-Anti-Glare-Alexa-Built-15s-dy3501TU/dp/B09P1PYGX5?m=A14CZOWI0VEHLG&pd_rd_r=a09c77b1-0c37-4cb4-b135-e2ade9c4f634&pd_rd_w=1GSOa&pd_rd_wg=ciAzb&pf_rd_p=f690369a-7bb4-48bb-9349-f68a447ef06d&pf_rd_r=ZAPWY8GXHA6ACXW6P83Z&qid=1646445393&refinements=p_6%3AA14CZOWI0VEHLG&smid=A14CZOWI0VEHLG&sr=8-1&linkCode=li3&tag=sahara059-21&linkId=eb784af364ce1a4cbaca385c7f16526c&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09P1PYGX5&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B09P1PYGX5" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3tyEJBp"}} target="_blank">Laptops</Link>
                </div>
                <div onClick={() => {window.location.href="https://amzn.to/3D06SFN"}} className="card">
                  <div onClick={() => {window.location.href="https://amzn.to/3D06SFN"}} className="card-img">
                  <a href="https://www.amazon.in/Steelbird-SBH-17-Terminator-Graphic-Helmet/dp/B089J518DC?smid=AHXTPWY14UPXE&linkCode=li3&tag=sahara059-21&linkId=29cab43463da7dedcbd50eef7eb97c01&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B089J518DC&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img  src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B089J518DC" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3D06SFN"}} target="_blank">Helmets</Link>
                </div>
                <div onClick={() => {window.location.href="https://amzn.to/3u7WSGC"}} className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/3u7WSGC"}}>
                  <a href="https://www.amazon.in/HP-Pavilion-Windows-Graphics-15-ec2150AX/dp/B09MF8KMRW?m=A14CZOWI0VEHLG&pd_rd_r=508dd960-1e90-4779-9e90-7c1853455dd9&pd_rd_w=4jhW4&pd_rd_wg=ax9yM&pf_rd_p=f690369a-7bb4-48bb-9349-f68a447ef06d&pf_rd_r=M52FMPR5R0KRTQ49H1GY&qid=1647397543&refinements=p_6%3AA14CZOWI0VEHLG&sr=8-1&linkCode=li3&tag=sahara059-21&linkId=d6d1d27ba54e34453f6ad574118f76d4&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09MF8KMRW&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B09MF8KMRW" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3u7WSGC"}} target="_blank">Gaming Laptops</Link>
                </div>
                <div className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/3Mm3iu0"}}>
                    <a href="https://www.amazon.in/boAt-Monitoring-Ecosystem-Multiple-Resistance/dp/B09P8JMCB3?crid=FHVCDS73YMWV&pd_rd_r=487a557c-71c1-4592-8dae-73ee88649efe&pd_rd_w=bGH03&pd_rd_wg=3PDQ4&pf_rd_p=f690369a-7bb4-48bb-9349-f68a447ef06d&pf_rd_r=6J95SFHW0JN5WA6Q67VB&qid=1643443287&smid=A14CZOWI0VEHLG&sprefix=b09mtyb9lv+b09mty8mm8+b09mw3dp92+b09mw3mgyh+b09nykz7m8+b09pl79d2x+b09pl8cpsc+b09pl677cs+b09lmcs8hc+b09p8g14r8+b09p8jmcb3+b09p8js5cf+%2Caps%2C412&sr=8-1&linkCode=li3&tag=sahara059-21&linkId=a98bd9cacb55b54becc72b6fb7efaefc&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09P8JMCB3&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B09P8JMCB3" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3Mm3iu0"}} target="_blank">Boat Watch Matrix</Link>
                </div>
                <div className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/3I8N8kg"}}>
                  <a href="https://www.amazon.in/HP-247-G8-Warranty-67U77PA/dp/B09RMP6MM7?m=A14CZOWI0VEHLG&pd_rd_r=508dd960-1e90-4779-9e90-7c1853455dd9&pd_rd_w=4jhW4&pd_rd_wg=ax9yM&pf_rd_p=f690369a-7bb4-48bb-9349-f68a447ef06d&pf_rd_r=M52FMPR5R0KRTQ49H1GY&qid=1647398331&refinements=p_6%3AA14CZOWI0VEHLG&sr=8-2&linkCode=li3&tag=sahara059-21&linkId=17a5f4c80a2739eea4726b2d9e96f6e0&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09RMP6MM7&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B09RMP6MM7" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3I8N8kg"}} target="_blank">Working Laptops</Link>
                </div>
                <div className="card">
                  <div onClick={() => {window.location.href="https://amzn.to/3L5MWoL"}} className="card-img">
                      <a href="https://www.amazon.in/Lenovo-60-45cm-Brightness-FreeSync-G24-20/dp/B09FTCZPW4?pd_rd_r=487a557c-71c1-4592-8dae-73ee88649efe&pd_rd_w=bGH03&pd_rd_wg=3PDQ4&pf_rd_p=f690369a-7bb4-48bb-9349-f68a447ef06d&pf_rd_r=6J95SFHW0JN5WA6Q67VB&qid=1643449649&smid=A14CZOWI0VEHLG&sr=8-6&linkCode=li3&tag=sahara059-21&linkId=72fd32f58e98d514db8ceed6f9889896&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09FTCZPW4&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B09FTCZPW4" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3L5MWoL"}} target="_blank">Televisions</Link>
                </div>
                <div className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/372whTl"}}>
                    <a href="https://www.amazon.in/Bassbuds-Jade-Headphone-Cancellation-Waterproof/dp/B09BNZLTDZ?smid=A14CZOWI0VEHLG&th=1&linkCode=li3&tag=sahara059-21&linkId=92be9b48a5ad3dda48efcccf7c5530d7&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09BNZLTDZ&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B09BNZLTDZ" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/372whTl"}} target="_blank">Ptron</Link>
                </div>
                <div className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/3wf6QbE"}}>
                  <a href="https://www.amazon.in/Mivi-Wireless-Bluetooth-Immersive-Assistant/dp/B099ZRK1G4?smid=A14CZOWI0VEHLG&linkCode=li3&tag=sahara059-21&linkId=983f5c14a8d589e8ef34e2dc259ff54d&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B099ZRK1G4&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B099ZRK1G4" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3wf6QbE"}} target="_blank">Jabra,Mivi & more </Link>
                </div>
                <div className="card">
                  <div onClick={() => {window.location.href="https://amzn.to/3o8wGcK"}} className="card-img">
                  <a href="https://www.amazon.in/boAt-Bassheads-242-Earphones-Carbon/dp/B09FSWY5BP?crid=2YERFL9M9DOXS&pd_rd_r=487a557c-71c1-4592-8dae-73ee88649efe&pd_rd_w=bGH03&pd_rd_wg=3PDQ4&pf_rd_p=f690369a-7bb4-48bb-9349-f68a447ef06d&pf_rd_r=6J95SFHW0JN5WA6Q67VB&qid=1643443641&smid=A14CZOWI0VEHLG&sprefix=b071z8m4kx+b07234xxjf+b07gpxxnng+b07gqd4k6l+b08md255xb+b08md23pmw+b08md2ctdb+b08pp4xsmq+&sr=8-1&linkCode=li3&tag=sahara059-21&linkId=38cd621f7f3e5a0c64e8fcb56fdcd796&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09FSWY5BP&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B09FSWY5BP" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3o8wGcK"}} target="_blank">boAt Bassheads</Link>
                </div>
               
                <div className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/3rZkLiu"}}>
                  <a href="https://www.amazon.in/Moonwalk-M4-Earphones-Microphone-Bluetooth/dp/B09HZFCB89?crid=1LMY0GIIYIZ8S&pd_rd_r=487a557c-71c1-4592-8dae-73ee88649efe&pd_rd_w=bGH03&pd_rd_wg=3PDQ4&pf_rd_p=f690369a-7bb4-48bb-9349-f68a447ef06d&pf_rd_r=6J95SFHW0JN5WA6Q67VB&qid=1643445535&smid=A14CZOWI0VEHLG&sprefix=b09hzfcb89+b09p1bh84z+b09mwmk485+b09mwm3ts3+b091gv4n28+b08t96r3xj+b09mfdd266+b09mdcbjp2+b09cts38sy+b09ctsv8zw%2Caps%2C374&sr=8-7&linkCode=li3&tag=sahara059-21&linkId=faaab11ecf828e043ac23af9bb2392e1&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09HZFCB89&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B09HZFCB89" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3rZkLiu"}} target="_blank">Earbuds</Link>
                </div>
                <div className="card" onClick={() => {window.location.href="https://amzn.to/3HHSbbd"}} >
              
                  <div onClick={() => {window.location.href="https://amzn.to/3HHSbbd"}} className="card-img">
                  <a href="https://www.amazon.in/boAt-Airdopes-141-Wireless-Resistance/dp/B09N3ZNHTY?crid=1WVYGZ4Y57C15&pd_rd_r=8e55e33d-9deb-48aa-8f08-98f4b81c8f11&pd_rd_w=ALuic&pd_rd_wg=M735F&pf_rd_p=f690369a-7bb4-48bb-9349-f68a447ef06d&pf_rd_r=8P0NHSFK3E4C6XEB5GBP&qid=1646365093&smid=A14CZOWI0VEHLG&sprefix=%2Celectronics%2C519&sr=8-1&linkCode=li3&tag=sahara059-21&linkId=f30e603f6f67daf1a124c34d8a37b48a&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09N3ZNHTY&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B09N3ZNHTY" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3HHSbbd"}} target="_blank">boat Airdopes</Link>
                </div>
                <div className="card" onClick={() => {window.location.href="https://amzn.to/3Kgo0JE"}} >
              
                  <div onClick={() => {window.location.href="https://amzn.to/3Kgo0JE"}} className="card-img">
                  <a href="https://www.amazon.in/Noise-Wireless-Instacharge-Hypersync-Technology/dp/B092DHTXH2?crid=2OJQ3WE6AFKWR&pd_rd_r=8e55e33d-9deb-48aa-8f08-98f4b81c8f11&pd_rd_w=ALuic&pd_rd_wg=M735F&pf_rd_p=f690369a-7bb4-48bb-9349-f68a447ef06d&pf_rd_r=8P0NHSFK3E4C6XEB5GBP&qid=1646365683&smid=A14CZOWI0VEHLG&sprefix=b09lcfzmgd+b09dd7f3cb+b09dd68jxr+b09d3ys64w+b09d3x79fc+b095z1nbk6+b095yzb3ms+b092zfv1fc+b092dhtxh2+b08vr9nrz5+b08sw6mqmd+b08sw5f9gj+b08svzjnvp+b08svpw1jq+b08l8xsjwb+b08h8q5klk+b08h8n3rkt%2Caps%2C607&sr=8-2&linkCode=li3&tag=sahara059-21&linkId=6678705ec32517a97fecaa2e336ab2fc&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B092DHTXH2&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B092DHTXH2" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3Kgo0JE"}} target="_blank">Noise Airbuds</Link>
                </div>
                <div className="card" onClick={() => {window.location.href="https://amzn.to/3hFoAob"}} >
              
                  <div onClick={() => {window.location.href="https://amzn.to/3hFoAob"}} className="card-img">
                  <a href="https://www.amazon.in/Launched-Wings-Playtime-Bluetooth-Resistance/dp/B09PTCL27V?crid=1S5ZORINW02FH&pd_rd_r=a09c77b1-0c37-4cb4-b135-e2ade9c4f634&pd_rd_w=1GSOa&pd_rd_wg=ciAzb&pf_rd_p=f690369a-7bb4-48bb-9349-f68a447ef06d&pf_rd_r=ZAPWY8GXHA6ACXW6P83Z&qid=1646446774&smid=A14CZOWI0VEHLG&sprefix=b09ptjmcc4+b09ptcl27v%2Caps%2C335&sr=8-1&linkCode=li3&tag=sahara059-21&linkId=3776297d9d515a6f8145c5550dbeba61&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09PTCL27V&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B09PTCL27V" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3hFoAob"}} target="_blank">Phantom Gaming Earbuds</Link>
                </div>
                
                <div className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/3winTJM"}}>
                  <a href="https://www.amazon.in/Naturoz-California-Almonds-500g/dp/B075QHQV2J?smid=AT95IG9ONZD7S&linkCode=li3&tag=sahara059-21&linkId=9f8fe3c29dabb83d65e3543f9d5e2973&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B075QHQV2J&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B075QHQV2J" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3winTJM"}} target="_blank">Daily food essentials</Link>
                </div>
                
                
                
               
                
                <div className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/3HFvVi1"}}>
                  <a href="https://www.amazon.in/dp/B086R48ZN6?pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-2&pf_rd_r=9S7E2YZ4Y6AYTT1R72F7&pf_rd_t=101&pf_rd_p=a31ad646-ac57-433c-bdf3-0a5be80ecf6b&pf_rd_i=26695656031&linkCode=li3&tag=sahara059-21&linkId=cfb060bafa1146d4a3a242841521e45b&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B086R48ZN6&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B086R48ZN6" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3HFvVi1"}} target="_blank">Cycles</Link>
                </div>
                
                
                
                
                
                
              </ImageScroller>
              </div>
        </div>
   );
}
export default Slider;
