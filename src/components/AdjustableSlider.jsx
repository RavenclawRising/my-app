import React from 'react'
import { Slider } from "radix-ui";
import "./styles.css";
  

const AdjustableSlider = () => {
  return (
    <div>
        <h2>Adjustable Slider</h2>
        <form>
            <Slider.Root className="SliderRoot" defaultValue={[50]} max={100} step={1}>
                <Slider.Track className="SliderTrack">
                    <Slider.Range className="SliderRange" />
                </Slider.Track>
                <Slider.Thumb className="SliderThumb" aria-label="Volume" />
            </Slider.Root>
        </form>
    </div>      
);

};

export default AdjustableSlider;