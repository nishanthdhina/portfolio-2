import { useState } from 'react';
import { AppBar, Box, Container, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: 'transparent',
        boxShadow: 'none',
        borderRadius: 0,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(15, 23, 42, 0.8)',
          backdropFilter: 'blur(8px)',
          zIndex: -1,
          opacity: 0,
          transition: 'opacity 0.3s ease',
          borderRadius: 0,
        },
        '&.scrolled::before': {
          opacity: 1,
        },
      }}
      className={window.scrollY > 50 ? 'scrolled' : ''}
    >
      <Container 
        maxWidth="lg"
        sx={{
          borderRadius: 0,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 70,
            borderRadius: 0,
          }}
        >
          <Box
            component="a"
            href="#home"
            sx={{
              fontSize: '1.5rem',
              fontWeight: 600,
              color: 'white',
              textDecoration: 'none',
              letterSpacing: '0.5px',
              borderRadius: 0,
            }}
          >
            Dhinakar .R
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 4,
              borderRadius: 0,
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.label}
                href={item.href}
                sx={{
                  color: 'white',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  textTransform: 'none',
                  position: 'relative',
                  borderRadius: 0,
                  padding: '6px 0',
                  minWidth: 'auto',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: '100%',
                    height: '2px',
                    backgroundColor: 'secondary.main',
                    transform: 'scaleX(0)',
                    transformOrigin: 'right',
                    transition: 'transform 0.3s ease',
                  },
                  '&:hover::after': {
                    transform: 'scaleX(1)',
                    transformOrigin: 'left',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{
              display: { xs: 'flex', md: 'none' },
              color: 'white',
              borderRadius: 0,
              padding: '8px',
            }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Box>

        {/* Mobile Menu */}
        {isOpen && (
          <Box
            sx={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'rgba(15, 23, 42, 0.95)',
              backdropFilter: 'blur(8px)',
              zIndex: 1,
              borderRadius: 0,
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.label}
                fullWidth
                href={item.href}
                onClick={() => setIsOpen(false)}
                sx={{
                  color: 'white',
                  py: 2,
                  justifyContent: 'flex-start',
                  pl: 4,
                  textTransform: 'none',
                  borderRadius: 0,
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}
      </Container>
    </AppBar>
  );
};

export default Header; 