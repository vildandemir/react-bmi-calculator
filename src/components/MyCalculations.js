import {useContext} from 'react'
import DietContext from '../context/DietContext'


function MyCalculations() {

//Storage information from context

    const {Storage} = useContext(DietContext);
    let users = Storage.getCalculatedUsers();

//clear calculated users from Local Storage and UI
    let clearUsers = ()=>{

        const ul = document.getElementById("list");
        //from LS
        if(users){
            Storage.clearCalculatedUsers();

            //from UI
            ul.remove();
        }
    };

    const myStyle = {
        color: "white",
        backgroundColor: "darkslategray",
        fontFamily: "Arial",
        fontSize: "16px",
        fontStyle:"italic"
    };

    return (
        <div>
                <ul id="list"> 
                    {   
                        users.map((user,i)=>
                        <li key={i} id="li">
                        <div className="calculatedList">
                        <h5 style={myStyle}>Name Surname:{user.fullname},<br/>                    
                        Weight: {user.weight},  <br/>                          
                        Height:{user.height},  <br/>                         
                        BMI: {user.bmiValue}</h5>
                        </div>
                        </li>
                        )
                    }
                </ul>
                <button onClick={clearUsers}>
                        DELETE ALL
                </button>
            
        </div>
    )
}

export default MyCalculations
