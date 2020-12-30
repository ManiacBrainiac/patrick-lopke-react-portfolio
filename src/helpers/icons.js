import 
{ faTrash, 
faSignOutAlt, 
faEdit, 
faSpinner, 
faPlusCircle,
 faPhoneVolume,
 faEnvelope,
 faAddressBook,
 faLock
 } 
from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
return library.add(faTrash, faSignOutAlt, faEdit, faSpinner,faPlusCircle, faPhoneVolume, faEnvelope, faAddressBook, faLock);
}

export default Icons;