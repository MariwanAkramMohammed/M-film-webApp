import React from "react";
import SliderPage from "../../components/SliderPage/SliderPage";
import { connect } from "react-redux";
import { CollectionSelect } from "../../Redux/AllDatas/ALLDataSelector";
import { createStructuredSelector } from "reselect";
import PreviewItem from "../../components/PreviewItems/previewItems";
import styled from "styled-components";
function Home({ Collections }) {
  return (
    <CONdiv>
      <SliderPage />
      {Collections.map((collection, index) => (
        <PreviewItem key={index} collection={collection} />
      ))}
    </CONdiv>
  );
}
const mapStateToProps = createStructuredSelector({
  Collections: CollectionSelect,
});
export default connect(mapStateToProps)(Home);
const CONdiv = styled.div`
  width: 100%;
`;
