import { useEffect, useState } from "react"


export const useWindowSize = () =>{
    const [size, setSize] = useState([window.innerWidth, window.innerHeight])

    useEffect(() => {
        const updateSize = () => {
            setSize([window.innerWidth, window.innerHeight])
        }
        window.addEventListener('resize', updateSize)     // every time size is varied the function will be fired 

        return () => window.removeEventListener('resize', updateSize)   // cleanup the event listner 
    }, [])

    return {
        width: size[0],
        height: size[1]
    }
}