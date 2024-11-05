import React from "react";
import Works from "./Works";
import Rectangle30 from "../../public/Rectangle30.png";
import Rectangle32 from "../../public/Rectangle32.png";
import Rectangle34 from "../../public/Rectangle34.png";

function Featured() {
  return (
    <div className="flex flex-col justify-center gap-10  pl-56">
      <div>
        <p className="heading text-xl">Featured Works</p>
      </div>
      <div className="flex flex-col w-[70%] gap-24">
        <Works
          image={Rectangle30}
          heading="Designing Dashboards"
          year={2020}
          category="Dashboard"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel architecto quis aspernatur, obcaecati enim eos quas possimus eius recusandae corporis sed accusamus perferendis. Delectus, expedita!"
        />
        <Works
          image={Rectangle32}
          heading="Designing Dashboards"
          year={2020}
          category="Dashboard"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel architecto quis aspernatur, obcaecati enim eos quas possimus eius recusandae corporis sed accusamus perferendis. Delectus, expedita!"
        />
        <Works
          image={Rectangle34}
          heading="Designing Dashboards"
          year={2020}
          category="Dashboard"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel architecto quis aspernatur, obcaecati enim eos quas possimus eius recusandae corporis sed accusamus perferendis. Delectus, expedita!"
        />
      </div>
    </div>
  );
}

export default Featured;
