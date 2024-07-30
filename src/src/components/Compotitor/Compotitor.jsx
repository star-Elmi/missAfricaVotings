import './Compotitior.scss';
import { MdOutlineHowToVote } from "react-icons/md";
import { useDispatch } from "react-redux";
import { handleModal } from "../../features/modal/modalSlice";
import { addCompetitor } from "../../features/Competitor/competitorSlice";


export const Compotitor = ({ competitor }) => {
  const dispatch = useDispatch();

  const voteNow = () => {
    dispatch(addCompetitor(competitor))
    dispatch(handleModal());
  }

    const backgroundStyle = {
		width: "100%",
		// height: "500px",
		background: `linear-gradient(0deg,#128b4871,rgba(0,0,0,0) 60%,rgba(0,0,0,0)),url(${competitor.Photo})`,
      backgroundSize: "cover",
    backgroundPosition: "center",
    // backgroundBlendMode: "overlay",
		backgroundRepeat: "no-repeat",
    };
    
  return (
      <div className="competitor" style={backgroundStyle}>
          <div className="info">
              <span className="name" key={competitor.id}>{competitor.FirstName}</span>
              <span className="state">{competitor.RepresentingState}</span>
              <span className="vote_count"> <b>Total VOTES:</b> {competitor.NumberofVotes}</span>
          </div>
          <div className="icon" onClick={voteNow}>
          <MdOutlineHowToVote  className='icon'/>
          </div>
      </div>
  )
}
