import {useContext} from 'react'
import DietContext from '../context/DietContext';

import { BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from 'react-router-dom';
import Body from './Body';


function Form() {
    
    const {dietPage,setDietPage,form,setForm,calculate,initialStateInput,Storage} = useContext(DietContext);


    const onChangeInput = (e) => {
        setForm({...form,[e.target.name]:e.target.value});
    }


    const onSubmit = (e) => {
        e.preventDefault();

        if(form.fullname==="" || form.weight==="" || form.height===""){
            alert("İstenilen bilgileri giriniz");
        }else{
            calculate();
            setDietPage(true);
            form.bmiValue = (((Number(form.weight)/Number(form.height*form.height))*10000).toFixed(1)).toString();
            Storage.addCalculatedUserToLS(form);
        }
    }


    document.addEventListener("click", myFunction)
    function myFunction(e){
        if(e.target.className==="listClass active"){
          setDietPage(false);
          setForm(initialStateInput);  
        }
    };

    

    return (
        <div>
            <div className="formCard">
                <form onSubmit={onSubmit} className="card" >
                <h2 className="title">
                Body Mass Index (BMI) <br/>Calculator
                </h2>
                <h4 className="rules">
                Please fill in the required information below in accordance <br/>with the example...
                </h4>
                <div>
                <input value={form.fullname} type="text"  name="fullname" placeholder="Name Surname " onChange={onChangeInput}/>
                <p>e.g. : Deniz Yıldız</p>
                </div>
              

                <div>
                <input value={form.weight} type="text" name="weight" placeholder="Your weight as kg " onChange={onChangeInput}/>
                <p>e.g. : 60 </p>
                </div>
                

                <div>
                <input value={form.height} type="text" name="height" placeholder="Your height as cm" onChange={onChangeInput} />
                <p>e.g. : 172 </p>
                </div>
                

{/* Hidden BMI Result */}
                <input type="hidden" name="bmidegeri" value={form.bmiValue}/>
        
                <button> CALCULATE</button>
                </form>
            </div>


            <div className="formCard2">
                <div id="bmiCalculated">
                </div>

                
                {dietPage && 
                <Router>
                    
                    <button className="dietButton">
                    <NavLink to="/body" exact className="navlinkStyle">
                            Show The Diet Recipes
                    </NavLink>
                    </button>
                    <Switch>
                        <Route path="/body" exact component={Body}/>
                    </Switch>
                    <div id="dietList" >
                    
                    </div>
                    
                </Router>
                }
                
            </div>
        
        </div>
    )
}

export default Form
