import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  downloadButton: {
    borderRadius: '4px 0 0 4px',
  },
  dropdownButton: {
    padding: '0 8px',
    minWidth: '24px',
    borderRadius: '0 4px 4px 0',
  },
  divider: {
    width: '1px',
  },
  menu: {
    padding: '0',
    '& > *': {
      margin: '0',
      padding: '0.5rem 1rem',
    },
  },
  icon: {
    size: '24px',
  },
}));