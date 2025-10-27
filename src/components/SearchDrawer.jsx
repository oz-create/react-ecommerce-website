import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { TextField } from '@mui/material';
import Search from '/assets/search-icon.svg'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMemo } from 'react';

export default function SearchDrawer() {
  const { products } = useSelector((state) => state.product);
  const [state, setState] = useState({
    top: false
  });
  const [search, setSearch] = useState("");

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const filteredProducts = useMemo(() => {
    if (!search.trim()) return [];
    return products.filter(product =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, products]);

   const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const list = (anchor) => (
     <Box
      sx={{ p: 2, backgroundColor: "var(--light-color)" }}
      role="presentation"
    >
      <TextField
        fullWidth
        placeholder="Search..."
        variant="outlined"
        value={search}
        onChange={handleSearch}
        sx={{
          "& .MuiOutlinedInput-root": {
            color: "var(--color-primary)",
            "& fieldset": {
              borderColor: "var(--color-primary)",
              borderRadius: "0.7rem"
            },
            "&:hover fieldset": { borderColor: "var(--color-primary)" },
            "&.Mui-focused fieldset": { borderColor: "var(--color-primary)" },
          },
          "& .MuiInputBase-input::placeholder": { color: "var(--color-primary)", opacity: 1 },
        }}
      />
      <List>
        {filteredProducts.map((product, index) => (
          <Link to={"/" + product.id}  key={index}>
            <ListItemButton
              onClick={() => {
                setState({ top: false }); // drawer kapansın
                setSearch(""); // search temizlensin
              }}>
              <img src={product.images[0]} alt={product.title} width={100} height={100} className='rounded-lg w-[4.5rem] h-[4.5rem] object-cover mr-3' />
              <p className='text-base text-[var(--color-primary)]'>{product.title}</p>
          </ListItemButton>
          </Link>
        
        ))}
    
      </List>
    </Box>
  );

  return (
    <div>
      {['top'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} sx={{ m: 0, p: 0, minWidth: "2rem" }}>
            <img src={Search} alt="search icon" />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
