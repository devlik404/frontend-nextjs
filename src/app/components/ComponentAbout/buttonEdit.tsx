
import { Button, Icon } from "@chakra-ui/react";
import { BiEditAlt } from "react-icons/bi";
const EditButton = ({ isEditing, handleEditClick, handleSaveClick ,isSaveUpdate}:any) => {
  return (
    <Button
      variant="ghost"
      onClick={isEditing ? handleSaveClick : handleEditClick}
      type={isSaveUpdate ? "submit" : "button"}
      bgGradient="linear(to-r, var(--Golden, #94783E), var(--Golden, #F3EDA6), var(--Golden, #F8FAE5), var(--Golden, #FFE2BE), var(--Golden, #D5BE88), var(--Golden, #F8FAE5), var(--Golden, #D5BE88))"
      backgroundClip="text"
      _hover={{
        bgGradient: "linear(to-r, var(--Golden, #F8FAE5), var(--Golden, #D5BE88))",
      }}
      _active={{
        bgGradient: "linear(to-r, var(--Golden, #FFE2BE), var(--Golden, #F8FAE5))",
      }}
    
      border={"none"}
  
    >
        {isEditing ? (isSaveUpdate ? "Submit" : "Save & Update") : <Icon as={BiEditAlt} color={"white"} />}
    {/* {isEditing ? "Save & Update" : <Icon as={BiEditAlt} color={"white"}/>} */}
    </Button>
  );
};

export default EditButton;
