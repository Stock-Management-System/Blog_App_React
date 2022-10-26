import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { CardMedia, Box, Paper, Button, Typography, IconButton } from '@mui/material'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'



const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  const [camera, setCamera] = useState(false)
  const [profilePic, setProfilePic] = useState("");
  const [userName, setUserName] = useState("");
  const [bio, setBio] = useState("");

  return (
    <Box style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", margin: "1rem" }}>
      <Paper>
        <CardMedia
          component="img"
          image={currentUser.profile_pic}
          alt={currentUser.username}
          sx={{ width: 500 }}
        />
      </Paper>

      <IconButton color="primary" aria-label="upload picture" component="label">
        {camera &&
          <>
            <input value={url} onChange={(e)=> setUrl(e.target.value)} type="url" placeholder='Photo URL..' />
            <Button onClick={() => updateProfile({profile_pic: url}) }>Update</Button>
          </>
        }

        <PhotoCamera onClick={() => setCamera(!camera)} />
      </IconButton>
      <Box>
        <Typography>
          {currentUser.username}
        </Typography>
      </Box>


    </Box>
  )
}

export default Profile
