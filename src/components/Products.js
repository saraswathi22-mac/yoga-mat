import React, { useState } from "react";
import { Data } from "../Data";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Product from "./Product";

const Products = () => {
  const [expand, setExpand] = useState(false);
  const [layoutId, setLayoutId] = useState(null);
  const expander = (id) => {
    if (expand !== true) {
      setLayoutId(id);
      setExpand(true);
    } else {
      setExpand(false);
      setLayoutId(null);
    }
  };

  return (
    <div className="App">
      <AnimateSharedLayout type="crossfade">
        <div className="product_container">
          {Data.map((item) => {
            return (
              <motion.div
                className="product_card"
                onClick={() => expander(item.id)}
                key={item.id}
                layoutId={item.id}
              >
                <img src={`../../public/images/${item.image}`} alt="img"/>
                <p>{item.yoga}</p>
                <p>{item.details}</p>
              </motion.div>
            );
          })}
        </div>
        <AnimatePresence>
          {expand && <Product id={layoutId} expander={expander} />}
        </AnimatePresence>
      </AnimateSharedLayout>
    </div>
  );
};

export default Products;
