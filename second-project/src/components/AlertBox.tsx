interface AlertBoxProp{
    message:string
    type: 'danger'|'warning'|'success'
}

function AlertBox({message,type}:AlertBoxProp){
    return <div className={`alert alert-${type}`}>{message}</div>;
}

export default AlertBox
