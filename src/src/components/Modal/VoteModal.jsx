import Modal from "react-modal";
import "./VoteModal.scss";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { handleModal } from "../../features/modal/modalSlice";
import {
  inCreaseVote,
  decreaseVote,
  addVoteToCompetitor,
  resetState,
} from "../../features/Competitor/competitorSlice";

// Model Link
// https://github.com/reactjs/react-modal

// react Redux
// https://stackoverflow.com/questions/51064041/why-we-need-redux-in-react?newreg=3cd3cd70335d4c178d22dfa2eaeeb060

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const VoteModal = () => {
  const dispatch = useDispatch();

  const { isOpen } = useSelector((store) => store.modal);
  const { currentCompetitor, voteCount } = useSelector(
    (store) => store.competitor
  );

  // console.log(competitors)
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addVoteToCompetitor(currentCompetitor.Id));
    dispatch(resetState());
    closeModal();
  };

  function closeModal() {
    dispatch(handleModal());
  }

  if (!currentCompetitor) return;

  const backgroundStyle = {
    width: "100%",
    // height: "500px",
    background: `linear-gradient(0deg,#128b4871,rgba(0,0,0,0) 60%,rgba(0,0,0,0)), url('${currentCompetitor.Photo}')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    BackgroundPosition: "center",
  };

  return (
    <div>
      {/* <button onClick={() => dispatch(handleModal())}>Open Modal</button> */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        // className="modal"
        // overlayClassName="overlay"
      >
        <div className="modal_container">
          <div className="competitor_info">
            <div style={backgroundStyle}></div>
            <div className="bio">
              <div className="divider">
                <label htmlFor="">Name</label>
                <span>
                  {currentCompetitor.FirstName +
                    " " +
                    currentCompetitor.MiddleName}
                </span>
              </div>
              <div className="divider">
                <label htmlFor="">State</label>
                <span>{currentCompetitor.RepresentingState}</span>
              </div>
              <div className="divider">
                <label htmlFor="">Background Study</label>
                <span> {currentCompetitor.PersonalBackground}</span>
              </div>
              <div className="divider">
                <label htmlFor="">Employment School</label>
                <span>{currentCompetitor.EmploymentorSchool}</span>
              </div>
            </div>
          </div>

          <div className="vote_container">
            <div className="vote_count">
              <span>Purchase Vote</span>
              <div className="vote_controls">
                <button type="button" onClick={() => dispatch(decreaseVote())}>
                  <FaMinus />
                </button>
                <span>{voteCount}</span>
                <button type="button" onClick={() => dispatch(inCreaseVote())}>
                  <FaPlus />
                </button>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <span>Pay With Evc, Zaad and Sahal</span>
              <input
                type="number"
                placeholder="Enter Your Number"
                className="form_control"
              />
              <button type="submit">Vote Now</button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};
