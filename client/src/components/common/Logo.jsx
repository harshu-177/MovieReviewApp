import { Typography, useTheme } from '@mui/material';

const Logo = () => {
  const theme = useTheme();

  return (
    <Typography fontWeight="700" fontSize="1.7rem">
      Cine<span style={{ color: theme.palette.primary.main }}>Scope</span>
    </Typography>
  );
};

export default Logo;