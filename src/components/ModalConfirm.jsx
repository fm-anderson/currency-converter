import { useState } from 'react';
import { Form } from 'react-router-dom';

function ModalConfirm() {
  const [isOpen, setIsOpen] = useState(false);

  const checkChecked = (e) => {
    setIsOpen(e.target.checked);
  };

  return (
    <>
      <input
        type="checkbox"
        id="modal-confirm"
        className="modal-toggle"
        checked={isOpen}
        onChange={checkChecked}
      />
      <Form className="modal" method="post" onSubmit={() => setIsOpen(false)}>
        {/* submitAction will check hidden field's value */}
        <input type="hidden" name="_action" value="logout" />
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure you want to delete all data?
          </h3>
          <p className="py-4">This action is irreversable</p>
          <div className="modal-action">
            <label htmlFor="modal-confirm" className="btn">
              Cancel
            </label>
            <button className="btn btn-warning">Confirm</button>
          </div>
        </div>
      </Form>
    </>
  );
}

export default ModalConfirm;
