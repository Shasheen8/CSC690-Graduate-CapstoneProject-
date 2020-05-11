// taking theme which is an argument provided by material-ui, using it into a function and returns an object which has various parameters.
//using these parameters for the styles. 

const styles = theme => ({
    signOutBtn: {
      position: 'absolute',
      bottom: '0px',
      left: '0px',
      width: '300px',
      borderRadius: '0px',
      backgroundColor: '#227092',
      height: '35px',
      boxShadow: '0px 0px 2px black',
      color: 'white'
    }
  });
  
  export default styles;
