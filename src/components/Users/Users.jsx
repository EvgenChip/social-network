import React from 'react'
import styles from "./users.module.css"
import userPhoto from "../../photoUsers/userPhoto.png"
import { NavLink } from 'react-router-dom'




let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                    onClick={(e) => { props.onePageChanged(p) }} >{p}</span>
            })}
        </div>
        {
            props.users.map(u => {
                return <div key={u.id} >
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.unfollow(u.id)
                                }}>Follow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.follow(u.id)

                                }}>Unfollow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>
                                {u.name}
                                {u.firstName}
                            </div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.city"}</div>
                            <div>{"u.location.country"}</div>
                        </span>
                    </span>
                </div>
            }
            )
        }
    </div >

}

export default Users