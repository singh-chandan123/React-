import './Playbtns.css'

 const Playbtn = () => {
  const pressbtn=()=>{
    console.log("buton is preseed");
  }
  return (
    <div>
   <button  onClick={pressbtn}>play</button>
    </div>

  )
}
export default Playbtn
