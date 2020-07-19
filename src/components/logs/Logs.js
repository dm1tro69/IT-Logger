import React, {useEffect, useState} from "react";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";


const Logs = () => {
    const [logs, setLogs] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('/logs')
            .then(res => res.json())
            .then(setLogs)
            .then(() => setLoading(false))
    }, [setLoading, setLogs])

    if (loading) {
        return <Preloader/>
    }

    return (
        <ul className='collection with-header'>
            <li className='collection-header'>
                <h4 className='center'>System Logs</h4>
            </li>
            {!loading && logs.length === 0 ? (
                <p className='center'>No logs to show...</p>
            ) : (
                logs.map(log => <LogItem log={log} key={log.id}/>)
            )}
        </ul>
    )
}
export default Logs