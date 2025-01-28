import { BaseModalProps } from "@common/modal/types";
import CategoryModal from "../../../../../components/category-modal";
import { addCategory } from "../../../../../api/category";

interface IAddCategoryModalProps extends BaseModalProps {}

const AddCategoryModal = ({modalOpen, setModalOpen}:IAddCategoryModalProps) => {
      const handleAddCategory = async (name: string) => {
        const { success } = await addCategory(name);
    
        if (success) {
          alert("추가되었습니다.");
          return;
        }
        alert("잠시후 다시 시도해주세요.");
        return;
      };
    return <CategoryModal modalOpen={modalOpen} setModalOpen={setModalOpen} handleCategory={handleAddCategory} />
}

export default AddCategoryModal;