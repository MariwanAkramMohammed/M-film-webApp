import React from "react";
import { connect } from "react-redux";

import styled from "styled-components";
import { CollectionDataSelector } from "../../Redux/AllDatas/ALLDataSelector";
import { useParams } from "react-router-dom";
import Item from "../Items/Items";

function Views({ Collection }) {
  const { items } = Collection;

  return (
    <CONdiv>
      {items.map((item, index) => (
        <div>
          <Item key={item.id} item={item} />
        </div>
      ))}
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
