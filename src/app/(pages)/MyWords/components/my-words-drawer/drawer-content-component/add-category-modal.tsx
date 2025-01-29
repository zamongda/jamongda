import { BaseModalProps } from "@common/modal/types";
import CategoryModal from "../../../../../components/category-modal";
import { addCategory } from "../../../../../api/category";

interface IAddWordModalProps extends BaseModalProps {
  refetch: () => void;
}
const AddCategoryModal = ({modalOpen, setModalOpen, refetch}:IAddWordModalProps) => {
      const handleAddCategory = async (name: string) => {
        const { success } = await addCategory(name);
    
        if (success) {
          alert("추가되었습니다.");
          refetch();
          return;
        }
        alert("잠시후 다시 시도해주세요.");
        return;
      };
    return <CategoryModal modalOpen={modalOpen} setModalOpen={setModalOpen} handleCategory={handleAddCategory} />
}

export default AddCategoryModal;