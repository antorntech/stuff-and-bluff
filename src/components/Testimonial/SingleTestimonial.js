import React from "react";

const SingleTestimonial = (props) => {
  const { name, comments, img } = props.testimonial;
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <img class="mask mask-circle" src={img} alt="" />
        <p className="py-3">{comments}</p>
        <h2 className="text-2xl font-bold pb-4">{name}</h2>
      </div>
    </div>
  );
};

export default SingleTestimonial;
