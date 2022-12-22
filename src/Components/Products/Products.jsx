import CheckPropTypes from "prop-types";
import React from "react";
export default function Products({ color, width, path, getColors }) {
  const categories = [
    {
      id: "erlkejlkejwr93993klsaf",
      categoryName: "Sporting Goods",
      products: [
        {
          id: 1,
          productName: "Football",
          price: 99,
        },
        {
          id: 2,
          productName: "BaseBall",
          price: 19,
        },
        {
          id: 3,
          productName: "BusketBall",
          price: 39,
        },
      ],
    },
    {
      id: "werweflksdflsdf30932",
      categoryName: "Electronics",
      products: [
        {
          id: 1,
          productName: "IPhone 5",
          price: 299,
        },
        {
          id: 2,
          productName: "IPhone 7",
          price: 1999,
        },
        {
          id: 3,
          productName: "IPhone 13",
          price: 3999,
        },
      ],
    },
  ];
  return (
    <div style={{ color, width }}>
      {/* {categories.map((category) => (
        <Categories key={category.id} category={category} />
      ))} */}
      asdf
    </div>
  );
}

Products.propTypes = {
  color: CheckPropTypes.string,
  width: CheckPropTypes.string,
  path: CheckPropTypes.string,
};

Products.defaultProps = {
  color: "green",
};
