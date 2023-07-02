import LocationOnIcon from "@mui/icons-material/LocationOn";
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';

const Jobstitle = ({ para, title }) => {
  return (
    <div className="pop-list">
        <div className="circle">
            <p>J</p>
        </div>
      <div className="desc">
        <p className="para">{para}</p>
        <h1 className="tit-desc">{title}</h1>
        <div className="location">
          <p>
            <span className="loc">
              <LocationOnIcon/> Naikap,Ktm
            </span>  
            <span className="time">
                <FullscreenExitIcon/>  Full Time
            </span>
            <span>
                Ksh 9,00,000
            </span>
          </p>
        </div>
      </div>

      <div className="btn-view">
        <button>View Details</button>
      </div>
    </div>
  );
};

export default Jobstitle;
