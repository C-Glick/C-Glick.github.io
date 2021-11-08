import { makeStyles } from '@material-ui/core/styles';
import * as Config from "../static/config";

//Styles used on all project pages
//raw styles used for class based components
export let rawStyles = theme => ({
    root: {
      minHeight:"100vh",
      backgroundImage:  Config.background,
      backgroundSize: "cover",
      backgroundRepeat:"no-repeat",
      backgroundPosition:"center",
      backgroundAttachment:"fixed",
    },
  
    container:{
      flexGrow: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "50px",
      [theme.breakpoints.down("xs")]:{
        padding: "0px",
        paddingTop: "20px",
      }
    },
  
    spacer:{
      minHeight: "80px",
    },
  
    paper: {
      maxWidth: "130rem",
      overflow: "hidden",
      padding: "50px",
      paddingLeft: "80px",
      paddingRight: "80px",
      [theme.breakpoints.down("xs")]:{
        padding: "10px",
        paddingTop: "40px",
      },
      textAlign: 'center',
      backgroundColor: Config.darkGrey,
      color: 'white',
      fontSize: '18px'
    },
  
    title:{
      fontSize: '2em',
      textAlign: 'left',
  
      [theme.breakpoints.down("xs")]:{
        textAlign: "center",
      },
    },
  
    subtitle:{
      textAlign: 'left',
      color: "#A0A0A0",
      [theme.breakpoints.down("xs")]:{
        textAlign: "center",
      },
    },
  
    menuItemIcon:{
      color: "white",
      fontSize: 30,
      [theme.breakpoints.down("xs")]:{
          fontSize: 35,
      },
    },
  
    button:{
      color: "white",
      backgroundColor: Config.mediumGrey,
      margin: "10px",
  
    },
  
    topButton:{
      float: "left",
  
      [theme.breakpoints.down("xs")]:{
        float: "none",
      },
  
    },
  
    para:{
      marginLeft: "auto",
      marginRight: "auto",
      textAlign: "left",
      maxWidth: "80rem",
    },
  
    header:{
      marginLeft: "auto",
      marginRight: "auto",
      textAlign: "left",
      maxWidth: "80rem",
    },
  
    image:{
      padding: "10px",
      width: "50rem",
      [theme.breakpoints.down("md")]:{
        width: "80%",
      },
      [theme.breakpoints.down("xs")]:{
        width: "95%",
        float: "none",
      } 
    },

    imageMedium:{
      padding: "10px",
      width: "35rem",
      [theme.breakpoints.down("md")]:{
        width: "60%",
      },
      [theme.breakpoints.down("xs")]:{
        width: "70%",
        float: "none",
      } 
    },
    
    video:{
      margin: "20px",
      //16:9 aspect ratio   
      width: "800px",
      height: "450px",
  
      [theme.breakpoints.down("md")]:{
        //make sure when this is overflowing its container, this element stays centered
        marginLeft: "50%",
        transform: "translateX(-50%)",
       
        width: "70vw",
        height: "calc(70vw/1.77)",  //16:9
      },
  
      [theme.breakpoints.down("xs")]:{
        width: "90vw",
        height: "calc(90vw/1.77)",  //16:9
        float: "none",
      } 
    },

    link:{
        color: 'deepskyblue',
    },
  
  });

  //page styles used for function based components
  let pageStyles = makeStyles(rawStyles);
  export default pageStyles;