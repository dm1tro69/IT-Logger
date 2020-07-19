import React, {useEffect, useState} from "react";
import TechItem from "./TechItem";


const TechListModal = () => {
    const [techs, setTechs] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('/techs')
            .then(res => res.json())
            .then(setTechs)
            .then(() => setLoading(false))
    }, [setLoading, setTechs])



    return (
       <div id={'tech-list-modal'} className={'modal'}>
           <div className="modal-content">
               <h4>Technician List</h4>
               <ul className={'collection'}>
                   {!loading && techs.map(tech => (
                      <TechItem key={tech.id} tech={tech}/>
                   ))}
               </ul>
           </div>

       </div>
    )
}
export default TechListModal