import React from "react";
import {Routes,Route}from 'react-router-dom'
import styled from "styled-components";
import Views from '../../components/Views/Views';
const FullViews=()=>{


return(<ConDiv >
  <Routes>
    <Route path=':id' element={<Views/>}/>
  </Routes>

</ConDiv>)

}
export default FullViews;
const ConDiv=styled.div`

`


