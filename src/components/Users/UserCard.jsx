import { Card, CardContent, CardMedia, Typography, ButtonGroup, Button, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { deleteUser } from '../../services/api';
import EditUser from './EditUser';
import { useNavigate } from 'react-router-dom';

const UserCard = ({ user }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleDelete = async () => {
    setIsDeleting(true);
    setError('');
    try {
      await deleteUser(user.id);
      navigate(0); 
    } catch (err) {
      setError(err || 'Failed to delete user');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="140"
        image={user.avatar}
        alt={`${user.first_name} ${user.last_name}`}
        sx={{ objectFit: 'contain', pt: 1 }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {user.first_name} {user.last_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.email}
        </Typography>
      </CardContent>
      <Box sx={{ p: 2 }}>
        <ButtonGroup fullWidth>
          <Button 
            variant="contained" 
            startIcon={<EditIcon />}
            onClick={() => setOpenEdit(true)}
          >
            Edit
          </Button>
          <Button 
            variant="outlined" 
            color="error" 
            startIcon={<DeleteIcon />}
            onClick={handleDelete}
            disabled={isDeleting}
          >
            {isDeleting ? 'Deleting...' : 'Delete'}
          </Button>
        </ButtonGroup>
        {error && (
          <Typography color="error" variant="body2" sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}
      </Box>

      <EditUser 
        open={openEdit} 
        handleClose={() => setOpenEdit(false)} 
        user={user} 
      />
    </Card>
  );
};

export default UserCard;