import { FormCreateAnnouncement } from "../../form/formCreateAnnouncement";
import { ModalAnnouncementStyled } from "./style";

interface IProps {
  ToggleShowModal: () => void;
}

export const ModalCreateAnnouncement = ({ ToggleShowModal }: IProps) => {
  return (
    <ModalAnnouncementStyled>
      <div className="modal-card">
        <div className="header-modal-card">
          <p>Criar Anuncio</p>
          <button className="button-close" onClick={() => ToggleShowModal()}>
            x
          </button>
        </div>
        <FormCreateAnnouncement ToggleShowModal={ToggleShowModal} />
      </div>
    </ModalAnnouncementStyled>
  );
};
