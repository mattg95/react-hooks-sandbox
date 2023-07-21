import { useEffect } from 'react';

const HookComponent = ({prop}) => {
    console.log("rendering",prop);
  
    useEffect(() => {
      console.log("hook firing")
    },[prop])
    return <div><h1>You're a crook,{prop} captain hook!</h1></div>
}

export default HookComponent