import React from 'react'
import bmichart from './bmichart.jpeg'

function InfoBMI() {

    const myPStyle = {
        textAlign: "center",
    }

    const myImgStyle = {
        textAlign: "center",
        width: "600px",
        height:"400px" 
    }


    return (
        <div className="bmiInfo">
            <div className="bmiInfoLeft">
                <h2>What's The BMI?</h2>
                <p style={myPStyle}>Body mass index (BMI) is a person’s weight in kilograms divided by the square of height in meters.BMI is an inexpensive and easy screening method for weight category—underweight, healthy weight,<br/> overweight, and obesity.</p>


                <p style={myPStyle}>BMI takes into account natural variations in body shape, giving a healthy weight range for a particular height.

                As well as measuring your BMI, healthcare professionals may take other factors into account when assessing if you're a healthy weight.

                Muscle is much denser than fat, so very muscular people, such as heavyweight boxers, weight trainers and athletes, may be a healthy weight even though their BMI is classed as obese.<br/><br/>

                Your ethnic group can also affect your risk of some health conditions. For example, adults of South Asian origin may have a higher risk of some health problems, such as diabetes, with a BMI of 23, which is usually considered healthy.

                You should not use BMI as a measure if you're pregnant. Get advice from your midwife or GP if you're concerned about your weight.</p>
            </div>
            <div className="bmiInfoRight">
                <img style={myImgStyle} src={bmichart} alt="Logo" />         
            </div>
        </div>
    )
}

export default InfoBMI;
