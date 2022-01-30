import React from "react";
import { Data } from "../Data";
import { motion } from "framer-motion";
import { RiArrowGoBackFill } from "react-icons/ri";

const Product = ({ id, expander }) => {
  const yoga_name = Data.find((item) => item.id === parseInt(id));
  return (
    <motion.div key={id} className="expanded_card" layoutId={id}>
      <div className="expanded_image">
        <div className="expanded_image_content">
          <p onClick={expander}>
            <RiArrowGoBackFill />
          </p>
          <img src={`images/${yoga_name.image}`} alt="" />
        </div>
      </div>
      <div className="expanded_text">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="expanded_text_content"
        >
          <p className="product_name">{yoga_name.yoga}</p>
          <p className="product_details">{yoga_name.details}</p>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text_footer"
          >
            <p className="product_price">{yoga_name.yoga}</p>
            <button>Buy</button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Product;
