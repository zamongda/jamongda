import DrawerPopup from "@common/modal/drawer-popup";
import { css, sva } from "@styled-system/css";
import MyWordsDrawerFilter from "./drawer-filter";

interface IMyWordsDrawerProps {
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
}

const MyWordsDrawer = ({ modalOpen, setModalOpen }: IMyWordsDrawerProps) => {
  const wordsListStyle = WordsListSva();
  return (
    <DrawerPopup isOpen={modalOpen} setModalOpen={setModalOpen}>
      <MyWordsDrawerFilter />
      <ul className={wordsListStyle.wrapper}>
        <li className={wordsListStyle.item}>
          <div>
            <div className={wordsListStyle.EngWord}>English Word</div>
            <div className={wordsListStyle.KorWord}>영어 단어</div>
          </div>
          <div className={wordsListStyle.buttonWrapper}>
            <button>
              <img
                src="/icons/icon-pencil.svg"
                alt="수정"
                className={css({ w: "18px" })}
              />
            </button>
            <button>
              <img src="/icons/icon-close.svg" alt="삭제" />
            </button>
          </div>
        </li>
        <li className={wordsListStyle.item}>
          <div>
            <div className={wordsListStyle.EngWord}>English Word</div>
            <div className={wordsListStyle.KorWord}>영어 단어</div>
          </div>
          <div className={wordsListStyle.buttonWrapper}>
            <button>
              <img
                src="/icons/icon-pencil.svg"
                alt="수정"
                className={css({ w: "18px" })}
              />
            </button>
            <button>
              <img src="/icons/icon-close.svg" alt="삭제" />
            </button>
          </div>
        </li>
      </ul>
    </DrawerPopup>
  );
};

export default MyWordsDrawer;

const WordsListSva = sva({
  slots: [
    "wrapper",
    "item",
    "wordWrapper",
    "EngWord",
    "KorWord",
    "buttonWrapper",
  ],
  base: {
    wrapper: {
      "& li ~ li": {
        borderTop: "1px solid #E5E5E5",
        mt: "20px",
        pt: "20px",
      },
    },
    item: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      pr: "10px",
    },
    EngWord: {
      textStyle: "Text-20-M",
    },
    KorWord: {
      textStyle: "Text-16-M",
      color: "gray.05",
    },
    buttonWrapper: {
      display: "flex",
      gap: "12px",
    },
  },
});
