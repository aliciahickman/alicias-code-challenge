const color = 
{
  offwhite: '#faf9f8',
  blue: '#0a5ff7',
  bluedark: '#1044a0',

  graylight: '#d4d2d0',
  graymed: '#949494',
  graydark: '#2d2d2d',
}

const pattern = 
{
  borderColor: '#d4d2d0',
  buttonRadius: '8px',
  tableRadius: '8px',

  wrapperMaxWidth: '900px',
  wrapperMargin: 'auto',
  wrapperWidth: '95%'
}

const font = 
{
  Noto: "'Noto Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  Helvetica: "'Helvetica Neue', Helvetica, Arial, sans-serif",
}
  
export const Theme = {
  ...color,
  ...font,
  ...pattern,
  // attempt at creating button variants that I did not end up using
  buttons: {
    primary: {
      color: 'white',
      backgroundColor: color.blue,
      borderRadius: 8,
      fontWeight: 'bold',
      cursor: 'pointer',
      padding: .875,
      '&;hover': {
        backgroundColor: color.bluedark
      }
    },
    secondary: {
      color: color.blue,
      backgroundColor: 'white',
      borderRadius: 8,
      fontWeight: 'bold',
      cursor: 'pointer'
    }
  }
}