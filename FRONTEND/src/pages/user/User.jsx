import "./user.css";

export default function User() {
  return (
    <div>
        <div className="wrapper">
            <div className="userHeader">Edit the user</div>
            <div className="update"><button>Edit</button></div>
        </div>

        <div className="userMain">
            <div className="mainLeft">
                <div className="userInfo">
                    <img  className="userimg" src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" srcset=""/>
                    <div className="userName">
                        <h4>kashay</h4>
                        <h5>Sofare enginner</h5>
                    </div>
                </div>

                <div className="accountDetail">
                    <h2>accountDetail</h2>
                    <div className="name">name is here</div>
                    <div className="date">date here</div>
                </div>

                <div className="addressDetail">
                    <h2>accountDetail</h2>
                    <div className="number">name is here</div>
                    <div className="email">date here</div>
                    <div className="address">address goes here</div>
                </div>
            </div>
            <div className="mainRight">
                <div className="editUser">EDit User</div>
            </div>
        </div>
    </div>
  )
}
