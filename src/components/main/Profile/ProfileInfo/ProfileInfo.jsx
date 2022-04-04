import React from 'react';
import {Avatar, Button} from "@mui/material";

const profileWrapper = {
    display: "grid",
    gridTemplateColumns: "2fr 8fr",
    gap: "1rem"
}

const infoStyles = {
    width: "60vw"
}

const ProfileInfo = ({sendFriendshipRequestHandler, isOwner, isFriend, profileInfo: {nameSurname, description, age, hobbies}}) => {
    return (
        <div style={profileWrapper}>
            <Avatar style={{backgroundColor: "white"}} sx={{width: 100, height: 100}} alt="userImg"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/1200px-OOjs_UI_icon_userAvatar.svg.png"/>
            <div style={infoStyles}>
                <h2>{nameSurname}</h2>
                <div>
                    <p>{age}</p>
                    <p>{description}</p>
                    <p>{hobbies}</p>
                </div>
                {
                    isOwner || isFriend
                        ? ''
                        : <Button onClick={sendFriendshipRequestHandler} variant="contained" size={"small"}>Add to friends</Button>
                }
            </div>
        </div>
    );
}

export default ProfileInfo;