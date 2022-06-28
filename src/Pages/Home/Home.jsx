import React from "react";
import SliderPage from "../../components/SliderPage/SliderPage";
import {connect} from 'react-redux';
import {CollectionSelect}from '../../Redux/AllDatas/ALLDataSelector';
import {createStructuredSelector} from 'reselect';
import PreviewItem from "../../components/PreviewItems/previewItems";
function Home({Collections}){
console.log(Collections)
  return(
<div>
  <SliderPage/>
  {
    Collections.map((collection,index)=>(
      <PreviewItem key={index} collection={collection}/>

    ))
  }

 
</div>
  )
}
const mapStateToProps=createStructuredSelector({
  Collections:CollectionSelect,
})
export default connect(mapStateToProps)(Home);

