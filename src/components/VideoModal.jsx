import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function VideoModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button bsPrefix="titleVideo" onClick={handleShow}>
        <span>Title</span>
      </Button>

      <Modal show={show} onHide={handleClose} size="xl">
        <iframe
          src="https://www.youtube.com/embed/JSRtYpNRoN0"
          title="Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </Modal>
    </>
  );
}

export default VideoModal;
