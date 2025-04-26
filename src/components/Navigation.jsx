import './Navigation.css';

function Navigation() {
    return (
        <>
            <div className="navContainer">
                <div className="navCategories">
                    <h3>Not Crunchyroll</h3>
                    <h4>This Season</h4>
                    <h4>Browse By</h4>
                    <h4>Watchlist</h4>
                    <h4>Subscribed</h4>
                </div>
                <div className="navUser">
                    <i className="fa-solid fa-circle-user"></i>
                </div>
            </div>
        </>
    );
}

export default Navigation;