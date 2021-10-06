import { createContext,useState } from "react";
const DietContext = createContext();


export const DietContextProvider = ({children}) => {

//Initial States
    
    const initialStateInput = {fullname:"",weight:"",height:"",bmiValue:""};
    const [dietPage,setDietPage] = useState(false);
    const [form,setForm] = useState(initialStateInput);


//BMI Calculate and Show BMI Result    
    const calculate = () =>{

        var bmi = (Number(form.weight)/Number(form.height*form.height))*10000;
    
        if(0<bmi && bmi<=18.5){

            document.getElementById("bmiCalculated").innerHTML = `
            <div>
            <h4 style="background-color:rgb(207, 0, 0); border-radius:50px;">Your BMI :<br/> Thin (${bmi.toFixed(1)}) <h4/>
            <p style="color:rgb(32, 27, 21);" >A BMI of ${bmi.toFixed(1)} is within the underweight category.<br/>
            It is recommended that you visit a health professional to discuss the impacts this may have on your health.<p/>
            <p>An average of 3000 calories is suitable for your daily diet. You can create your diet by choosing any of the following dishes.<p/>
            <div/>
            
        `   
        }else if(bmi>18.5 && bmi<=24.9){
         
            document.getElementById("bmiCalculated").innerHTML = `
            <div>
            <h4 style="background-color:green; border-radius:50px;">Your BMI :<br/> Normal (${bmi.toFixed(1)}) <h4/>
            <p style="color:rgb(32, 27, 21);" >A BMI of ${bmi.toFixed(1)} is indicating your weight is in the Normal category <br/> for adults of your height.<br/>
            This is generally good for your health. The challenge is to maintain your weight.<br/> You might like to find out about how to maintain a healthy weight.<p/>
            <p>An average of 2000 calories is suitable for your daily diet. You can create your diet by choosing any of the following dishes.<p/>
            <div/>
        `
        }else if(bmi>=25 && bmi<=29.9){

            document.getElementById("bmiCalculated").innerHTML = `
            <div>
            <h4 style="background-color:rgb(207, 0, 0); border-radius:50px;">Your BMI :<br/> Fat (${bmi.toFixed(1)}) <h4/>
            <p style="color:rgb(32, 27, 21);" >A BMI of ${bmi.toFixed(1)} is within the overweight category.<br/>
            This may not be good for your health. You might like to find out about the many benefits of moving towards a healthy weight.<p/>
            <p>An average of 1800 calories is suitable for your daily diet. You can create your diet by choosing any of the following dishes.<p/>
            <div/>
        `
        }else if(bmi>=30){
            
            document.getElementById("bmiCalculated").innerHTML = `
            <div>
            <h4 style="background-color:rgb(207, 0, 0); border-radius:50px;">Your BMI:<br/> 1st Degree Obese (${bmi.toFixed(1)}) <br><h4/>
            <p style="color:rgb(32, 27, 21);" >A BMI of ${bmi.toFixed(1)} is within the obese category.<br/>
            It is recommended that you visit a health professional to discuss the impacts this may have on your health.<p/>
            <p>An average of 1600 calories is suitable for your daily diet. You can create your diet by choosing any of the following dishes.<p/>
            <div/>
            
        `
        }
    }

//Local Storage Functions
    class Storage{

        static getCalculatedUsers(){
            let users;

            if(localStorage.getItem("calculated")===null){
                users =[];
            }else{
                users= JSON.parse(localStorage.getItem("calculated"));
            }
            return users;
        }

        static addCalculatedUserToLS(form){
            let users = this.getCalculatedUsers();

            users.push(form)
            localStorage.setItem("calculated",JSON.stringify(users));
        }

        static clearCalculatedUsers(){
            localStorage.removeItem("calculated");
        }
    }

    

    const datas = {
        dietPage,
        setDietPage,
        form,
        setForm,
        calculate,
        initialStateInput,
        Storage
    }

    return <DietContext.Provider value={datas}>
        {children}
    </DietContext.Provider>

}



export default DietContext;