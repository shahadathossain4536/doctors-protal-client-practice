import React, { useState } from "react";
import chair from "../../assets/images/chair.png";

import { format } from "date-fns";
import { DayPicker, Footer } from "react-day-picker";
import "react-day-picker/dist/style.css";
const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div class="hero min-h-screen ">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div>
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
            footer={Footer}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
