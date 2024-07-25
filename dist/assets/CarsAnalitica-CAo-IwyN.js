import{r as c,j as a,B as p}from"./index-Dq_iBM8r.js";import{p as e}from"./styled-components.browser.esm-6A0fZmns.js";import{C as h,P as f}from"./CarFilters-Bomnb_TV.js";import"./index-DONOdC2N.js";const u=e.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,y=e.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`,x=e.div`
  display: flex;
  flex-direction: column;
`,b=e.div`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #1a202c;
  margin-bottom: 8px;
`,I=e.div`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  color: #90a3bf;
  margin-bottom: 16px;
`,U=e.img`
  width: 232px;
  height: 72px;
  margin-bottom: 16px;
`,M=e.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  margin-top: 40px;
`,C=e.div`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 25.2px;
  color: #1a202c;
`,j=e.div`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #1a202c;
  margin-top: 4px;
`,K=e(p)`
  width: 116px;
  height: 44px;
  border-radius: 4px;
  background-color: #6c5dd3;
  color: #fff;
  font-family: "Plus Jakarta Sans", sans-serif;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #5849c0;
  }
`,v=e.div`
  display: flex;
  justify-content: space-between;
`,P=e.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,m=[{name:"BMW",model:"X5 - 2019",imageUrl:"/images/car.png",price:"999K/ ",additionalInfo:"ortalama bahasy",month:"şu aý"},{name:"Mercedes",model:"C-Class - 2020",imageUrl:"/images/car.png",price:"850K/ ",additionalInfo:"ortalama bahasy",month:"şu aý"},{name:"Audi",model:"A4 - 2018",imageUrl:"/images/car.png",price:"780K/ ",additionalInfo:"ortalama bahasy",month:"şu aý"},{name:"Toyota",model:"Camry - 2021",imageUrl:"/images/car.png",price:"700K/ ",additionalInfo:"ortalama bahasy",month:"şu aý"},{name:"Honda",model:"Accord - 2019",imageUrl:"/images/car.png",price:"680K/ ",additionalInfo:"ortalama bahasy",month:"şu aý"},{name:"Ford",model:"Mustang - 2020",imageUrl:"/images/car.png",price:"1.2M/ ",additionalInfo:"ortalama bahasy",month:"şu aý"},{name:"Chevrolet",model:"Malibu - 2019",imageUrl:"/images/car.png",price:"650K/ ",additionalInfo:"ortalama bahasy",month:"şu aý"},{name:"Tesla",model:"Model S - 2021",imageUrl:"/images/car.png",price:"2.5M/ ",additionalInfo:"ortalama bahasy",month:"şu aý"},{name:"Nissan",model:"Altima - 2018",imageUrl:"/images/car.png",price:"600K/ ",additionalInfo:"ortalama bahasy",month:"şu aý"},{name:"Volkswagen",model:"Passat - 2020",imageUrl:"/images/car.png",price:"720K/ ",additionalInfo:"ortalama bahasy",month:"şu aý"},{name:"Hyundai",model:"Elantra - 2019",imageUrl:"/images/car.png",price:"590K/ ",additionalInfo:"ortalama bahasy",month:"şu aý"},{name:"Kia",model:"Optima - 2020",imageUrl:"/images/car.png",price:"610K/ ",additionalInfo:"ortalama bahasy",month:"şu aý"},{name:"Mazda",model:"6 - 2019",imageUrl:"/images/car.png",price:"640K/ ",additionalInfo:"ortalama bahasy",month:"şu aý"},{name:"Subaru",model:"Outback - 2020",imageUrl:"/images/car.png",price:"700K/ ",additionalInfo:"ortalama bahasy",month:"şu aý"},{name:"Lexus",model:"ES - 2021",imageUrl:"/images/car.png",price:"1.3M/ ",additionalInfo:"ortalama bahasy",month:"şu aý"},{name:"Jaguar",model:"XE - 2018",imageUrl:"/images/car.png",price:"900K/ ",additionalInfo:"ortalama bahasy",month:"şu aý"},{name:"Porsche",model:"Panamera - 2021",imageUrl:"/images/car.png",price:"3.2M/ ",additionalInfo:"ortalama bahasy",month:"şu aý"},{name:"Volvo",model:"S60 - 2020",imageUrl:"/images/car.png",price:"850K/ ",additionalInfo:"ortalama bahasy",month:"şu aý"},{name:"Land Rover",model:"Discovery - 2019",imageUrl:"/images/car.png",price:"1.4M/ ",additionalInfo:"ortalama bahasy",month:"şu aý"},{name:"Alfa Romeo",model:"Giulia - 2020",imageUrl:"/images/car.png",price:"1.1M/ ",additionalInfo:"ortalama bahasy",month:"şu aý"},{name:"Maserati",model:"Ghibli - 2021",imageUrl:"/images/car.png",price:"2.8M/ ",additionalInfo:"ortalama bahasy",month:"şu aý"},{name:"Ferrari",model:"Portofino - 2019",imageUrl:"/images/car.png",price:"4.5M/ ",additionalInfo:"ortalama bahasy",month:"şu aý"},{name:"Lamborghini",model:"Huracan - 2020",imageUrl:"/images/car.png",price:"5.5M/ ",additionalInfo:"ortalama bahasy",month:"şu aý"},{name:"Bentley",model:"Continental GT - 2018",imageUrl:"/images/car.png",price:"3.8M/ ",additionalInfo:"ortalama bahasy",month:"şu aý"},{name:"Rolls-Royce",model:"Ghost - 2021",imageUrl:"/images/car.png",price:"7M/ ",additionalInfo:"ortalama bahasy",month:"şu aý"},{name:"Aston Martin",model:"DB11 - 2020",imageUrl:"/images/car.png",price:"4.2M/ ",additionalInfo:"ortalama bahasy",month:"şu aý"},{name:"McLaren",model:"720S - 2019",imageUrl:"/images/car.png",price:"6M/ ",additionalInfo:"ortalama bahasy",month:"şu aý"},{name:"Bugatti",model:"Chiron - 2020",imageUrl:"/images/car.png",price:"10M/ ",additionalInfo:"ortalama bahasy",month:"şu aý"},{name:"Pagani",model:"Huayra - 2021",imageUrl:"/images/car.png",price:"15M/ ",additionalInfo:"ortalama bahasy",month:"şu aý"},{name:"Koenigsegg",model:"Agera RS - 2019",imageUrl:"/images/car.png",price:"12M/ ",additionalInfo:"ortalama bahasy",month:"şu aý"},{name:"Ford",model:"Fiesta - 2018",imageUrl:"/images/car.png",price:"450K/ ",additionalInfo:"ortalama bahasy",month:"şu aý"},{name:"Chevrolet",model:"Cruze - 2020",imageUrl:"/images/car.png",price:"550K/ ",additionalInfo:"ortalama bahasy",month:"şu aý"},{name:"Mazda",model:"3 - 2019",imageUrl:"/images/car.png",price:"620K/ ",additionalInfo:"ortalama bahasy",month:"şu aý"},{name:"Toyota",model:"Corolla - 2021",imageUrl:"/images/car.png",price:"680K/ ",additionalInfo:"ortalama bahasy",month:"şu aý"},{name:"Hyundai",model:"Sonata - 2020",imageUrl:"/images/car.png",price:"600K/ ",additionalInfo:"ortalama bahasy",month:"şu aý"},{name:"Kia",model:"Sportage - 2021",imageUrl:"/images/car.png",price:"720K/ ",additionalInfo:"ortalama bahasy",month:"şu aý"},{name:"Volkswagen",model:"Golf - 2019",imageUrl:"/images/car37.png",price:"700K/ ",additionalInfo:"ortalama bahasy",month:"şu aý"},{name:"Audi",model:"Q7 - 2020",imageUrl:"/images/car38.png",price:"1.5M/ ",additionalInfo:"ortalama bahasy",month:"şu aý"},{name:"BMW",model:"M3 - 2021",imageUrl:"/images/car39.png",price:"1.8M/ ",additionalInfo:"ortalama bahasy",month:"şu aý"},{name:"Mercedes",model:"E-Class - 2019",imageUrl:"/images/car40.png",price:"1.7M/ ",additionalInfo:"ortalama bahasy",month:"şu aý"}],z=()=>{const[o,t]=c.useState(1),i=12,r=(o-1)*i,l=r+i,s=m.slice(r,l),d=n=>{t(n)};return a.jsxs("div",{children:[a.jsx(h,{}),a.jsx(u,{children:s.map((n,g)=>a.jsxs(y,{children:[a.jsxs(x,{children:[a.jsx(b,{children:n.name}),a.jsx(I,{children:n.model})]}),a.jsx(M,{children:a.jsx(U,{src:n.imageUrl,alt:`${n.name} image`})}),a.jsxs(v,{children:[a.jsxs("div",{children:[a.jsxs(C,{children:[n.price,a.jsx("span",{style:{color:"#90A3BF",fontSize:"14px"},children:n.month})]}),a.jsx(j,{children:n.additionalInfo})]}),a.jsx(K,{children:"Hasabat"})]})]},g))}),a.jsx(P,{children:a.jsx(f,{current:o,pageSize:i,total:m.length,onChange:d,showSizeChanger:!1})})]})};export{z as default};
