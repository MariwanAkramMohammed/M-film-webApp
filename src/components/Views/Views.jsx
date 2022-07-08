import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { CollectionDataSelector } from "../../Redux/AllDatas/ALLDataSelector";
import { useParams } from "react-router-dom";
import Item from "../Items/Items";

import ScaleLoader from "react-spinners/ScaleLoader";
function Views({ Collection }) {
  const { items } = Collection;

  return (
    <CONdiv>
      {Object.keys(Collection).length ? (
        items.map((item, index) => (
          <div>
            <Item key={item.id} item={item} />
          </div>
        ))
      ) : (
        <DivSpinner>
          <ScaleLoader
            color={"rgba(55,90,114,50)"}
            loading={true}
            height={100}
            margin={5}
            speedMultiplier={1}
            width={3}
          />
        </DivSpinner>
      )}



    </CONdiv>
  );
}

function MapStateToProps(state) {
  const { id } = useParams();
  return {
    Collection: CollectionDataSelector(id)(state),
  };
}

export default connect(MapStateToProps)(Views);
const CONdiv = styled.div`
  display: grid;
  column-gap: 0px;
  grid-template-columns: auto auto auto auto auto;
  padding-top: 4rem;
`;

const DivSpinner = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
