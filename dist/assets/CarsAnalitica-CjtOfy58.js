import{p as e,B as h,r,aW as u,j as t,a as y}from"./index-BxHCwZaM.js";import{P as C}from"./Pagination-CVIykCMf.js";import"./PurePanel-B4yXlFMQ.js";const j=e.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  margin-top: 50px;

  @media (min-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,b=e.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`,v=e.div`
  display: flex;
  flex-direction: column;
`,w=e.div`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #1a202c;
  margin-bottom: 8px;
`,k=e.img`
  width: 232px;
  height: 72px;
  margin-bottom: 16px;
`,P=e.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  margin-top: 40px;
`,S=e.div`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 25.2px;
  color: #1a202c;
`,z=e.div`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #1a202c;
  margin-top: 4px;
`,D=e(h)`
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
`,I=e.div`
  display: flex;
  justify-content: space-between;
`,E=e.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,A=()=>{const[s,d]=r.useState([]),[o,l]=r.useState(1),i=12,p=u();r.useEffect(()=>{(async()=>{try{const n=await y.get("http://95.85.121.153:3066/api/get-cars");d(n.data)}catch(n){console.error("Error fetching car data:",n)}})()},[]);const c=(o-1)*i,x=c+i,f=s.slice(c,x),g=a=>{l(a)},m=a=>{p(`/cars/${a}`)};return t.jsxs("div",{children:[t.jsx(j,{children:f.map((a,n)=>t.jsxs(b,{children:[t.jsx(v,{children:t.jsx(w,{children:a.key})}),t.jsx(P,{children:t.jsx(k,{src:a.image,alt:`${a.key} image`})}),t.jsxs(I,{children:[t.jsxs("div",{children:[t.jsxs(S,{children:[a.last_addedd.value.toLocaleString().slice(0,5),"... TKM"]}),t.jsx(z,{children:"Ortalama bahasy"})]}),t.jsx(D,{onClick:()=>m(a.key),children:"Hasabat"})]})]},n))}),t.jsx(E,{children:t.jsx(C,{current:o,pageSize:i,total:s.length,onChange:g,showSizeChanger:!1})})]})};export{A as default};
