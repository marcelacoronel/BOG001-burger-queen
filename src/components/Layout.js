import Nav from "./Nav";

const Layout = (props) => {
    return (
        <div className="divLayout">
            <div className="divNav"><Nav /></div>
            <div className="divChildren">{props.children}</div>
        </div>
    )
}

export default Layout;

