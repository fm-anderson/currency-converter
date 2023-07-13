import { useNavigate } from 'react-router-dom';

function ModalConfirm() {
  const navigate = useNavigate();

  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <form method="dialog" className="modal-box">
        <h3 className="font-bold text-lg">
          Are you sure you want to delete all data?
        </h3>
        <p className="py-4">This action is irreversable</p>
        <div className="modal-action">
          <button className="btn" type="submit">
            Cancel
          </button>
          <button
            className="btn"
            type="submit"
            onClick={() => navigate('/logout')}
          >
            Confirm
          </button>
        </div>
      </form>
    </dialog>
  );
}

export default ModalConfirm;
