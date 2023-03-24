import '../App.css';

function Header(props) {
    return (
        <div className='flex shopping-card navbar navbar-dark bg-dark nav' style={{fontFamily: "Times New Roman" ,color: "white"}}>
            <div onClick={() => props.handleShow(false)} >Shopping Cart App</div>
            <div onClick={() => props.handleShow(true)}> Cart
                <sup> {props.count} </sup>
            </div>
        </div>
    );
}

export default Header;