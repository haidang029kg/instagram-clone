import React from 'react'
import './Post.css'
import Avatar from '@material-ui/core/Avatar';

function Post() {
    const avatarLink = "https://scontent-hkg4-1.xx.fbcdn.net/v/t1.0-1/p200x200/118711124_4290533784352557_6418839096425814017_n.jpg?_nc_cat=102&ccb=2&_nc_sid=7206a8&_nc_ohc=TqTPEPG1D4YAX9YY0N2&_nc_ht=scontent-hkg4-1.xx&tp=6&oh=d4ee0854de5fa8cb54b75e42f2a25af7&oe=6029FAC4"
    const logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTAAFx4I18HLwD6GiTym73xA13MiUyLJh1Jg&usqp=CAU"
    return (
        <div className="post">
            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    src={avatarLink}
                    alt=""
                />
                <h3>Username</h3>
            </div>

            <img className="post__image" src={logo} alt="" />
            <h4 className="post__text"><strong>VNHD</strong>  wowowowow</h4>
        </div>
    )
}

export default Post
