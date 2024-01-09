
import Playbtn from './Components/Playbtn';
import Forms from './Components/Forms' ;
import LiftingStateUp from './Components/LiftingStateUp';
import Useeffect  from './Components/Useeffect';
import Usereducerhook from './Components/Usereducerhook';
import ClassA from './PropDrillingComponent/ClassA';
const App = () => {
  function getdata(data){
console.log(data);

  }
  const username='abcde';
  return (
    <div>
 <Playbtn></Playbtn>

 <Forms></Forms>
 {/* here we create getdata fun and pass it props so that we can recieve parameter and print */}
 <LiftingStateUp getdata={getdata} ></LiftingStateUp> 
 <br/>
 <Useeffect></Useeffect>
 
 <br/>
<Usereducerhook></Usereducerhook>
<br/>
<br/>
<br/>
<ClassA name={username}></ClassA>

    </div>
    
   


  )
}
export default App;

