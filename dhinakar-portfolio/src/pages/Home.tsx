import { Box, Container, Typography, Paper, Chip, Button, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import profileImage from '../assets/profile.png';
import aiPractitioner from '../assets/certifications/aipractioner.png';
import solutionsArchitectAssociate from '../assets/certifications/solutionsarchitectassociate.png';
import solutionsArchitectPro from '../assets/certifications/solutionsarchitectprofessional.png';
import reinventImage from '../assets/events/reinvent.png';
import cesImage from '../assets/events/ces2023.png';
import hannovermesseImage from '../assets/events/hannovermesse.png';

const Home = () => {
  return (
    <Box component="main" sx={{ width: '100%' }}>
      {/* Hero Section */}
      <Box
        id="home"
        sx={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          background: 'linear-gradient(to bottom, #0f172a 0%, #1e293b 100%)',
        }}
      >
        {/* Background Gradient */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.4,
            background: 'radial-gradient(circle at top right, rgba(59, 130, 246, 0.1), transparent 50%)',
          }}
        />

        <Container 
          maxWidth="lg" 
          sx={{ 
            position: 'relative',
            zIndex: 2,
            py: { xs: 8, md: 0 },
            mt: '70px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: { xs: 6, md: 8 },
            }}
          >
            {/* Content Section */}
            <Box
              sx={{
                flex: 1,
                width: '100%',
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography 
                  variant="h1" 
                  sx={{ 
                    fontSize: { xs: '2.5rem', md: '4rem' },
                    lineHeight: 1.1,
                    mb: 2,
                    background: 'linear-gradient(45deg, #f8fafc 30%, #60a5fa 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 700,
                  }}
                >
                  Dhinakar Ramamurthy
                </Typography>

                <Typography 
                  variant="h2" 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.9)',
                    mb: 3,
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    lineHeight: 1.3,
                    fontWeight: 500,
                  }}
                >
                  Global Solutions Architect
                  <Box component="span" sx={{ color: 'secondary.main' }}> - Automotive & Manufacturing</Box>
                </Typography>

                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.7)',
                    mb: 4,
                    fontSize: { xs: '1rem', md: '1.25rem' },
                    maxWidth: { xs: '100%', md: '600px' },
                    mx: { xs: 'auto', md: 0 },
                    lineHeight: 1.6,
                  }}
                >
                  Driving digital transformation through IoT, AI, and cloud solutions. 
                  Specializing in automotive manufacturing and supply chain innovation.
                </Typography>

                {/* Certification Badges */}
                <Box
                  sx={{
                    display: 'flex',
                    gap: 3,
                    mb: 4,
                    justifyContent: { xs: 'center', md: 'flex-start' },
                    flexWrap: 'wrap',
                  }}
                >
                  <motion.img
                    src={solutionsArchitectPro}
                    alt="AWS Solutions Architect Professional"
                    style={{
                      width: '85px',
                      height: '85px',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      filter: 'drop-shadow(0 8px 12px rgba(0, 0, 0, 0.2))',
                    }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.img
                    src={solutionsArchitectAssociate}
                    alt="AWS Solutions Architect Associate"
                    style={{
                      width: '85px',
                      height: '85px',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      filter: 'drop-shadow(0 8px 12px rgba(0, 0, 0, 0.2))',
                    }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.img
                    src={aiPractitioner}
                    alt="AWS AI Practitioner"
                    style={{
                      width: '85px',
                      height: '85px',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      filter: 'drop-shadow(0 8px 12px rgba(0, 0, 0, 0.2))',
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </Box>

                {/* Action Buttons */}
                <Box 
                  sx={{ 
                    display: 'flex', 
                    gap: 2, 
                    mb: 4,
                    justifyContent: { xs: 'center', md: 'flex-start' },
                  }}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    href="#contact"
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1.125rem',
                      background: 'linear-gradient(45deg, #2563eb 30%, #3b82f6 90%)',
                      boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.2)',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 8px -1px rgba(37, 99, 235, 0.3)',
                      },
                      transition: 'all 0.2s',
                    }}
                  >
                    Get in Touch
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    href="#about"
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1.125rem',
                      color: 'white',
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                      '&:hover': {
                        borderColor: 'white',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.2s',
                    }}
                  >
                    Learn More
                  </Button>
                </Box>

                {/* Social Links */}
                <Box 
                  sx={{ 
                    display: 'flex', 
                    gap: 2,
                    justifyContent: { xs: 'center', md: 'flex-start' },
                  }}
                >
                  <IconButton
                    href="https://www.linkedin.com/in/dhinakarram/"
                    target="_blank"
                    aria-label="LinkedIn Profile"
                    sx={{ 
                      color: 'white',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(12px)',
                      '&:hover': { 
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        transform: 'translateY(-2px)',
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                      },
                      transition: 'all 0.2s',
                    }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Box>
              </motion.div>
            </Box>

            {/* Image Section */}
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                position: 'relative',
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                {/* Background Glow */}
                <Box
                  sx={{
                    position: 'absolute',
                    width: { xs: '280px', md: '400px' },
                    height: { xs: '280px', md: '400px' },
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                    transform: 'translate(-50%, -50%)',
                    top: '50%',
                    left: '50%',
                  }}
                />

                <Box
                  component="img"
                  src={profileImage}
                  alt="Dhinakar Ramamurthy"
                  sx={{
                    width: { xs: '280px', md: '400px' },
                    height: { xs: '280px', md: '400px' },
                    borderRadius: '24px',
                    objectFit: 'cover',
                    border: '2px solid rgba(59, 130, 246, 0.2)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.3)',
                      borderColor: 'rgba(59, 130, 246, 0.4)',
                    },
                    position: 'relative',
                    zIndex: 1,
                  }}
                />
              </motion.div>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* About Section */}
      <Box 
        id="about" 
        sx={{ 
          position: 'relative',
          py: { xs: 12, md: 16 },
          bgcolor: 'background.default',
        }}
      >
        <Container maxWidth="lg">
          {/* Main Content */}
          <Box sx={{ maxWidth: '800px', mb: 10 }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 700,
                mb: 1,
                background: 'linear-gradient(90deg, #f8fafc 30%, #60a5fa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              About Me
            </Typography>
            
            <Typography
              variant="h5"
              sx={{
                color: 'primary.main',
                fontWeight: 500,
                mb: 6,
              }}
            >
              30+ Years of Technical Excellence
            </Typography>

            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                lineHeight: 1.8,
                mb: 4,
                color: 'text.primary',
              }}
            >
              Hi, I'm Dhinakar – a digital transformation enthusiast with a strong passion for leveraging emerging technologies like the Internet of Things (IoT) and Generative AI (GenAI) to drive innovation in the manufacturing and supply chain sectors.
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                lineHeight: 1.8,
                color: 'text.primary',
              }}
            >
              With a deep-rooted focus on Automotive and Industrial domains, I strive to deliver world-class solutions that not only optimize processes but also enhance the end-to-end customer experience. As a trusted technical advisor, I take a customer-centric approach—understanding each client's unique challenges and crafting tailored strategies that lead to tangible results.
            </Typography>
          </Box>

          {/* Events Section */}
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: '1.75rem', md: '2rem' },
                fontWeight: 600,
                mb: 4,
              }}
            >
              Events & Conferences
            </Typography>

            <Box 
              sx={{ 
                display: 'grid',
                gridTemplateColumns: { 
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(3, 1fr)',
                },
                gap: 4,
              }}
            >
              {/* Hannover Messe */}
              <Paper
                elevation={0}
                sx={{
                  overflow: 'hidden',
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={hannovermesseImage}
                  alt="Hannover Messe 2025"
                  sx={{
                    width: '100%',
                    height: '240px',
                    objectFit: 'cover',
                  }}
                />
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Hannover Messe 2025
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Hannover, Germany
                  </Typography>
                </Box>
              </Paper>

              {/* AWS re:Invent */}
              <Paper
                elevation={0}
                sx={{
                  overflow: 'hidden',
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={reinventImage}
                  alt="AWS re:Invent 2024"
                  sx={{
                    width: '100%',
                    height: '240px',
                    objectFit: 'cover',
                  }}
                />
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    AWS re:Invent 2024
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Las Vegas, Nevada
                  </Typography>
                </Box>
              </Paper>

              {/* CES */}
              <Paper
                elevation={0}
                sx={{
                  overflow: 'hidden',
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={cesImage}
                  alt="CES 2023"
                  sx={{
                    width: '100%',
                    height: '240px',
                    objectFit: 'cover',
                  }}
                />
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    CES 2023
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Las Vegas, Nevada
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box 
        id="skills" 
        sx={{ 
          py: { xs: 12, md: 16 },
          bgcolor: '#0f172a',
          position: 'relative',
        }}
      >
        {/* Background Gradient */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.4,
            background: 'radial-gradient(circle at top right, rgba(59, 130, 246, 0.1), transparent 50%)',
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ maxWidth: '800px', mx: 'auto', mb: 8, textAlign: 'center' }}>
            <Typography 
              variant="h3"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 700,
                mb: 3,
                background: 'linear-gradient(90deg, #f8fafc 30%, #60a5fa 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Areas of Expertise
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '1.1rem',
                lineHeight: 1.6,
              }}
            >
              Specialized knowledge and experience across key technological and management domains
            </Typography>
          </Box>

          <Box 
            sx={{ 
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
            }}
          >
            {/* Technology & Innovation */}
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 2,
                bgcolor: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 4, flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
                <Box sx={{ minWidth: { xs: '100%', md: '240px' } }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: '#f8fafc',
                      mb: { xs: 2, md: 0 },
                    }}
                  >
                    Technology & Innovation
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {[
                    'GenAI',
                    'Generative AI with Large Language Models',
                    'Artificial Intelligence (AI)',
                    'Internet of Things (IoT)',
                    'AWS IoT',
                    'Digital Twin',
                    'Industry 4.0',
                    'Integration',
                    'SOA',
                    'SQL',
                    'Data Analysis'
                  ].map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      sx={{
                        bgcolor: 'rgba(255, 255, 255, 0.05)',
                        color: 'rgba(255, 255, 255, 0.9)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        '&:hover': {
                          bgcolor: 'rgba(255, 255, 255, 0.1)',
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Paper>

            {/* Manufacturing & Supply Chain */}
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 2,
                bgcolor: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 4, flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
                <Box sx={{ minWidth: { xs: '100%', md: '240px' } }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: '#f8fafc',
                      mb: { xs: 2, md: 0 },
                    }}
                  >
                    Manufacturing & Supply Chain
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {[
                    'Manufacturing',
                    'Supply Chain Management',
                    'Supply Management',
                    'Vendor Management',
                    'Global Delivery',
                    'Service Delivery',
                    'Business Transformation',
                    'Solutions Provider',
                    'Telecommunications'
                  ].map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      sx={{
                        bgcolor: 'rgba(255, 255, 255, 0.05)',
                        color: 'rgba(255, 255, 255, 0.9)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        '&:hover': {
                          bgcolor: 'rgba(255, 255, 255, 0.1)',
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Paper>

            {/* Project Management */}
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 2,
                bgcolor: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 4, flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
                <Box sx={{ minWidth: { xs: '100%', md: '240px' } }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: '#f8fafc',
                      mb: { xs: 2, md: 0 },
                    }}
                  >
                    Project Management & Leadership
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {[
                    'Project Management',
                    'Program Management',
                    'Resource Management',
                    'PMP',
                    'CMMI',
                    'Leadership',
                    'Team Management',
                    'Management',
                    'Strategic Planning',
                    'IT Strategy',
                    'Governance'
                  ].map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      sx={{
                        bgcolor: 'rgba(255, 255, 255, 0.05)',
                        color: 'rgba(255, 255, 255, 0.9)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        '&:hover': {
                          bgcolor: 'rgba(255, 255, 255, 0.1)',
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Paper>

            {/* Software Development & Quality */}
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 2,
                bgcolor: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 4, flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
                <Box sx={{ minWidth: { xs: '100%', md: '240px' } }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: '#f8fafc',
                      mb: { xs: 2, md: 0 },
                    }}
                  >
                    Software Development & Quality
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {[
                    'Software Development Life Cycle (SDLC)',
                    'Software Quality Assurance',
                    'Quality Assurance',
                    'Testing',
                    'System Testing',
                    'Integration Testing',
                    'User Acceptance Testing',
                    'Testing Services',
                    'Requirements Analysis',
                    'Requirements Gathering',
                    'Business Analysis',
                    'Agile Methodologies'
                  ].map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      sx={{
                        bgcolor: 'rgba(255, 255, 255, 0.05)',
                        color: 'rgba(255, 255, 255, 0.9)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        '&:hover': {
                          bgcolor: 'rgba(255, 255, 255, 0.1)',
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Paper>
          </Box>
        </Container>
      </Box>

      {/* Experience Section */}
      <Box 
        id="experience" 
        sx={{ 
          py: { xs: 12, md: 16 },
          bgcolor: '#0f172a',
          position: 'relative',
        }}
      >
        {/* Background Gradient */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.4,
            background: 'radial-gradient(circle at top right, rgba(59, 130, 246, 0.1), transparent 50%)',
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography 
            variant="h3"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 3,
              textAlign: 'center',
              background: 'linear-gradient(90deg, #f8fafc 30%, #60a5fa 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Professional Journey
          </Typography>

          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              mb: 8,
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '700px',
              mx: 'auto',
              fontSize: '1.1rem',
            }}
          >
            A career path marked by innovation, leadership, and continuous growth
          </Typography>

          <Box sx={{ position: 'relative' }}>
            {/* Timeline Line */}
            <Box
              sx={{
                position: 'absolute',
                left: { xs: 20, sm: 36 },
                top: 0,
                bottom: 0,
                width: '2px',
                bgcolor: 'rgba(59, 130, 246, 0.2)',
              }}
            />

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {[
                {
                  position: "Global Solutions Architect - Automotive & Manufacturing",
                  company: "Amazon Web Services (AWS)",
                  duration: "Oct 2020 – Present (4 yrs 7 mos)",
                  location: "Munich, Germany",
                  type: "Full-time",
                  responsibilities: [
                    "Design solution architectures for automotive customers in manufacturing and supply chain.",
                    "Develop solutions using IoT, Machine Learning, and GenAI.",
                    "Act as a field CTO, providing product feedback to AWS engineering teams."
                  ]
                },
                {
                  position: "Sr. Manager / Solutions Architect – IoT | Cloud | Blockchain | Test Automation",
                  company: "Renault Nissan Mitsubishi Alliance",
                  duration: "Jul 2017 – Oct 2020 (3 yrs 4 mos)",
                  location: "Chennai, India",
                  type: "Full-time",
                  responsibilities: [
                    "Technical consulting and delivery of digital assurance solutions.",
                    "Focused on IoT, Blockchain, Cloud, and Automation platforms for global business units."
                  ]
                },
                {
                  position: "Director – Digital Assurance & Automation Services",
                  company: "Virtusa",
                  duration: "Jul 2015 – Jul 2017 (2 yrs 1 mo)",
                  location: "Chennai Area, India",
                  type: "Full-time",
                  responsibilities: [
                    "Focused on automation, innovation in digital labor solutions, and delivery excellence.",
                    "Drove account growth and team building through strategic initiatives."
                  ]
                },
                {
                  position: "Associate Director – Quality Engineering & Testing",
                  company: "Cognizant",
                  duration: "Jun 2014 – Jun 2015 (1 yr 1 mo)",
                  location: "Chennai Area, India",
                  type: "Full-time",
                  responsibilities: [
                    "Led QA to QE transformation, cycle-time reduction, and solution differentiation.",
                    "Focused on improving delivery and quality excellence."
                  ]
                },
                {
                  position: "Deputy General Manager – Testing Services",
                  company: "HCL Technologies",
                  duration: "May 2010 – May 2014 (4 yrs 1 mo)",
                  location: "London Area, United Kingdom",
                  type: "Full-time",
                  responsibilities: [
                    "Led cost optimization, QA transformation, and banking IT integration.",
                    "Built Lloyds Banking testing team from scratch and transitioned the account to managed services."
                  ]
                },
                {
                  position: "Senior Consultant – Software Testing Services",
                  company: "Hexaware Technologies",
                  duration: "Dec 2006 – Apr 2010 (3 yrs 5 mos)",
                  location: "New York, United States",
                  type: "Full-time",
                  responsibilities: [
                    "Focused on revenue growth, team building, and client relationship management."
                  ]
                },
                {
                  position: "Associate Consultant – UMTS 3G Networks",
                  company: "Siemens",
                  duration: "Mar 2000 – Nov 2006 (6 yrs 9 mos)",
                  location: "Munich Area, Germany",
                  type: "Full-time",
                  responsibilities: [
                    "Handled system integration testing, defect control, change management, and release planning."
                  ]
                },
                {
                  position: "Customer Support Engineer – IVR & Contact Centre Solutions",
                  company: "Bay Talkitec (P) Ltd.",
                  duration: "Jul 1997 – Feb 2000 (2 yrs 8 mos)",
                  location: "Mumbai Area, India",
                  type: "Full-time",
                  responsibilities: [
                    "System implementation of contact center solutions and performance testing.",
                    "Conducted market studies to enhance competitive advantage."
                  ]
                },
                {
                  position: "Tea and snacks Stall - Server",
                  company: "Part Time",
                  duration: "1992-1993",
                  location: "India",
                  type: "Part-time",
                  responsibilities: [
                    "Delivering Tea and snacks to customers and cleaning"
                  ]
                }
              ].map((exp, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    position: 'relative',
                    pl: { xs: '48px', sm: '80px' },
                  }}
                >
                  {/* Timeline Dot */}
                  <Box
                    sx={{
                      position: 'absolute',
                      left: { xs: '16px', sm: '32px' },
                      top: '24px',
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      bgcolor: '#3b82f6',
                      zIndex: 2,
                    }}
                  />

                  <Paper
                    elevation={0}
                    sx={{
                      width: '100%',
                      p: { xs: 3, sm: 4 },
                      bgcolor: 'rgba(255, 255, 255, 0.03)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: 2,
                    }}
                  >
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        sx={{
                          color: '#3b82f6',
                          fontWeight: 600,
                          fontSize: '0.95rem',
                          mb: 1,
                        }}
                      >
                        {exp.duration}
                      </Typography>
                      <Typography
                        sx={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          fontSize: '0.9rem',
                        }}
                      >
                        {exp.location} • {exp.type}
                      </Typography>
                    </Box>

                    <Typography
                      variant="h6"
                      sx={{
                        color: '#f8fafc',
                        fontWeight: 600,
                        mb: 1,
                        fontSize: { xs: '1.1rem', sm: '1.25rem' },
                        lineHeight: 1.3,
                      }}
                    >
                      {exp.position}
                    </Typography>

                    <Typography
                      sx={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontWeight: 500,
                        mb: 3,
                        fontSize: '1rem',
                      }}
                    >
                      {exp.company}
                    </Typography>

                    <Box 
                      sx={{ 
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                      }}
                    >
                      {exp.responsibilities.map((resp, i) => (
                        <Box
                          key={i}
                          sx={{
                            display: 'flex',
                            gap: 2,
                          }}
                        >
                          <Box
                            sx={{
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              bgcolor: '#3b82f6',
                              flexShrink: 0,
                              mt: 1,
                            }}
                          />
                          <Typography
                            sx={{
                              color: 'rgba(255, 255, 255, 0.7)',
                              fontSize: '0.95rem',
                              lineHeight: 1.5,
                            }}
                          >
                            {resp}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Paper>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box 
        id="contact" 
        sx={{ 
          py: { xs: 12, md: 16 },
          bgcolor: '#0f172a',
          position: 'relative',
        }}
      >
        {/* Background Gradient */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.4,
            background: 'radial-gradient(circle at top right, rgba(59, 130, 246, 0.1), transparent 50%)',
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box 
            sx={{ 
              maxWidth: '800px',
              mx: 'auto',
              textAlign: 'center',
            }}
          >
            <Typography 
              variant="h3"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 700,
                mb: 3,
                background: 'linear-gradient(90deg, #f8fafc 30%, #60a5fa 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Let's Connect
            </Typography>

            <Typography 
              variant="body1" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '1.1rem',
                lineHeight: 1.6,
                mb: 6,
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              Looking to discuss innovative solutions in automotive manufacturing or digital transformation? Connect with me on LinkedIn for professional inquiries and collaborations.
            </Typography>

            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<LinkedInIcon />}
              href="https://www.linkedin.com/in/dhinakarram/"
              target="_blank"
              sx={{
                py: 2,
                px: 4,
                fontSize: '1.1rem',
                background: 'linear-gradient(45deg, #2563eb 30%, #3b82f6 90%)',
                boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.2)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 8px -1px rgba(37, 99, 235, 0.3)',
                },
                transition: 'all 0.2s',
              }}
            >
              Connect on LinkedIn
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 